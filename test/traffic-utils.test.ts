import test from 'node:test'
import assert from 'node:assert/strict'
import {
  buildTrafficCsv,
  formatTrafficDataJson,
  getLatestTrafficDataJson,
  getMonthlyTrafficChartData,
  getRecentMonthRange,
  getTrafficJsonValidationError,
  getTrafficCategories,
  getYearlyTrafficChartData,
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

test('latest traffic data json uses the greatest month across unordered records', () => {
  const unorderedRecords: TrafficRecord[] = [
    {
      id: '1',
      date: '2026-01',
      data: { 招商: 10 },
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z'
    },
    {
      id: '2',
      date: '2025-12',
      data: { 招商: 8 },
      createdAt: '2025-12-01T00:00:00.000Z',
      updatedAt: '2025-12-01T00:00:00.000Z'
    },
    {
      id: '3',
      date: '2027-03',
      data: { 招商: 18, 雪球: 2 },
      createdAt: '2027-03-01T00:00:00.000Z',
      updatedAt: '2027-03-01T00:00:00.000Z'
    }
  ]

  assert.equal(getLatestTrafficDataJson(unorderedRecords), '{\n  "招商": 18,\n  "雪球": 2\n}')
  assert.equal(getLatestTrafficDataJson([]), '{}')
})

test('traffic data json formatting uses stable indentation', () => {
  assert.equal(formatTrafficDataJson({ 雪球: 10, 招商: 20 }), '{\n  "雪球": 10,\n  "招商": 20\n}')
})

test('traffic json validation reports malformed, unsupported and empty values', () => {
  assert.equal(getTrafficJsonValidationError('{"雪球": 10}'), null)
  assert.equal(getTrafficJsonValidationError('{'), '请输入有效的 JSON 对象，且所有值必须为数字')
  assert.equal(
    getTrafficJsonValidationError('[1, 2]'),
    '请输入有效的 JSON 对象，且所有值必须为数字'
  )
  assert.equal(
    getTrafficJsonValidationError('{"雪球": "10"}'),
    '请输入有效的 JSON 对象，且所有值必须为数字'
  )
  assert.equal(getTrafficJsonValidationError('{}'), '数据不能为空')
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

test('getYearlyTrafficChartData uses the final cumulative snapshot of each year', () => {
  const yearlyRecords: TrafficRecord[] = [
    {
      id: '1',
      date: '2026-12',
      data: { 招商: 20, 雪球: 5 },
      createdAt: '2026-12-01T00:00:00.000Z',
      updatedAt: '2026-12-01T00:00:00.000Z'
    },
    {
      id: '2',
      date: '2025-12',
      data: { 招商: 12, 雪球: 3 },
      createdAt: '2025-12-01T00:00:00.000Z',
      updatedAt: '2025-12-01T00:00:00.000Z'
    },
    {
      id: '3',
      date: '2025-06',
      data: { 招商: 8 },
      createdAt: '2025-06-01T00:00:00.000Z',
      updatedAt: '2025-06-01T00:00:00.000Z'
    }
  ]

  const result = getYearlyTrafficChartData(yearlyRecords, ['招商', '雪球'])

  assert.deepEqual(result, {
    years: [2025, 2026],
    amounts: [15, 25],
    categoryData: {
      招商: [12, 20],
      雪球: [3, 5]
    }
  })
})

test('getYearlyTrafficChartData fills missing known categories with zero', () => {
  const yearlyRecords: TrafficRecord[] = [
    {
      id: '1',
      date: '2025-12',
      data: { 招商: 12 },
      createdAt: '2025-12-01T00:00:00.000Z',
      updatedAt: '2025-12-01T00:00:00.000Z'
    }
  ]

  const result = getYearlyTrafficChartData(yearlyRecords, ['招商', '雪球'])

  assert.deepEqual(result.categoryData, {
    招商: [12],
    雪球: [0]
  })
  assert.deepEqual(result.amounts, [12])
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
