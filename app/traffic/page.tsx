'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Trash2, Download, Upload, ArrowLeft, Save, X } from 'lucide-react'
import { toast } from 'sonner'
import {
  getAllTrafficRecords,
  upsertTrafficRecord,
  deleteTrafficRecord,
  importTrafficRecords
} from '@/lib/traffic-data'
import type { TrafficRecord } from '@/types/traffic'

export default function TrafficManagementPage() {
  // 流量记录状态（按月份）
  const [trafficRecords, setTrafficRecords] = useState<TrafficRecord[]>([])

  // 表单状态 - 新增记录
  const [formData, setFormData] = useState({
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1),
    jsonData: '{}'  // JSON 格式的数据
  })

  // 编辑状态
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingData, setEditingData] = useState<string>('{}')

  // 分页和筛选状态
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [filterYear, setFilterYear] = useState('')

  // 加载数据
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const recordsResult = await getAllTrafficRecords()
      if (recordsResult.code === 0 && recordsResult.data) {
        setTrafficRecords(recordsResult.data)
      }
    } catch (error) {
      console.error('获取流量数据失败:', error)
    }
  }

  // 验证 JSON 格式
  const validateJsonData = (jsonStr: string): Record<string, number> | null => {
    try {
      const parsed = JSON.parse(jsonStr)
      if (typeof parsed !== 'object' || Array.isArray(parsed)) {
        return null
      }
      // 验证所有值都是数字
      for (const [, value] of Object.entries(parsed)) {
        if (typeof value !== 'number') {
          return null
        }
      }
      return parsed
    } catch {
      return null
    }
  }

  // 筛选数据
  const filteredRecords = trafficRecords.filter((record) => {
    if (filterYear) {
      const [year] = record.date.split('-')
      return year === filterYear
    }
    return true
  }).sort((a, b) => b.date.localeCompare(a.date))

  // 计算分页数据
  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredRecords.slice(startIndex, endIndex)

  // 获取所有类别
  const getAllCategories = () => {
    const categorySet = new Set<string>()
    trafficRecords.forEach(record => {
      const data = record.data as Record<string, number>
      Object.keys(data).forEach(key => categorySet.add(key))
    })
    return Array.from(categorySet).sort()
  }

  const categories = getAllCategories()

  // 导出数据为 CSV
  const exportData = () => {
    if (trafficRecords.length === 0) {
      toast.error('没有数据可导出')
      return
    }

    // 构建CSV内容
    let csvContent = '日期'
    categories.forEach(name => {
      csvContent += `,${name}`
    })
    csvContent += '\n'

    // 按日期排序（升序）
    const sortedRecords = [...trafficRecords].sort((a, b) => a.date.localeCompare(b.date))

    sortedRecords.forEach(record => {
      const data = record.data as Record<string, number>
      csvContent += `"${record.date}"`
      categories.forEach(name => {
        csvContent += `,"${data[name] ?? 0}"`
      })
      csvContent += '\n'
    })

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `traffic-data-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success('数据导出成功')
  }

  // 从 CSV 文件导入数据
  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string
        if (!content) {
          toast.error('文件内容为空')
          return
        }

        const lines = content.split('\n')
        if (lines.length < 2) {
          toast.error('CSV 文件格式不正确')
          return
        }

        // 解析表头
        const headerLine = lines[0].trim()
        const headerValues: string[] = []
        let currentValue = ''
        let insideQuotes = false

        for (let j = 0; j < headerLine.length; j++) {
          const char = headerLine[j]
          if (char === '"') {
            insideQuotes = !insideQuotes
          } else if (char === ',' && !insideQuotes) {
            headerValues.push(currentValue.trim().replace(/^"|"$/g, ''))
            currentValue = ''
          } else {
            currentValue += char
          }
        }
        headerValues.push(currentValue.trim().replace(/^"|"$/g, ''))

        const categoryNames = headerValues.slice(1) // 第一列是日期
        const recordsToImport: Array<{ date: string; data: Record<string, number> }> = []

        // 解析数据行
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim()
          if (!line) continue

          const values: string[] = []
          currentValue = ''
          insideQuotes = false

          for (let j = 0; j < line.length; j++) {
            const char = line[j]
            if (char === '"') {
              if (insideQuotes && j + 1 < line.length && line[j + 1] === '"') {
                currentValue += '"'
                j++
              } else {
                insideQuotes = !insideQuotes
              }
            } else if (char === ',' && !insideQuotes) {
              values.push(currentValue.trim().replace(/^"|"$/g, ''))
              currentValue = ''
            } else {
              currentValue += char
            }
          }
          values.push(currentValue.trim().replace(/^"|"$/g, ''))

          if (values.length >= 2) {
            const date = values[0]
            const data: Record<string, number> = {}
            categoryNames.forEach((name, idx) => {
              data[name] = parseFloat(values[idx + 1]) || 0
            })
            recordsToImport.push({ date, data })
          }
        }

        const result = await importTrafficRecords(recordsToImport)
        if (result.code === 0) {
          toast.success(`导入成功：新增 ${result.data?.imported ?? 0} 条，更新 ${result.data?.updated ?? 0} 条`)
          await loadData()
        } else {
          toast.error(`导入失败: ${result.msg}`)
        }
      } catch (error) {
        console.error('导入数据失败:', error)
        toast.error('导入数据失败，请检查文件格式')
      }
    }
    reader.readAsText(file)
    event.target.value = ''
  }

  // 添加新流量记录
  const handleAddTraffic = async () => {
    if (!formData.year || !formData.month) {
      toast.error('请选择年份和月份')
      return
    }

    const data = validateJsonData(formData.jsonData)
    if (!data) {
      toast.error('JSON 格式不正确，应为 {"类别名称": 数值, ...}')
      return
    }

    if (Object.keys(data).length === 0) {
      toast.error('数据不能为空')
      return
    }

    const date = `${formData.year}-${formData.month.padStart(2, '0')}`

    try {
      const result = await upsertTrafficRecord(date, data)

      if (result.code === 0) {
        const existingRecord = trafficRecords.find(r => r.date === date)
        if (existingRecord) {
          setTrafficRecords(prev => prev.map(r => r.date === date ? result.data! : r))
        } else {
          setTrafficRecords(prev => [...prev, result.data!])
        }

        setFormData({ year: String(new Date().getFullYear()), month: String(new Date().getMonth() + 1), jsonData: '{}' })
        toast.success('流量数据已添加')
      } else {
        toast.error(`添加失败: ${result.msg}`)
      }
    } catch (error) {
      console.error('添加流量数据失败:', error)
      toast.error('添加流量数据失败')
    }
  }

  // 删除整条记录
  const handleDeleteRecord = async (date: string) => {
    try {
      const result = await deleteTrafficRecord(date)
      if (result.code === 0) {
        setTrafficRecords(prev => prev.filter(r => r.date !== date))
        toast.success('流量数据已删除')
      }
    } catch (error) {
      console.error('删除流量数据失败:', error)
      toast.error('删除流量数据失败')
    }
  }

  // 开始编辑
  const handleStartEdit = (record: TrafficRecord) => {
    setEditingId(record.id)
    setEditingData(JSON.stringify(record.data, null, 2))
  }

  // 取消编辑
  const handleCancelEdit = () => {
    setEditingId(null)
    setEditingData('{}')
  }

  // 保存编辑
  const handleSaveEdit = async (record: TrafficRecord) => {
    const data = validateJsonData(editingData)
    if (!data) {
      toast.error('JSON 格式不正确，应为 {"类别名称": 数值, ...}')
      return
    }

    try {
      const result = await upsertTrafficRecord(record.date, data)
      if (result.code === 0) {
        setTrafficRecords(prev => prev.map(r => r.id === record.id ? result.data! : r))
        setEditingId(null)
        setEditingData('{}')
        toast.success('流量数据已更新')
      } else {
        toast.error(`更新失败: ${result.msg}`)
      }
    } catch (error) {
      console.error('更新流量数据失败:', error)
      toast.error('更新流量数据失败')
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">流量管理</h1>
        <div className="flex flex-wrap gap-3 justify-end">
          <button onClick={exportData} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm min-w-[96px] flex items-center gap-2">
            <Download className="w-4 h-4" />
            导出CSV
          </button>
          <label className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm cursor-pointer min-w-[96px] text-center flex items-center justify-center gap-2">
            <Upload className="w-4 h-4" />
            导入数据
            <input type="file" accept=".csv" onChange={importData} className="hidden" />
          </label>
          <button onClick={() => (window.location.href = '/traffic/stats')} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            流量统计
          </button>
          <button onClick={() => (window.location.href = '/')} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>添加流量记录</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="grid grid-cols-2 gap-4 lg:col-span-1">
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">年份</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() - 5 + i
                      return <SelectItem key={year} value={String(year)}>{year}年</SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">月份</Label>
                <Select value={formData.month} onValueChange={(value) => setFormData({ ...formData, month: value })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1
                      return <SelectItem key={month} value={String(month)}>{month}月</SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                数据 (JSON格式: {"{"}"类别名称": 数值, ...{"}"})
              </Label>
              <textarea
                value={formData.jsonData}
                onChange={(e) => setFormData({ ...formData, jsonData: e.target.value })}
                placeholder='{"雪球": 105.6, "招商": 0}'
                className="w-full h-24 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <Button onClick={handleAddTraffic} className="w-full sm:w-auto bg-green-500 hover:bg-green-600">添加数据</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle>流量数据列表</CardTitle>
            <Select value={filterYear} onValueChange={(value) => { setFilterYear(value); setCurrentPage(1) }}>
              <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="全部年度" /></SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() - 5 + i
                  return <SelectItem key={year} value={String(year)}>{year}年</SelectItem>
                })}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {trafficRecords.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 dark:text-gray-400 text-center">暂无流量数据，请添加数据</p>
            </div>
          ) : (
            <>
              {filteredRecords.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500 dark:text-gray-400 text-center">没有符合条件的数据</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left w-24">日期</th>
                        <th className="py-2 px-4 text-left">数据 (JSON)</th>
                        <th className="py-2 px-4 text-left w-28">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((record) => (
                        <tr key={record.id} className="border-b align-top">
                          <td className="py-2 px-4 font-medium">{record.date}</td>
                          <td className="py-2 px-4">
                            {editingId === record.id ? (
                              <textarea
                                value={editingData}
                                onChange={(e) => setEditingData(e.target.value)}
                                className="w-full h-32 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                              />
                            ) : (
                              <pre className="text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded overflow-x-auto max-w-xl font-mono">
                                {JSON.stringify(record.data, null, 2)}
                              </pre>
                            )}
                          </td>
                          <td className="py-2 px-4">
                            <div className="flex gap-2">
                              {editingId === record.id ? (
                                <>
                                  <Button variant="default" size="sm" onClick={() => handleSaveEdit(record)}>
                                    <Save className="w-4 h-4" />
                                  </Button>
                                  <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                                    <X className="w-4 h-4" />
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button variant="outline" size="sm" onClick={() => handleStartEdit(record)}>编辑</Button>
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteRecord(record.date)}>
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    显示 {startIndex + 1}-{Math.min(endIndex, filteredRecords.length)} 条，共 {filteredRecords.length} 条
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} variant="outline">上一页</Button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum = totalPages <= 5 ? i + 1 : currentPage <= 3 ? i + 1 : currentPage >= totalPages - 2 ? totalPages - 4 + i : currentPage - 2 + i
                      return <Button key={pageNum} onClick={() => setCurrentPage(pageNum)} variant={currentPage === pageNum ? 'default' : 'outline'}>{pageNum}</Button>
                    })}
                    <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} variant="outline">下一页</Button>
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