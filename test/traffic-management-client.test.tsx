import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { TrafficManagementClient } from '@/app/traffic/components/traffic-management-client'
import type { TrafficRecord } from '@/types/traffic'

const records: TrafficRecord[] = [
  {
    id: 'newer',
    date: '2026-06',
    data: { 招商: 25, 雪球: 5 },
    createdAt: '2026-06-01T00:00:00.000Z',
    updatedAt: '2026-06-01T00:00:00.000Z'
  },
  {
    id: 'older',
    date: '2025-12',
    data: { 招商: 10 },
    createdAt: '2025-12-01T00:00:00.000Z',
    updatedAt: '2025-12-01T00:00:00.000Z'
  }
]

test('TrafficManagementClient fills the add editor from the latest record', () => {
  const markup = renderToStaticMarkup(<TrafficManagementClient initialRecords={records} />)

  assert.match(markup, /id="traffic-json-data"/)
  assert.match(markup, /aria-describedby="traffic-json-error"/)
  const editorMarkup = markup.match(
    /<textarea[^>]*id="traffic-json-data"[^>]*>(.*?)<\/textarea>/s
  )?.[1]

  assert.match(editorMarkup ?? '', /&quot;招商&quot;: 25/)
  assert.doesNotMatch(editorMarkup ?? '', /&quot;招商&quot;: 10/)
})

test('TrafficManagementClient renders json editing actions and validation region', () => {
  const markup = renderToStaticMarkup(<TrafficManagementClient initialRecords={records} />)

  assert.match(markup, />格式化</)
  assert.match(markup, />填充最近一月</)
  assert.match(markup, /id="traffic-json-error"/)
  assert.match(markup, /aria-live="polite"/)
})
