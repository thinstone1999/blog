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
import { Line, Pie } from 'react-chartjs-2'
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
import { getAllTrafficData, getAllTrafficCategories } from '@/lib/traffic-data'
import type { TrafficDataWithCategory, TrafficCategoryType } from '@/types/traffic'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // 用于饼图
  Title,
  Tooltip,
  Legend
)

// 定义流量数据类型
type TrafficData = TrafficDataWithCategory

export default function TrafficStatsPage() {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear()) // 当前年份
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month') // 视图模式：月度或年度
  const [trafficData, setTrafficData] = useState<TrafficData[]>([])
  const [dailyAmounts, setDailyAmounts] = useState<number[]>([]) // 每月汇总数据
  const [categoryTotals, setCategoryTotals] = useState<{
    [key: string]: number
  }>({}) // 按类别汇总数据
  const [categoryDailyData, setCategoryDailyData] = useState<{
    [key: string]: number[]
  }>({}) // 每个类别每月的数据
  const [categories, setCategories] = useState<TrafficCategoryType[]>([])

  // 动态获取所有有数据的年份
  const [allYears, setAllYears] = useState<number[]>([])

  // 更新年份列表
  useEffect(() => {
    const availableYearsSet = new Set<number>()
    trafficData.forEach((item) => {
      const [yearStr] = item.date.split('-')
      const yearNum = Number(yearStr)
      availableYearsSet.add(yearNum)
    })

    const availableYears = Array.from(availableYearsSet).sort((a, b) => b - a) // 降序排列
    setAllYears(availableYears)
  }, [trafficData])

  // 从数据库加载流量数据和类别
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 获取流量数据
        const trafficResult = await getAllTrafficData()
        if (trafficResult.code === 0 && trafficResult.data) {
          setTrafficData(trafficResult.data)
        } else {
          console.error('获取流量数据失败:', trafficResult.msg)
        }

        // 获取流量类别
        const categoryResult = await getAllTrafficCategories()
        if (categoryResult.code === 0 && categoryResult.data) {
          setCategories(categoryResult.data)
        } else {
          console.error('获取流量类别失败:', categoryResult.msg)
        }
      } catch (error) {
        console.error('获取数据失败:', error)
      }
    }

    fetchData()
  }, [])

  // 根据选择的年月过滤和聚合数据
  useEffect(() => {
    if (viewMode === 'month') {
      // 月度视图：按所选年度的月份展示数据，横坐标截止到有数据的月份
      const monthlyData: number[] = Array(12).fill(0) // 一年12个月
      const categoryMonthlyData: { [key: string]: number[] } = {} // 每个类别按月的数据

      // 按类别聚合数据
      const categoryData: { [key: string]: number } = {}

      // 遍历当年的所有数据
      trafficData.forEach((item) => {
        const [year, monthStr] = item.date.split('-')
        const yearNum = Number(year)
        const monthNum = Number(monthStr)

        // 只处理选定年份的数据
        if (yearNum === selectedYear) {
          const monthIndex = monthNum - 1 // 月份索引从0开始

          // 累加到对应月份
          monthlyData[monthIndex] += item.amount

          // 初始化类别月度数据数组
          if (!categoryMonthlyData[item.categoryId]) {
            categoryMonthlyData[item.categoryId] = Array(12).fill(0)
          }

          // 累加对应类别的月度流量
          categoryMonthlyData[item.categoryId][monthIndex] += item.amount

          // 按类别累加
          if (categoryData[item.categoryId]) {
            categoryData[item.categoryId] += item.amount
          } else {
            categoryData[item.categoryId] = item.amount
          }
        }
      })

      // 实现间隔月份以前一月份数据填充的逻辑
      // 首先找到第一个有数据的月份
      let firstMonthWithData = -1
      for (let i = 0; i < 12; i++) {
        if (monthlyData[i] > 0) {
          firstMonthWithData = i
          break
        }
      }

      // 如果第一个月之后有数据，才进行向前填充
      if (firstMonthWithData > 0 && firstMonthWithData < 12) {
        // 从第一个有数据的月份开始，向前填充前面的月份
        for (let i = firstMonthWithData - 1; i >= 0; i--) {
          monthlyData[i] = monthlyData[firstMonthWithData]
        }
      }

      // 对于后续月份，如果某个月份没有数据，则使用前一个月的数据
      for (let i = 1; i < 12; i++) {
        if (monthlyData[i] === 0 && monthlyData[i - 1] !== 0) {
          monthlyData[i] = monthlyData[i - 1] // 使用前一月份的数据
        }
      }

      // 对每个类别的数据也应用相同的逻辑
      Object.keys(categoryMonthlyData).forEach((categoryId) => {
        const categoryDataArray = categoryMonthlyData[categoryId]

        // 找到第一个有数据的月份
        let firstCatMonthWithData = -1
        for (let i = 0; i < 12; i++) {
          if (categoryDataArray[i] > 0) {
            firstCatMonthWithData = i
            break
          }
        }

        // 如果第一个月之后有数据，才进行向前填充
        if (firstCatMonthWithData > 0 && firstCatMonthWithData < 12) {
          // 从第一个有数据的月份开始，向前填充前面的月份
          for (let i = firstCatMonthWithData - 1; i >= 0; i--) {
            categoryDataArray[i] = categoryDataArray[firstCatMonthWithData]
          }
        }

        // 对于后续月份，如果某个月份没有数据，则使用前一个月的数据
        for (let i = 1; i < 12; i++) {
          if (categoryDataArray[i] === 0 && categoryDataArray[i - 1] !== 0) {
            categoryDataArray[i] = categoryDataArray[i - 1] // 使用前一月份的数据
          }
        }
      })

      // 找到最后一个有数据的月份索引
      let lastMonthWithData = -1
      for (let i = 11; i >= 0; i--) {
        if (monthlyData[i] > 0) {
          lastMonthWithData = i
          break
        }
      }

      // 如果找到了有数据的月份，则截断数组到该月份（包含该月份）
      let finalMonthlyData = monthlyData
      const finalCategoryMonthlyData = categoryMonthlyData

      if (lastMonthWithData >= 0) {
        // 截断总数据到有数据的最后月份
        finalMonthlyData = monthlyData.slice(0, lastMonthWithData + 1)

        // 截断每个类别的数据到有数据的最后月份
        Object.keys(categoryMonthlyData).forEach((categoryId) => {
          finalCategoryMonthlyData[categoryId] = categoryMonthlyData[categoryId].slice(
            0,
            lastMonthWithData + 1
          )
        })
      }

      setDailyAmounts(finalMonthlyData) // 存储截断后的月度数据
      setCategoryTotals(categoryData)
      setCategoryDailyData(finalCategoryMonthlyData) // 存储截断后的类别月度数据
    } else if (viewMode === 'year') {
      // 年度视图：获取每年最后一个月的数据，总量为当年最后一个月各类别相加
      // 首先找出所有有数据的年份和每个月份
      const availableYears = new Set<number>()
      const yearMonthMap: { [year: number]: Set<number> } = {}

      trafficData.forEach((item) => {
        const [yearStr, monthStr] = item.date.split('-')
        const yearNum = Number(yearStr)
        const monthNum = Number(monthStr)

        availableYears.add(yearNum)

        if (!yearMonthMap[yearNum]) {
          yearMonthMap[yearNum] = new Set<number>()
        }
        yearMonthMap[yearNum].add(monthNum)
      })

      // 按年份聚合数据
      const yearlyData: { [key: number]: number } = {}
      const categoryYearlyData: { [key: string]: { [key: number]: number } } = {}
      const categoryData: { [key: string]: number } = {}

      // 找出每年最后一个月
      const lastMonthsPerYear: { [year: number]: number } = {}
      Object.keys(yearMonthMap).forEach((yearStr) => {
        const year = parseInt(yearStr)
        const months = Array.from(yearMonthMap[year]).sort((a, b) => b - a) // 降序排列
        lastMonthsPerYear[year] = months[0] // 最大月份即为最后一个月
      })

      trafficData.forEach((item) => {
        const [yearStr, monthStr] = item.date.split('-')
        const yearNum = Number(yearStr)
        const monthNum = Number(monthStr)

        // 只处理有数据的年份
        if (availableYears.has(yearNum)) {
          // 只处理每年最后一个月的数据用于总量计算
          if (monthNum === lastMonthsPerYear[yearNum]) {
            // 累加到对应年份（只累加最后一个月的数据）
            if (!yearlyData[yearNum]) {
              yearlyData[yearNum] = 0
            }
            yearlyData[yearNum] += item.amount
          }

          // 初始化类别年度数据对象
          if (!categoryYearlyData[item.categoryId]) {
            categoryYearlyData[item.categoryId] = {}
          }

          // 只记录每年最后一个月的类别数据
          if (monthNum === lastMonthsPerYear[yearNum]) {
            if (!categoryYearlyData[item.categoryId][yearNum]) {
              categoryYearlyData[item.categoryId][yearNum] = 0
            }
            categoryYearlyData[item.categoryId][yearNum] += item.amount
          }

          // 按类别累加（这里保持原有的年度总计逻辑）
          if (categoryData[item.categoryId]) {
            categoryData[item.categoryId] += item.amount
          } else {
            categoryData[item.categoryId] = item.amount
          }
        }
      })

      // 将年度数据转换为按年份排序的数组
      const sortedYears = Array.from(availableYears).sort((a, b) => a - b)
      const yearlyAmounts: number[] = []
      sortedYears.forEach((year) => {
        yearlyAmounts.push(yearlyData[year] || 0) // 这里现在是每年最后一个月的总量
      })

      // 处理每个类别的年度数据（每年最后一个月的值）
      const processedCategoryYearlyData: { [key: string]: number[] } = {}
      Object.keys(categoryYearlyData).forEach((categoryId) => {
        processedCategoryYearlyData[categoryId] = []
        sortedYears.forEach((year) => {
          processedCategoryYearlyData[categoryId].push(categoryYearlyData[categoryId][year] || 0)
        })
      })

      setDailyAmounts(yearlyAmounts) // 存储年度数据（每年最后一个月的总量）
      setCategoryTotals(categoryData)
      setCategoryDailyData(processedCategoryYearlyData) // 存储年度数据
    }
  }, [trafficData, selectedYear, viewMode])

  // 辅助函数：为每条线分配不同颜色
  const getLineColor = (index: number) => {
    const colors = [
      'rgb(255, 99, 132)', // 红色
      'rgb(54, 162, 235)', // 蓝色
      'rgb(255, 205, 86)', // 黄色
      'rgb(75, 192, 192)', // 青色
      'rgb(153, 102, 255)', // 紫色
      'rgb(255, 159, 64)', // 橙色
      'rgb(199, 199, 199)', // 灰色
      'rgb(83, 102, 255)' // 深蓝色
    ]
    return colors[index % colors.length]
  }

  // 辅助函数：为每个区域分配背景色
  const getBackgroundColor = (index: number) => {
    const colors = [
      'rgba(255, 99, 132, 0.2)', // 红色
      'rgba(54, 162, 235, 0.2)', // 蓝色
      'rgba(255, 205, 86, 0.2)', // 黄色
      'rgba(75, 192, 192, 0.2)', // 青色
      'rgba(153, 102, 255, 0.2)', // 紫色
      'rgba(255, 159, 64, 0.2)', // 橙色
      'rgba(199, 199, 199, 0.2)', // 灰色
      'rgba(83, 102, 255, 0.2)' // 深蓝色
    ]
    return colors[index % colors.length]
  }

  // 准备图表数据
  let labels: string[]
  if (viewMode === 'month') {
    // 月度视图：显示所选年度的月份，截止到有数据的月份
    // 首先找出选定年度的最后一个月份
    let lastMonthWithData = 0
    trafficData.forEach((item) => {
      const [year, monthStr] = item.date.split('-')
      const yearNum = Number(year)
      const monthNum = Number(monthStr)

      if (yearNum === selectedYear && monthNum > lastMonthWithData) {
        lastMonthWithData = monthNum
      }
    })

    // 生成标签，从1月到有数据的最后月份
    labels = []
    for (let i = 1; i <= lastMonthWithData; i++) {
      labels.push(`${i}月`)
    }
  } else {
    // 年度视图：只显示有数据的年份
    const availableYears = new Set<number>()
    trafficData.forEach((item) => {
      const [year] = item.date.split('-').map(Number)
      availableYears.add(year)
    })
    const sortedYears = Array.from(availableYears).sort((a, b) => a - b)
    labels = sortedYears.map((year) => `${year}年`)
  }

  // 为每个类别和总量准备数据集
  const datasets = []

  // 添加每个类别的折线
  Object.keys(categoryDailyData).forEach((categoryId, index) => {
    const category = categories.find((c) => c.id === categoryId)
    const categoryName = category ? category.name : '未知类别'

    datasets.push({
      label: categoryName,
      data: categoryDailyData[categoryId],
      borderColor: getLineColor(index), // 使用辅助函数获取不同颜色
      backgroundColor: getBackgroundColor(index),
      tension: 0.1
    })
  })

  // 添加总量折线（如果有多于一个类别）
  if (Object.keys(categoryDailyData).length > 0) {
    datasets.push({
      label: '总量',
      data: dailyAmounts,
      borderColor: 'rgb(54, 162, 235)', // 蓝色
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderDash: [5, 5], // 虚线表示总量
      tension: 0.1
    })
  }

  const chartData = {
    labels,
    datasets
  }

  // 准备按类别统计的饼图数据
  const categoryLabels = Object.keys(categoryTotals).map((catId) => {
    const category = categories.find((c) => c.id === catId)
    return category ? category.name : '未知类别'
  })

  const categoryData = Object.values(categoryTotals)

  const categoryChartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: '各类别流量占比',
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
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

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: '各类别流量占比'
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
          // 在年度视图模式下，不需要年份选择器，因为会显示所有有数据的年份
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
            {Object.keys(categoryDailyData).length > 0 ? (
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
