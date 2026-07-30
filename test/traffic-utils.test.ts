import test from 'node:test'
import assert from 'node:assert/strict'
import {
  buildTrafficCsv,
  getMonthlyTrafficChartData,
  getRecentMonthRange,
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

test('getRecentMonthRange returns the latest twelve calendar months', () => {
  assert.deepEqual(getRecentMonthRange('2026-07'), {
    startMonth: '2025-08',
    endMonth: '2026-07'
  })
})

test('getMonthlyTrafficChartData creates inclusive labels across years', () => {
  const result = getMonthlyTrafficChartData([], [], '2025-12', '2026-02')

  assert.deepEqual(result.labels, ['2025-12', '2026-01', '2026-02'])
})

test('getMonthlyTrafficChartData carries forward only missing monthly snapshots', () => {
  const monthlyRecords: TrafficRecord[] = [
    {
      id: '1',
      date: '2025-11',
      data: { 招商: 8, 雪球: 2 },
      createdAt: '2025-11-01T00:00:00.000Z',
      updatedAt: '2025-11-01T00:00:00.000Z'
    },
    {
      id: '2',
      date: '2026-01',
      data: { 招商: 10, 雪球: 5 },
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z'
    },
    {
      id: '3',
      date: '2026-03',
      data: { 招商: 15 },
      createdAt: '2026-03-01T00:00:00.000Z',
      updatedAt: '2026-03-01T00:00:00.000Z'
    }
  ]

  const result = getMonthlyTrafficChartData(monthlyRecords, ['招商', '雪球'], '2025-12', '2026-04')

  assert.deepEqual(result.categoryData, {
    招商: [8, 10, 10, 15, 15],
    雪球: [2, 5, 5, 0, 0]
  })
  assert.deepEqual(result.amounts, [10, 15, 15, 15, 15])
})

test('getMonthlyTrafficChartData fills zero without historical snapshots', () => {
  const result = getMonthlyTrafficChartData([], ['招商', '雪球'], '2025-12', '2026-02')

  assert.deepEqual(result.categoryData, {
    招商: [0, 0, 0],
    雪球: [0, 0, 0]
  })
  assert.deepEqual(result.amounts, [0, 0, 0])
})

test('monthly traffic helpers reject invalid month ranges', () => {
  assert.throws(() => getRecentMonthRange('2026-7'), new Error('月份范围无效'))
  assert.throws(
    () => getMonthlyTrafficChartData([], [], '2026-02', '2026-01'),
    new Error('月份范围无效')
  )
  assert.throws(
    () => getMonthlyTrafficChartData([], [], '2026-00', '2026-01'),
    new Error('月份范围无效')
  )
})
