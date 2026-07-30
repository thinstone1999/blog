# 流量统计自定义时间范围实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 保留月度和年度视图，并让月度视图支持默认最近 12 个月、自定义跨年范围及缺失月份前值填充。

**Architecture:** 将月份范围、连续月份生成和累计快照填充放在 `lib/traffic-utils.ts`，React 组件只管理筛选状态并消费已计算的数据。年度统计拆成独立函数，保持“每年最后一条记录”的既有口径，不受月度筛选影响。

**Tech Stack:** TypeScript、React 19、Next.js 16、Chart.js、shadcn/ui、Node.js test runner、tsx

## Global Constraints

- 不修改数据库结构、流量记录格式和 API。
- 月度视图默认展示包含当前月份在内的最近 12 个月。
- 缺失整月沿用此前最近记录；此前无记录时补 `0`。
- 年度视图继续展示全部有数据年份，并取每年最后一条记录。
- 使用现有共享 UI 组件，控制逻辑与业务计算分离。
- 按项目约定不启动开发服务器。

---

## 文件结构

- 修改 `lib/traffic-utils.ts`：提供默认范围、连续月度统计和年度统计函数。
- 修改 `test/traffic-utils.test.ts`：覆盖跨年、前值填充、空历史、非法范围和年度回归。
- 创建 `test/traffic-stats-client.test.tsx`：验证默认月度筛选控件和年度切换入口。
- 修改 `app/traffic/stats/traffic-stats-client.tsx`：接入月份输入、快捷重置、校验反馈和响应式图表配置。

### Task 1: 连续月度统计工具

**Files:**
- Modify: `test/traffic-utils.test.ts`
- Modify: `lib/traffic-utils.ts:90-171`

**Interfaces:**
- Produces: `getRecentMonthRange(endMonth?: string): { startMonth: string; endMonth: string }`
- Produces: `getMonthlyTrafficChartData(records: TrafficRecord[], categories: string[], startMonth: string, endMonth: string): { labels: string[]; amounts: number[]; categoryData: Record<string, number[]> }`
- Throws: `Error('月份范围无效')` when either month is not `YYYY-MM` or `startMonth > endMonth`.

- [ ] **Step 1: 写默认范围和连续月份的失败测试**

```typescript
import {
  getMonthlyTrafficChartData,
  getRecentMonthRange
} from '@/lib/traffic-utils'

test('getRecentMonthRange includes the end month in a 12-month range', () => {
  assert.deepEqual(getRecentMonthRange('2026-07'), {
    startMonth: '2025-08',
    endMonth: '2026-07'
  })
})

test('monthly chart data fills a cross-year range continuously', () => {
  const result = getMonthlyTrafficChartData(records, ['招商', '雪球'], '2025-12', '2026-02')
  assert.deepEqual(result.labels, ['2025-12', '2026-01', '2026-02'])
})
```

- [ ] **Step 2: 运行测试并确认因函数尚不存在而失败**

Run: `pnpm exec tsx --test test/traffic-utils.test.ts`

Expected: FAIL，提示 `getRecentMonthRange` 或 `getMonthlyTrafficChartData` 未导出。

- [ ] **Step 3: 实现月份解析、格式化和连续序列**

```typescript
const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/

function parseMonth(value: string) {
  if (!monthPattern.test(value)) throw new Error('月份范围无效')
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

function formatMonth(year: number, month: number) {
  return `${year}-${String(month).padStart(2, '0')}`
}

export function getRecentMonthRange(endMonth = formatMonth(new Date().getFullYear(), new Date().getMonth() + 1)) {
  const { year, month } = parseMonth(endMonth)
  const start = new Date(year, month - 12, 1)
  return {
    startMonth: formatMonth(start.getFullYear(), start.getMonth() + 1),
    endMonth
  }
}
```

生成月份序列时使用数值年月递增，不依赖字符串截取或第三方日期库。

- [ ] **Step 4: 实现前值填充并补充失败测试**

在测试中使用包含 `2025-11`、`2026-01`、`2026-03` 的记录，断言：

```typescript
const result = getMonthlyTrafficChartData(rangeRecords, ['招商', '雪球'], '2025-12', '2026-04')

assert.deepEqual(result.labels, ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04'])
assert.deepEqual(result.categoryData.招商, [8, 10, 10, 15, 15])
assert.deepEqual(result.categoryData.雪球, [2, 5, 5, 0, 0])
assert.deepEqual(result.amounts, [10, 15, 15, 15, 15])
```

先运行同一测试命令，确认新断言失败；然后实现：将记录按日期建立映射，先查找 `date < startMonth` 的最后记录作为初始快照，逐月遇到记录就完整替换快照，没有记录则复用当前快照。

- [ ] **Step 5: 补充非法范围和无历史记录测试并实现校验**

```typescript
assert.throws(
  () => getMonthlyTrafficChartData([], ['招商'], '2026-03', '2026-02'),
  /月份范围无效/
)
assert.deepEqual(
  getMonthlyTrafficChartData([], ['招商'], '2026-01', '2026-02').amounts,
  [0, 0]
)
```

Run: `pnpm exec tsx --test test/traffic-utils.test.ts`

Expected: PASS，且现有 JSON、分类和 CSV 测试继续通过。

- [ ] **Step 6: 提交月度统计工具**

```bash
git add test/traffic-utils.test.ts lib/traffic-utils.ts
git commit -m "feat: 支持连续月份流量统计"
```

### Task 2: 独立年度统计并保持既有口径

**Files:**
- Modify: `test/traffic-utils.test.ts`
- Modify: `lib/traffic-utils.ts:90-171`

**Interfaces:**
- Produces: `getYearlyTrafficChartData(records: TrafficRecord[], categories: string[]): { years: number[]; amounts: number[]; categoryData: Record<string, number[]> }`
- Consumes: `TrafficRecord` and the complete category list.

- [ ] **Step 1: 写年度末值回归测试**

```typescript
test('yearly chart data uses the last record of each year', () => {
  const result = getYearlyTrafficChartData(yearRecords, ['招商', '雪球'])
  assert.deepEqual(result.years, [2025, 2026])
  assert.deepEqual(result.categoryData.招商, [12, 20])
  assert.deepEqual(result.categoryData.雪球, [3, 5])
  assert.deepEqual(result.amounts, [15, 25])
})
```

- [ ] **Step 2: 运行测试并确认因函数尚不存在而失败**

Run: `pnpm exec tsx --test test/traffic-utils.test.ts`

Expected: FAIL，提示 `getYearlyTrafficChartData` 未导出。

- [ ] **Step 3: 从现有 `getTrafficChartData` 提取年度计算**

实现按年份分组、按日期升序取最后记录，并返回统一命名：

```typescript
return {
  years,
  amounts,
  categoryData
}
```

删除不再使用的 `getTrafficChartData`，避免同时维护旧的单年算法和新算法。

- [ ] **Step 4: 运行全部工具测试**

Run: `pnpm exec tsx --test test/traffic-utils.test.ts`

Expected: PASS，无警告和未处理异常。

- [ ] **Step 5: 提交年度统计重构**

```bash
git add test/traffic-utils.test.ts lib/traffic-utils.ts
git commit -m "refactor: 拆分年度流量统计"
```

### Task 3: 接入自定义月份范围界面

**Files:**
- Create: `test/traffic-stats-client.test.tsx`
- Modify: `app/traffic/stats/traffic-stats-client.tsx:3-199`

**Interfaces:**
- Consumes: `getRecentMonthRange`, `getMonthlyTrafficChartData`, `getYearlyTrafficChartData` from `@/lib/traffic-utils`.
- Preserves: `TrafficStatsClient({ initialRecords, initialCategories })` public props.

- [ ] **Step 1: 写页面控件的失败测试**

使用 `react-dom/server` 渲染初始页面，断言默认包含两个月份输入、最近 12 个月按钮，以及月度和年度切换入口：

```tsx
import test from 'node:test'
import assert from 'node:assert/strict'
import { renderToStaticMarkup } from 'react-dom/server'
import { TrafficStatsClient } from '@/app/traffic/stats/traffic-stats-client'

test('traffic stats defaults to the monthly custom range controls', () => {
  const html = renderToStaticMarkup(
    <TrafficStatsClient initialRecords={[]} initialCategories={[]} />
  )

  assert.match(html, /id="traffic-start-month"/)
  assert.match(html, /id="traffic-end-month"/)
  assert.match(html, /最近 12 个月/)
  assert.match(html, /月度视图/)
  assert.match(html, /年度视图/)
})
```

- [ ] **Step 2: 运行页面测试并确认控件缺失导致失败**

Run: `pnpm exec tsx --test test/traffic-stats-client.test.tsx`

Expected: FAIL，输出中不存在 `traffic-start-month`。

- [ ] **Step 3: 替换单年状态与统计调用**

初始化并保留月份范围状态：

```typescript
const defaultRange = useMemo(() => getRecentMonthRange(), [])
const [startMonth, setStartMonth] = useState(defaultRange.startMonth)
const [endMonth, setEndMonth] = useState(defaultRange.endMonth)
const [viewMode, setViewMode] = useState<'month' | 'year'>('month')
const rangeError = startMonth > endMonth ? '开始月份不能晚于结束月份' : ''
```

仅在范围有效时调用月度统计；年度数据始终独立计算。组件不实现补齐算法。

- [ ] **Step 4: 使用现有 Input 和 Button 构建筛选栏**

导入 `Input`，在月度视图展示两个带可见标签的 `type="month"` 输入框和“最近 12 个月”按钮。按钮调用 `getRecentMonthRange()` 同时重置两个状态；年度视图继续显示“显示所有有数据的年份”。切换视图时不重置月份状态。

```tsx
<Input
  id="traffic-start-month"
  type="month"
  value={startMonth}
  max={endMonth}
  onChange={(event) => setStartMonth(event.target.value)}
  aria-invalid={Boolean(rangeError)}
/>
```

结束月份输入使用对应的 `min={startMonth}`。筛选区采用可换行布局，保证移动端不溢出。

- [ ] **Step 5: 更新图表和错误状态**

- 月度标签直接使用连续 `YYYY-MM`。
- 月度标题使用 `${startMonth} 至 ${endMonth} 月度流量`。
- 年度标签使用全部年份，标题保持“历年流量趋势”。
- `rangeError` 存在时在筛选栏下显示 `text-destructive` 提示，并以固定高度空状态替代折线图。
- Chart.js 的 x 轴 ticks 设置 `autoSkip: true` 和 `maxRotation: 0`，长范围自动减少标签。
- 设置 `maintainAspectRatio: false`，外层提供稳定的响应式图表高度，避免窄屏挤压。

- [ ] **Step 6: 格式化并执行静态验证**

Run: `pnpm exec prettier --write app/traffic/stats/traffic-stats-client.tsx lib/traffic-utils.ts test/traffic-utils.test.ts`

Run: `pnpm exec tsx --test test/traffic-utils.test.ts test/traffic-stats-client.test.tsx`

Expected: PASS。

Run: `pnpm lint`

Expected: exit code 0。

Run: `pnpm build`

Expected: exit code 0，统计页类型检查和生产构建成功；不启动服务器。

- [ ] **Step 7: 提交页面接入**

```bash
git add app/traffic/stats/traffic-stats-client.tsx lib/traffic-utils.ts test/traffic-utils.test.ts test/traffic-stats-client.test.tsx
git commit -m "feat: 优化流量统计时间范围"
```

### Task 4: 最终回归检查

**Files:**
- Verify only: `app/traffic/stats/traffic-stats-client.tsx`
- Verify only: `lib/traffic-utils.ts`
- Verify only: `test/traffic-utils.test.ts`
- Verify only: `test/traffic-stats-client.test.tsx`

**Interfaces:**
- Verifies all interfaces from Tasks 1-3 without adding behavior.

- [ ] **Step 1: 检查最终差异和工作区**

Run: `git diff --check`

Expected: 无空白错误。

Run: `git status --short`

Expected: 无未提交的本次任务文件。

- [ ] **Step 2: 运行最终验证**

Run: `pnpm exec tsx --test test/traffic-utils.test.ts test/traffic-stats-client.test.tsx && pnpm lint && pnpm build`

Expected: 三条命令全部成功；不启动服务器。
