import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { TrafficStatsClient } from '@/app/traffic/stats/traffic-stats-client'

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
