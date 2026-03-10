'use client'

import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import { getAllTrafficRecords, getAllCategories } from '@/lib/traffic-data'
import type { TrafficRecord } from '@/types/traffic'

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

export default function TrafficStatsPage() {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month')
  const [trafficRecords, setTrafficRecords] = useState<TrafficRecord[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [allYears, setAllYears] = useState<number[]>([])

  // 加载数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recordsResult = await getAllTrafficRecords()
        if (recordsResult.code === 0 && recordsResult.data) {
          setTrafficRecords(recordsResult.data)

          // 提取所有年份
          const yearsSet = new Set<number>()
          recordsResult.data.forEach(record => {
            const [year] = record.date.split('-')
            yearsSet.add(Number(year))
          })
          setAllYears(Array.from(yearsSet).sort((a, b) => b - a))
        }

        const categoryResult = await getAllCategories()
        if (categoryResult.code === 0 && categoryResult.data) {
          setCategories(categoryResult.data)
        }
      } catch (error) {
        console.error('获取数据失败:', error)
      }
    }

    fetchData()
  }, [])

  // 处理图表数据
  const processData = () => {
    const monthlyData: number[] = Array(12).fill(0)
    const categoryMonthlyData: Record<string, number[]> = {}
    const categoryTotals: Record<string, number> = {}

    // 初始化每个类别的月度数据数组
    categories.forEach(cat => {
      categoryMonthlyData[cat] = Array(12).fill(0)
    })

    // 按月份聚合数据
    trafficRecords.forEach(record => {
      const [year, monthStr] = record.date.split('-')
      const yearNum = Number(year)
      const monthNum = Number(monthStr)

      if (yearNum === selectedYear) {
        const monthIndex = monthNum - 1
        const data = record.data as Record<string, number>

        Object.entries(data).forEach(([categoryName, amount]) => {
          // 初始化类别（如果不存在）
          if (!categoryMonthlyData[categoryName]) {
            categoryMonthlyData[categoryName] = Array(12).fill(0)
          }

          // 累加月度数据
          categoryMonthlyData[categoryName][monthIndex] += amount
          monthlyData[monthIndex] += amount

          // 累加总量
          if (!categoryTotals[categoryName]) {
            categoryTotals[categoryName] = 0
          }
          categoryTotals[categoryName] += amount
        })
      }
    })

    return { monthlyData, categoryMonthlyData, categoryTotals }
  }

  const { monthlyData, categoryMonthlyData, categoryTotals } = processData()

  // 处理年度数据（流量是累计值，年度总量取当年最后一个有数据的月份的值）
  const processYearlyData = () => {
    const availableYears = new Set<number>()
    trafficRecords.forEach(record => {
      const [year] = record.date.split('-')
      availableYears.add(Number(year))
    })

    const sortedYears = Array.from(availableYears).sort((a, b) => a - b)
    const yearlyAmounts: number[] = []
    const categoryYearlyData: Record<string, number[]> = {}

    // 初始化每个类别的年度数据数组
    categories.forEach(cat => {
      categoryYearlyData[cat] = Array(sortedYears.length).fill(0)
    })

    // 找出每年最后一个有数据的月份，取该月的值作为年度总量
    sortedYears.forEach((year, yearIndex) => {
      // 找出该年所有记录，按月份排序
      const yearRecords = trafficRecords
        .filter(record => {
          const [recordYear] = record.date.split('-')
          return Number(recordYear) === year
        })
        .sort((a, b) => a.date.localeCompare(b.date))

      // 取最后一个有数据的月份
      const lastRecord = yearRecords[yearRecords.length - 1]

      if (lastRecord) {
        const data = lastRecord.data as Record<string, number>
        let yearTotal = 0

        Object.entries(data).forEach(([categoryName, amount]) => {
          if (!categoryYearlyData[categoryName]) {
            categoryYearlyData[categoryName] = Array(sortedYears.length).fill(0)
          }
          categoryYearlyData[categoryName][yearIndex] = amount
          yearTotal += amount
        })

        yearlyAmounts.push(yearTotal)
      } else {
        yearlyAmounts.push(0)
      }
    })

    return { sortedYears, yearlyAmounts, categoryYearlyData }
  }

  const { sortedYears, yearlyAmounts, categoryYearlyData } = processYearlyData()

  // 找到最后一个有数据的月份
  let lastMonthWithData = 0
  trafficRecords.forEach(record => {
    const [year, monthStr] = record.date.split('-')
    if (Number(year) === selectedYear) {
      const monthNum = Number(monthStr)
      if (monthNum > lastMonthWithData) {
        lastMonthWithData = monthNum
      }
    }
  })

  // 辅助函数：为每条线分配不同颜色
  const getLineColor = (index: number) => {
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)',
      'rgb(199, 199, 199)',
      'rgb(83, 102, 255)'
    ]
    return colors[index % colors.length]
  }

  const getBackgroundColor = (index: number) => {
    const colors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(199, 199, 199, 0.2)',
      'rgba(83, 102, 255, 0.2)'
    ]
    return colors[index % colors.length]
  }

  // 准备图表数据
  let labels: string[]
  let displayData: number[]
  let displayCategoryData: Record<string, number[]>

  if (viewMode === 'month') {
    labels = []
    for (let i = 1; i <= lastMonthWithData; i++) {
      labels.push(`${i}月`)
    }
    displayData = monthlyData.slice(0, lastMonthWithData)
    displayCategoryData = {}
    Object.keys(categoryMonthlyData).forEach(cat => {
      displayCategoryData[cat] = categoryMonthlyData[cat].slice(0, lastMonthWithData)
    })
  } else {
    labels = sortedYears.map(year => `${year}年`)
    displayData = yearlyAmounts
    displayCategoryData = categoryYearlyData
  }

  // 为每个类别准备数据集
  const datasets = []
  const categoryNames = Object.keys(displayCategoryData)

  categoryNames.forEach((categoryName, index) => {
    datasets.push({
      label: categoryName,
      data: displayCategoryData[categoryName],
      borderColor: getLineColor(index),
      backgroundColor: getBackgroundColor(index),
      tension: 0.1
    })
  })

  // 添加总量折线
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: viewMode === 'month' ? `${selectedYear}年度月度流量使用情况` : '历年流量使用趋势'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">流量统计</h1>
        <div className="flex flex-wrap gap-3 justify-end">
          <Button
            onClick={() => (window.location.href = '/traffic')}
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600"
          >
            <ArrowLeft className="w-4 h-4" />
            流量管理
          </Button>
          <Button onClick={() => (window.location.href = '/')} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {viewMode === 'month' ? (
          <Select
            value={String(selectedYear)}
            onValueChange={(value) => setSelectedYear(Number(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {allYears.map((year) => (
                <SelectItem key={year} value={String(year)}>
                  {year}年
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <div className="text-sm text-gray-500">显示有数据的年份</div>
        )}

        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'month' ? 'default' : 'outline'}
            onClick={() => setViewMode('month')}
          >
            月度视图
          </Button>
          <Button
            variant={viewMode === 'year' ? 'default' : 'outline'}
            onClick={() => setViewMode('year')}
          >
            年度视图
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* 按日期的折线图 */}
        <Card>
          <CardHeader>
            <CardTitle>
              {viewMode === 'month' ? '各类别月度流量对比' : '各类别年度流量趋势'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {categoryNames.length > 0 ? (
              <Line data={chartData} options={options} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <p>暂无数据，请在流量管理页面添加数据</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}