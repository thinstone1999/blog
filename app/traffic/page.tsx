'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Trash2, Plus, Download, Upload, ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'
import {
  createTrafficData,
  getAllTrafficData,
  updateTrafficData,
  deleteTrafficData,
  createTrafficCategory,
  getAllTrafficCategories,
  deleteTrafficCategory
} from '@/lib/traffic-data'
import type { TrafficDataWithCategory, TrafficCategoryType } from '@/types/traffic'

// 定义流量数据类型
type TrafficData = TrafficDataWithCategory

// 定义流量类别类型
type TrafficCategory = TrafficCategoryType

export default function TrafficManagementPage() {
  // 流量数据状态
  const [trafficData, setTrafficData] = useState<TrafficData[]>([])

  // 流量类别状态
  const [categories, setCategories] = useState<TrafficCategory[]>([])

  // 表单状态
  const [formData, setFormData] = useState({
    categoryId: '',
    amount: '',
    year: String(new Date().getFullYear()), // 年份
    month: String(new Date().getMonth() + 1) // 月份
  })

  // 新类别输入状态
  const [newCategory, setNewCategory] = useState('')
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [showCategoryManager, setShowCategoryManager] = useState(false)

  // 分页和筛选状态
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10) // 每页显示10条
  const [filterYear, setFilterYear] = useState('') // 按年度筛选

  // 加载数据
  useEffect(() => {
    loadTrafficData()
    loadCategories()
  }, [])

  // 加载流量数据
  const loadTrafficData = async () => {
    try {
      const result = await getAllTrafficData()
      if (result.code === 0 && result.data) {
        setTrafficData(result.data)
      } else {
        toast.error(result.msg || '加载流量数据失败')
      }
    } catch (error) {
      console.error('加载流量数据失败:', error)
      toast.error('加载流量数据失败')
    }
  }

  // 加载类别数据
  const loadCategories = async () => {
    try {
      const result = await getAllTrafficCategories()
      if (result.code === 0 && result.data) {
        setCategories(result.data)
      } else {
        toast.error(result.msg || '加载类别数据失败')
      }
    } catch (error) {
      console.error('加载类别数据失败:', error)
      toast.error('加载类别数据失败')
    }
  }

  // 筛选和排序数据
  const filteredAndSortedData = trafficData
    .filter((item) => {
      if (filterYear) {
        const [year] = item.date.split('-')
        return year === filterYear
      }
      return true
    })
    .sort((a, b) => b.date.localeCompare(a.date)) // 按日期降序排列

  // 计算分页数据
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredAndSortedData.slice(startIndex, endIndex)

  // 导入导出功能
  const exportData = () => {
    // 创建CSV内容
    let csvContent = 'id,category,amount,date\n' // 表头

    // 添加流量数据
    trafficData.forEach((item) => {
      // 获取类别名称
      const category = categories.find((cat) => cat.id === item.categoryId)
      const categoryName = category ? category.name : item.categoryId

      // 添加数据行，处理可能包含逗号的值
      csvContent += `"${item.id}","${categoryName}","${item.amount}","${item.date}"\n`
    })

    // 创建Blob对象并下载
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `traffic-data-${new Date().toISOString().slice(0, 19)}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success('数据导出成功')
  }

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        if (!content) {
          toast.error('文件内容为空')
          return
        }

        // 解析CSV内容
        const lines = content.split('\n')
        if (lines.length < 2) {
          toast.error('CSV文件格式不正确')
          return
        }

        // 解析数据行
        const newTrafficData: TrafficData[] = []
        const newCategoriesMap: { [name: string]: string } = {}

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim()
          if (!line) continue // 跳过空行

          // 处理可能包含引号和逗号的值
          const values: string[] = []
          let currentValue = ''
          let insideQuotes = false

          for (let j = 0; j < line.length; j++) {
            const char = line[j]

            if (char === '"') {
              if (insideQuotes && j + 1 < line.length && line[j + 1] === '"') {
                // 处理双引号转义
                currentValue += '"'
                j++ // 跳过下一个引号
              } else {
                // 切换引号状态
                insideQuotes = !insideQuotes
              }
            } else if (char === ',' && !insideQuotes) {
              values.push(currentValue.trim().replace(/^"|"$/g, '')) // 移除首尾引号
              currentValue = ''
            } else {
              currentValue += char
            }
          }

          // 添加最后一个值
          values.push(currentValue.trim().replace(/^"|"$/g, ''))

          // 确保有足够的值
          if (values.length >= 4) {
            // 查找或创建类别
            let categoryId = newCategoriesMap[values[1]] // values[1] 是类别名称
            if (!categoryId) {
              // 检查是否已存在于现有类别中
              const existingCategory = categories.find((cat) => cat.name === values[1])
              if (existingCategory) {
                categoryId = existingCategory.id
              } else {
                // 创建新类别
                createTrafficCategory({ name: values[1] })
                  .then((categoryResult) => {
                    if (categoryResult.code === 0 && categoryResult.data) {
                      categoryId = categoryResult.data.id
                      // 更新本地类别状态
                      setCategories((prev) => [...prev, categoryResult.data as TrafficCategoryType])
                    } else {
                      // 如果创建失败，尝试查找现有类别
                      const existing = categories.find((cat) => cat.name === values[1])
                      if (existing) {
                        categoryId = existing.id
                      } else {
                        // 如果还是找不到，创建临时ID
                        categoryId = Date.now().toString() + Math.random().toString(36).substr(2, 5)
                      }
                    }

                    newCategoriesMap[values[1]] = categoryId
                  })
                  .catch((error) => {
                    console.error('创建类别失败:', error)
                    // 如果创建失败，创建临时ID
                    categoryId = Date.now().toString() + Math.random().toString(36).substr(2, 5)
                    newCategoriesMap[values[1]] = categoryId
                  })
              }
            }

            // 创建流量数据项
            const newItem: TrafficData = {
              id: values[0],
              categoryId: categoryId,
              amount: parseFloat(values[2]),
              date: values[3],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              categoryInfo: {
                id: categoryId,
                name: values[1],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
            }

            newTrafficData.push(newItem)
          }
        }

        // 将解析的数据逐个保存到数据库
        let successCount = 0
        let processedCount = 0

        if (newTrafficData.length === 0) {
          toast.info('没有找到有效的数据行')
          return
        }

        newTrafficData.forEach((item) => {
          createTrafficData({
            categoryId: item.categoryId,
            amount: item.amount,
            date: item.date
          })
            .then((result) => {
              if (result.code === 0) {
                successCount++
              } else {
                console.error(`保存流量数据失败: ${result.msg}`)
              }
            })
            .catch((error) => {
              console.error(`保存流量数据时出错:`, error)
            })
            .finally(() => {
              processedCount++
              if (processedCount === newTrafficData.length) {
                // 所有数据处理完成，重新加载数据
                loadTrafficData()
                loadCategories()
                toast.success(`成功导入 ${successCount}/${newTrafficData.length} 条数据`)
              }
            })
        })
      } catch (error) {
        console.error('导入数据失败:', error)
        toast.error('导入数据失败，请检查文件格式')
      }
    }
    reader.readAsText(file)
    // 重置input，允许重复导入同一文件
    event.target.value = ''
  }

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value } = target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // 添加新流量数据
  const handleAddTraffic = async () => {
    if (!formData.categoryId || !formData.amount || !formData.year || !formData.month) {
      toast.error('请填写完整信息')
      return
    }

    const amount = parseFloat(formData.amount)
    if (isNaN(amount) || amount <= 0) {
      toast.error('请输入有效的数量')
      return
    }

    // 创建月份标识符，格式为 YYYY-MM
    const monthIdentifier = `${formData.year}-${formData.month.padStart(2, '0')}`

    try {
      const result = await createTrafficData({
        categoryId: formData.categoryId,
        amount: amount,
        date: monthIdentifier
      })

      if (result.code === 0) {
        // 重新加载数据
        loadTrafficData()

        // 重置表单
        const now = new Date()
        setFormData({
          categoryId: '',
          amount: '',
          year: String(now.getFullYear()),
          month: String(now.getMonth() + 1)
        })

        toast.success('流量数据已添加')
      } else {
        toast.error(result.msg || '添加流量数据失败')
      }
    } catch (error) {
      console.error('添加流量数据失败:', error)
      toast.error('添加流量数据失败')
    }
  }

  // 删除流量数据
  const handleDeleteTraffic = async (id: string) => {
    try {
      const result = await deleteTrafficData(id)

      if (result.code === 0) {
        // 从本地状态中移除
        setTrafficData((prev) => prev.filter((item) => item.id !== id))
        toast.success('流量数据已删除')
      } else {
        toast.error(result.msg || '删除流量数据失败')
      }
    } catch (error) {
      console.error('删除流量数据失败:', error)
      toast.error('删除流量数据失败')
    }
  }

  // 编辑流量数据
  const [editingRecord, setEditingRecord] = useState<TrafficData | null>(null)

  const handleEditTraffic = (record: TrafficData) => {
    setEditingRecord(record)
    // 解析月份标识符
    const [year, month] = record.date.split('-')
    setFormData({
      categoryId: record.categoryId,
      amount: String(record.amount),
      year,
      month
    })
  }

  const handleUpdateTraffic = async () => {
    if (!formData.categoryId || !formData.amount || !formData.year || !formData.month) {
      toast.error('请填写完整信息')
      return
    }

    const amount = parseFloat(formData.amount)
    if (isNaN(amount) || amount <= 0) {
      toast.error('请输入有效的数量')
      return
    }

    // 创建月份标识符，格式为 YYYY-MM
    const monthIdentifier = `${formData.year}-${formData.month.padStart(2, '0')}`

    if (!editingRecord) {
      toast.error('没有正在编辑的记录')
      return
    }

    try {
      const result = await updateTrafficData(
        editingRecord.id,
        amount,
        monthIdentifier,
        formData.categoryId
      )

      if (result.code === 0) {
        // 重新加载数据
        loadTrafficData()

        setEditingRecord(null)
        const now = new Date()
        setFormData({
          categoryId: '',
          amount: '',
          year: String(now.getFullYear()),
          month: String(now.getMonth() + 1)
        })
        toast.success('流量数据已更新')
      } else {
        toast.error(result.msg || '更新流量数据失败')
      }
    } catch (error) {
      console.error('更新流量数据失败:', error)
      toast.error('更新流量数据失败')
    }
  }

  const handleCancelEdit = () => {
    setEditingRecord(null)
    const now = new Date()
    setFormData({
      categoryId: '',
      amount: '',
      year: String(now.getFullYear()),
      month: String(now.getMonth() + 1)
    })
  }

  // 删除类别
  const handleDeleteCategory = async (categoryId: string) => {
    try {
      const result = await deleteTrafficCategory(categoryId)

      if (result.code === 0) {
        // 从本地状态中移除
        setCategories((prev) => prev.filter((cat) => cat.id !== categoryId))
        // 如果删除的是当前选中的类别，则清空选择
        if (formData.categoryId === categoryId) {
          setFormData((prev) => ({ ...prev, categoryId: '' }))
        }
        toast.success('类别已删除')
      } else {
        toast.error(result.msg || '删除类别失败')
      }
    } catch (error) {
      console.error('删除类别失败:', error)
      toast.error('删除类别失败')
    }
  }

  // 添加新类别
  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      toast.error('请输入类别名称')
      return
    }

    try {
      const result = await createTrafficCategory({
        name: newCategory.trim()
      })

      if (result.code === 0) {
        // 重新加载类别
        loadCategories()

        setFormData((prev) => ({ ...prev, categoryId: result.data?.id || '' }))
        setNewCategory('')
        setShowAddCategory(false)
        toast.success('类别已添加')
      } else {
        toast.error(result.msg || '添加类别失败')
      }
    } catch (error) {
      console.error('添加类别失败:', error)
      toast.error('添加类别失败')
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">流量管理</h1>
        <div className="flex flex-wrap gap-3 justify-end">
          <button
            onClick={exportData}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm min-w-[96px] flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            导出CSV
          </button>
          <label className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm cursor-pointer min-w-[96px] text-center flex items-center justify-center gap-2">
            <Upload className="w-4 h-4" />
            导入数据
            <input type="file" accept=".csv" onChange={importData} className="hidden" />
          </label>
          <button
            onClick={() => (window.location.href = '/traffic/stats')}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200 text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            流量统计
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
        </div>
      </div>

      {/* 添加流量数据表单 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>添加流量数据</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-1">
                <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  流量类别
                </Label>
                <button
                  type="button"
                  onClick={() => setShowCategoryManager(!showCategoryManager)}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  管理
                </button>
              </div>
              <Select
                value={formData.categoryId}
                onValueChange={(value) => setFormData({ ...formData, categoryId: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择类别" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* 显示类别列表及删除按钮 */}
              {showCategoryManager && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                    类别管理:
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1 text-sm"
                      >
                        <span className="text-blue-700 dark:text-blue-300">{category.name}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteCategory(category.id)}
                          className="ml-2 text-red-500 hover:text-red-700 dark:hover:text-red-400"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  {showAddCategory ? (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="输入新类别"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="flex-grow"
                      />
                      <Button onClick={handleAddCategory} size="sm">
                        添加
                      </Button>
                      <Button onClick={() => setShowAddCategory(false)} size="sm" variant="outline">
                        取消
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => setShowAddCategory(true)}
                      variant="ghost"
                      size="sm"
                      className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      添加新类别
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                数量
              </Label>
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="请输入数量"
                min="0"
                step="0.01"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                  年份
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => {
                    setFormData({ ...formData, year: value })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() - 5 + i
                      return (
                        <SelectItem key={year} value={String(year)}>
                          {year}年
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                  月份
                </Label>
                <Select
                  value={formData.month}
                  onValueChange={(value) => {
                    setFormData({ ...formData, month: value })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1
                      return (
                        <SelectItem key={month} value={String(month)}>
                          {month}月
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row sm:items-end gap-2 mt-2">
              {editingRecord ? (
                <>
                  <Button onClick={handleUpdateTraffic} className="flex-1">
                    更新数据
                  </Button>
                  <Button onClick={handleCancelEdit} variant="outline" className="flex-1">
                    取消
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleAddTraffic}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  添加数据
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 流量数据列表 */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle>流量数据列表</CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Select
                value={filterYear}
                onValueChange={(value) => {
                  setFilterYear(value)
                  setCurrentPage(1) // 重置到第一页
                }}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="全部年度" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - 5 + i
                    return (
                      <SelectItem key={year} value={String(year)}>
                        {year}年
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {trafficData.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                暂无流量数据，请添加数据
              </p>
            </div>
          ) : (
            <>
              {/* 筛选和排序后的数据 */}
              {filteredAndSortedData.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500 dark:text-gray-400 text-center">没有符合条件的数据</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">类别</th>
                        <th className="py-2 px-4 text-left">数量</th>
                        <th className="py-2 px-4 text-left">时间</th>
                        <th className="py-2 px-4 text-left">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((item) => {
                        const categoryName = item.categoryInfo?.name || '未知类别'
                        return (
                          <tr key={item.id} className="border-b">
                            <td className="py-2 px-4">{categoryName}</td>
                            <td className="py-2 px-4">{item.amount.toFixed(2)}</td>
                            <td className="py-2 px-4">{item.date}</td>
                            <td className="py-2 px-4">
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditTraffic(item)}
                                >
                                  编辑
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteTraffic(item.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 分页控件 */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    显示 {startIndex + 1}-{Math.min(endIndex, filteredAndSortedData.length)} 条，共{' '}
                    {filteredAndSortedData.length} 条记录
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      variant="outline"
                    >
                      上一页
                    </Button>

                    {/* 页码按钮 */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        // 总页数小于等于5，显示所有页码
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        // 当前页靠近开头，显示前5页
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        // 当前页靠近结尾，显示后5页
                        pageNum = totalPages - 4 + i
                      } else {
                        // 当前页在中间，显示当前页前后各两页
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          variant={currentPage === pageNum ? 'default' : 'outline'}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}

                    <Button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      variant="outline"
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
