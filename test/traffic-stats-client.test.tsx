import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { TrafficStatsClient } from '@/app/traffic/stats/traffic-stats-client'
import {
  createTrafficSeriesIds,
  updateSelectedSeries
} from '@/app/traffic/stats/traffic-legend-utils'
import type { TrafficRecord } from '@/types/traffic'

const chartRecords: TrafficRecord[] = [
  {
    id: '1',
    date: '2026-07',
    data: { 招商: 20, 雪球: 10 },
    createdAt: '2026-07-01T00:00:00.000Z',
    updatedAt: '2026-07-01T00:00:00.000Z'
  }
]

test('TrafficStatsClient renders month range controls and view switches', () => {
  const markup = renderToStaticMarkup(
    <TrafficStatsClient initialRecords={[]} initialCategories={[]} />
  )

  assert.match(markup, /id="traffic-start-month"/)
  assert.match(markup, /id="traffic-end-month"/)
  assert.match(markup, />最近 12 个月</)
  assert.match(markup, />月度视图</)
  assert.match(markup, />年度视图</)
})

test('TrafficStatsClient renders checked filters for every chart series', () => {
  const markup = renderToStaticMarkup(
    <TrafficStatsClient initialRecords={chartRecords} initialCategories={['招商', '雪球']} />
  )

  assert.match(markup, /<fieldset/)
  assert.match(markup, />显示曲线</)
  assert.match(markup, />全部显示</)
  assert.match(markup, />清空</)
  assert.equal(markup.match(/type="checkbox"/g)?.length, 3)
  assert.equal(markup.match(/checked=""/g)?.length, 3)
  assert.match(markup, />招商</)
  assert.match(markup, />雪球</)
  assert.match(markup, />总量</)
})

test('traffic series selection supports categories and total equally', () => {
  const seriesIds = createTrafficSeriesIds(['招商', '雪球'])
  assert.deepEqual(seriesIds, ['category:招商', 'category:雪球', 'total'])

  const without招商 = updateSelectedSeries(new Set(seriesIds), 'category:招商', false)
  assert.deepEqual([...without招商], ['category:雪球', 'total'])

  const only雪球 = updateSelectedSeries(without招商, 'total', false)
  assert.deepEqual([...only雪球], ['category:雪球'])

  const with招商Again = updateSelectedSeries(only雪球, 'category:招商', true)
  assert.deepEqual([...with招商Again], ['category:雪球', 'category:招商'])
})
