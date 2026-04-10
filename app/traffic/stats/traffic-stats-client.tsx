'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {
  ArcElement,
  CategoryScale,
  type ChartDataset,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { TrafficRecord } from '@/types/traffic'
import { getTrafficChartData } from '@/lib/traffic-utils'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

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
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month')

  const { lastMonthWithData, monthlyData, categoryMonthlyData, sortedYears, yearlyAmounts, categoryYearlyData } =
    useMemo(
      () => getTrafficChartData(initialRecords, initialCategories, selectedYear),
      [initialCategories, initialRecords, selectedYear]
    )

  const labels =
    viewMode === 'month'
      ? Array.from({ length: lastMonthWithData }, (_, index) => `M${index + 1}`)
      : sortedYears.map((year) => String(year))

  const displayData = viewMode === 'month' ? monthlyData.slice(0, lastMonthWithData) : yearlyAmounts
  const displayCategoryData =
    viewMode === 'month'
      ? Object.fromEntries(
          Object.entries(categoryMonthlyData).map(([category, values]) => [
            category,
            values.slice(0, lastMonthWithData)
          ])
        )
      : categoryYearlyData

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
      label: 'Total',
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: viewMode === 'month' ? `${selectedYear} Monthly Traffic` : 'Traffic Trend by Year'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col p-4">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Traffic Stats</h1>
        <div className="flex flex-wrap justify-end gap-3">
          <Link href="/traffic">
            <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
              <ArrowLeft className="h-4 w-4" />
              Management
            </Button>
          </Link>
          <Link href="/">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        {viewMode === 'month' ? (
          <Select value={String(selectedYear)} onValueChange={(value) => setSelectedYear(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortedYears
                .slice()
                .sort((a, b) => b - a)
                .map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        ) : (
          <div className="text-sm text-gray-500">Showing all years with data</div>
        )}

        <div className="flex space-x-2">
          <Button variant={viewMode === 'month' ? 'default' : 'outline'} onClick={() => setViewMode('month')}>
            Monthly
          </Button>
          <Button variant={viewMode === 'year' ? 'default' : 'outline'} onClick={() => setViewMode('year')}>
            Yearly
          </Button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{viewMode === 'month' ? 'Monthly Comparison' : 'Yearly Trend'}</CardTitle>
          </CardHeader>
          <CardContent>
            {categoryNames.length > 0 ? (
              <Line data={chartData} options={options} />
            ) : (
              <div className="flex h-64 items-center justify-center">
                <p>No data yet. Add records from the management page first.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
