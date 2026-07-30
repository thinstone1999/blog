import type { TrafficRecord } from '@/types/traffic'

type TrafficCategorySource = {
  data: Record<string, number>
}

const MONTHS_PER_YEAR = 12
const RECENT_MONTH_COUNT = 12
const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/

export function getYearOptions(baseYear = new Date().getFullYear(), range = 10) {
  return Array.from({ length: range }, (_, index) => String(baseYear - 5 + index))
}

export function getRecentMonthRange(endMonth = getCurrentMonth()) {
  const endMonthIndex = parseMonth(endMonth)

  return {
    startMonth: formatMonth(endMonthIndex - RECENT_MONTH_COUNT + 1),
    endMonth
  }
}

export function getMonthlyTrafficChartData(
  records: TrafficRecord[],
  categories: string[],
  startMonth: string,
  endMonth: string
) {
  const startMonthIndex = parseMonth(startMonth)
  const endMonthIndex = parseMonth(endMonth)

  if (startMonthIndex > endMonthIndex) {
    throw new Error('月份范围无效')
  }

  const labels = Array.from({ length: endMonthIndex - startMonthIndex + 1 }, (_, index) =>
    formatMonth(startMonthIndex + index)
  )
  const recordsByMonth = new Map(records.map((record) => [record.date, record]))
  const priorRecord = [...records]
    .filter((record) => record.date < startMonth)
    .sort((a, b) => a.date.localeCompare(b.date))
    .at(-1)
  let snapshot = getCategorySnapshot(priorRecord, categories)
  const categoryData = Object.fromEntries(categories.map((category) => [category, [] as number[]]))
  const amounts: number[] = []

  labels.forEach((month) => {
    const record = recordsByMonth.get(month)

    if (record) {
      snapshot = getCategorySnapshot(record, categories)
    }

    categories.forEach((category) => {
      categoryData[category].push(snapshot[category])
    })
    amounts.push(categories.reduce((total, category) => total + snapshot[category], 0))
  })

  return { labels, amounts, categoryData }
}

export function getTrafficCategories(records: TrafficCategorySource[]) {
  const categorySet = new Set<string>()

  records.forEach((record) => {
    Object.keys(record.data).forEach((key) => categorySet.add(key))
  })

  return Array.from(categorySet).sort()
}

export function filterTrafficRecordsByYear(records: TrafficRecord[], year: string) {
  if (!year) {
    return [...records].sort((a, b) => b.date.localeCompare(a.date))
  }

  return records
    .filter((record) => record.date.startsWith(`${year}-`))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function parseTrafficJson(json: string): Record<string, number> | null {
  try {
    const parsed = JSON.parse(json)

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return null
    }

    for (const value of Object.values(parsed)) {
      if (typeof value !== 'number') {
        return null
      }
    }

    return parsed as Record<string, number>
  } catch {
    return null
  }
}

export function parseTrafficCsv(content: string) {
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length < 2) {
    throw new Error('CSV 文件格式不正确')
  }

  const [headerLine, ...dataLines] = lines
  const headers = splitCsvLine(headerLine)
  const categories = headers.slice(1)

  return dataLines.map((line) => {
    const values = splitCsvLine(line)
    const date = values[0]
    const data: Record<string, number> = {}

    categories.forEach((name, index) => {
      data[name] = parseFloat(values[index + 1] ?? '0') || 0
    })

    return { date, data }
  })
}

export function buildTrafficCsv(records: TrafficRecord[], categories: string[]) {
  const header = ['日期', ...categories].join(',')
  const rows = [...records]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((record) => {
      const values = categories.map((name) => String(record.data[name] ?? 0))
      return [`"${record.date}"`, ...values.map((value) => `"${value}"`)].join(',')
    })

  return [header, ...rows].join('\n')
}

export function getTrafficChartData(
  records: TrafficRecord[],
  categories: string[],
  selectedYear: number
) {
  const monthlyData = Array(12).fill(0)
  const categoryMonthlyData: Record<string, number[]> = {}

  categories.forEach((category) => {
    categoryMonthlyData[category] = Array(12).fill(0)
  })

  records.forEach((record) => {
    const [year, month] = record.date.split('-')
    const yearNumber = Number(year)
    const monthIndex = Number(month) - 1

    if (yearNumber !== selectedYear) {
      return
    }

    Object.entries(record.data).forEach(([category, amount]) => {
      if (!categoryMonthlyData[category]) {
        categoryMonthlyData[category] = Array(12).fill(0)
      }

      categoryMonthlyData[category][monthIndex] += amount
      monthlyData[monthIndex] += amount
    })
  })

  const lastMonthWithData = records.reduce((max, record) => {
    const [year, month] = record.date.split('-')
    if (Number(year) !== selectedYear) {
      return max
    }
    return Math.max(max, Number(month))
  }, 0)

  const yearSet = new Set<number>()
  records.forEach((record) => {
    yearSet.add(Number(record.date.split('-')[0]))
  })

  const sortedYears = Array.from(yearSet).sort((a, b) => a - b)
  const yearlyAmounts: number[] = []
  const categoryYearlyData: Record<string, number[]> = {}

  categories.forEach((category) => {
    categoryYearlyData[category] = Array(sortedYears.length).fill(0)
  })

  sortedYears.forEach((year, yearIndex) => {
    const lastRecord = [...records]
      .filter((record) => Number(record.date.split('-')[0]) === year)
      .sort((a, b) => a.date.localeCompare(b.date))
      .at(-1)

    let yearTotal = 0

    if (lastRecord) {
      Object.entries(lastRecord.data).forEach(([category, amount]) => {
        if (!categoryYearlyData[category]) {
          categoryYearlyData[category] = Array(sortedYears.length).fill(0)
        }
        categoryYearlyData[category][yearIndex] = amount
        yearTotal += amount
      })
    }

    yearlyAmounts.push(yearTotal)
  })

  return {
    monthlyData,
    categoryMonthlyData,
    lastMonthWithData,
    sortedYears,
    yearlyAmounts,
    categoryYearlyData
  }
}

function splitCsvLine(line: string) {
  const values: string[] = []
  let currentValue = ''
  let insideQuotes = false

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]

    if (char === '"') {
      if (insideQuotes && line[index + 1] === '"') {
        currentValue += '"'
        index += 1
      } else {
        insideQuotes = !insideQuotes
      }
      continue
    }

    if (char === ',' && !insideQuotes) {
      values.push(currentValue.trim().replace(/^"|"$/g, ''))
      currentValue = ''
      continue
    }

    currentValue += char
  }

  values.push(currentValue.trim().replace(/^"|"$/g, ''))

  return values
}

function getCurrentMonth() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

function parseMonth(month: string) {
  if (!MONTH_PATTERN.test(month)) {
    throw new Error('月份范围无效')
  }

  const [year, monthNumber] = month.split('-').map(Number)
  return year * MONTHS_PER_YEAR + monthNumber - 1
}

function formatMonth(monthIndex: number) {
  const year = Math.floor(monthIndex / MONTHS_PER_YEAR)
  const month = (monthIndex % MONTHS_PER_YEAR) + 1
  return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}`
}

function getCategorySnapshot(record: TrafficRecord | undefined, categories: string[]) {
  return Object.fromEntries(categories.map((category) => [category, record?.data[category] ?? 0]))
}
