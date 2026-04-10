import test from 'node:test'
import assert from 'node:assert/strict'
import {
  buildTrafficCsv,
  getTrafficCategories,
  parseTrafficCsv,
  parseTrafficJson
} from '@/lib/traffic-utils'
import type { TrafficRecord } from '@/types/traffic'

const records: TrafficRecord[] = [
  {
    id: '1',
    date: '2026-01',
    data: { 雪球: 10, 招商: 20 },
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z'
  }
]

test('parseTrafficJson returns object for valid json', () => {
  assert.deepEqual(parseTrafficJson('{"雪球": 10}'), { 雪球: 10 })
  assert.equal(parseTrafficJson('{"雪球": "10"}'), null)
})

test('traffic category helpers keep sorted categories', () => {
  assert.deepEqual(getTrafficCategories(records), ['招商', '雪球'])
})

test('traffic csv helpers round-trip records', () => {
  const csv = buildTrafficCsv(records, ['招商', '雪球'])
  const parsed = parseTrafficCsv(csv)

  assert.deepEqual(parsed, [{ date: '2026-01', data: { 招商: 20, 雪球: 10 } }])
})
