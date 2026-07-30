'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CalendarClock } from 'lucide-react'
import {
  ArcElement,
  CategoryScale,
  type ChartDataset,
  type ChartOptions,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { TrafficRecord } from '@/types/traffic'
import {
  getMonthlyTrafficChartData,
  getRecentMonthRange,
  getYearlyTrafficChartData
} from '@/lib/traffic-utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const lineColors = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
  'rgb(199, 199, 199)',
  'rgb(83, 102, 255)'
]

const lineBackgrounds = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(199, 199, 199, 0.2)',
  'rgba(83, 102, 255, 0.2)'
]

export function TrafficStatsClient({
  initialRecords,
  initialCategories
}: {
  initialRecords: TrafficRecord[]
  initialCategories: string[]
}) {
  const [defaultRange] = useState(getRecentMonthRange)
  const [startMonth, setStartMonth] = useState(defaultRange.startMonth)
  const [endMonth, setEndMonth] = useState(defaultRange.endMonth)
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month')

  const rangeError =
    !startMonth || !endMonth
      ? '请选择完整的月份范围'
      : startMonth > endMonth
        ? '开始月份不能晚于结束月份'
        : null

  const chartResult = useMemo(() => {
    if (viewMode === 'year') {
      const yearlyData = getYearlyTrafficChartData(initialRecords, initialCategories)
      return {
        labels: yearlyData.years.map(String),
        amounts: yearlyData.amounts,
        categoryData: yearlyData.categoryData
      }
    }

    if (rangeError) {
      return null
    }

    return getMonthlyTrafficChartData(initialRecords, initialCategories, startMonth, endMonth)
  }, [endMonth, initialCategories, initialRecords, rangeError, startMonth, viewMode])

  const labels = chartResult?.labels ?? []
  const displayData = chartResult?.amounts ?? []
  const displayCategoryData = chartResult?.categoryData ?? {}

  const categoryNames = Object.keys(displayCategoryData)
  const datasets: ChartDataset<'line', number[]>[] = categoryNames.map((category, index) => ({
    label: category,
    data: displayCategoryData[category],
    borderColor: lineColors[index % lineColors.length],
    backgroundColor: lineBackgrounds[index % lineBackgrounds.length],
    tension: 0.1
  }))

  if (categoryNames.length > 0) {
    datasets.push({
      label: '总量',
      data: displayData,
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderDash: [5, 5],
      tension: 0.1
    })
  }

  const chartData = {
    labels,
    datasets
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: viewMode === 'month' ? `${startMonth} 至 ${endMonth} 月度流量` : '历年流量趋势'
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 0
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col p-4">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">流量统计</h1>
        <div className="flex flex-wrap justify-end gap-3">
          <Button asChild variant="outline">
            <Link href="/traffic">
              <ArrowLeft className="h-4 w-4" />
              流量管理
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-4">
        <div className="flex w-full flex-wrap gap-2">
          <Button
            type="button"
            variant={viewMode === 'month' ? 'default' : 'outline'}
            aria-pressed={viewMode === 'month'}
            onClick={() => setViewMode('month')}
          >
            月度视图
          </Button>
          <Button
            type="button"
            variant={viewMode === 'year' ? 'default' : 'outline'}
            aria-pressed={viewMode === 'year'}
            onClick={() => setViewMode('year')}
          >
            年度视图
          </Button>
        </div>

        {viewMode === 'month' ? (
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end">
            <div className="grid min-w-0 flex-1 gap-1.5">
              <label className="text-sm font-medium" htmlFor="traffic-start-month">
                开始月份
              </label>
              <Input
                id="traffic-start-month"
                type="month"
                value={startMonth}
                max={endMonth}
                aria-invalid={Boolean(rangeError)}
                onChange={(event) => setStartMonth(event.target.value)}
              />
            </div>
            <div className="grid min-w-0 flex-1 gap-1.5">
              <label className="text-sm font-medium" htmlFor="traffic-end-month">
                结束月份
              </label>
              <Input
                id="traffic-end-month"
                type="month"
                value={endMonth}
                min={startMonth}
                aria-invalid={Boolean(rangeError)}
                onChange={(event) => setEndMonth(event.target.value)}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                setStartMonth(defaultRange.startMonth)
                setEndMonth(defaultRange.endMonth)
              }}
            >
              <CalendarClock />
              最近 12 个月
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">显示所有有数据的年份</p>
        )}
      </div>

      {viewMode === 'month' && rangeError ? (
        <p className="mb-4 text-sm text-destructive" role="alert">
          {rangeError}
        </p>
      ) : null}

      <div className="mb-6 grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{viewMode === 'month' ? '月度对比' : '年度趋势'}</CardTitle>
          </CardHeader>
          <CardContent>
            {viewMode === 'month' && rangeError ? (
              <div className="flex h-64 items-center justify-center text-center text-sm text-destructive sm:h-96">
                {rangeError}
              </div>
            ) : categoryNames.length > 0 ? (
              <div className="h-80 min-w-0 sm:h-[30rem]">
                <Line data={chartData} options={options} />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center px-4 text-center sm:h-96">
                <p className="break-words">暂无数据，请先到流量管理页添加记录</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
