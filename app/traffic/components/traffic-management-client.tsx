'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Braces, Download, RotateCcw, Save, Trash2, Upload, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { TrafficRecord } from '@/types/traffic'
import {
  buildTrafficCsv,
  filterTrafficRecordsByYear,
  formatTrafficDataJson,
  getLatestTrafficDataJson,
  getTrafficCategories,
  getTrafficJsonValidationError,
  getYearOptions,
  parseTrafficCsv,
  parseTrafficJson
} from '@/lib/traffic-utils'
import { deleteTrafficRecord, importTrafficRecords, upsertTrafficRecord } from '@/lib/traffic-data'

export function TrafficManagementClient({ initialRecords }: { initialRecords: TrafficRecord[] }) {
  const [trafficRecords, setTrafficRecords] = useState(initialRecords)
  const [formData, setFormData] = useState({
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1),
    jsonData: getLatestTrafficDataJson(initialRecords)
  })
  const [formJsonTouched, setFormJsonTouched] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingData, setEditingData] = useState('{}')
  const [currentPage, setCurrentPage] = useState(1)
  const [filterYear, setFilterYear] = useState('all')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = useMemo(() => getTrafficCategories(trafficRecords), [trafficRecords])
  const latestTrafficDataJson = useMemo(
    () => getLatestTrafficDataJson(trafficRecords),
    [trafficRecords]
  )
  const formJsonError = formJsonTouched ? getTrafficJsonValidationError(formData.jsonData) : null
  const editingJsonError = editingId ? getTrafficJsonValidationError(editingData) : null
  const filteredRecords = useMemo(
    () => filterTrafficRecordsByYear(trafficRecords, filterYear === 'all' ? '' : filterYear),
    [trafficRecords, filterYear]
  )
  const yearOptions = useMemo(() => getYearOptions(), [])

  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredRecords.slice(startIndex, endIndex)

  const exportData = () => {
    if (trafficRecords.length === 0) {
      toast.error('没有数据可导出')
      return
    }

    const csvContent = buildTrafficCsv(trafficRecords, categories)
    const blob = new Blob([`\ufeff${csvContent}`], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = `traffic-data-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.csv`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
    toast.success('导出成功')
  }

  const handleImport: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = async (loadEvent) => {
      try {
        const content = loadEvent.target?.result as string
        if (!content) {
          toast.error('文件内容为空')
          return
        }

        const records = parseTrafficCsv(content)
        const result = await importTrafficRecords(records)

        if (result.code !== 0) {
          toast.error(`导入失败：${result.msg}`)
          return
        }

        setTrafficRecords((prev) => {
          const map = new Map(prev.map((record) => [record.date, record]))

          records.forEach((record) => {
            const existing = map.get(record.date)
            map.set(record.date, {
              ...(existing ?? {
                id: record.date,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }),
              date: record.date,
              data: { ...(existing?.data ?? {}), ...record.data }
            })
          })

          return Array.from(map.values()).sort((a, b) => b.date.localeCompare(a.date))
        })

        toast.success(
          `导入成功：新增 ${result.data?.imported ?? 0} 条，更新 ${result.data?.updated ?? 0} 条`
        )
      } catch (error) {
        console.error('Import traffic data failed:', error)
        toast.error(error instanceof Error ? error.message : '导入流量数据失败')
      } finally {
        event.target.value = ''
      }
    }

    reader.readAsText(file)
  }

  const handleAddTraffic = async () => {
    if (!formData.year || !formData.month) {
      toast.error('请选择年份和月份')
      return
    }

    setFormJsonTouched(true)
    const validationError = getTrafficJsonValidationError(formData.jsonData)
    if (validationError) {
      toast.error(validationError)
      return
    }

    const data = parseTrafficJson(formData.jsonData)!

    const date = `${formData.year}-${formData.month.padStart(2, '0')}`
    const result = await upsertTrafficRecord(date, data)

    if (result.code !== 0 || !result.data) {
      toast.error(`保存失败：${result.msg}`)
      return
    }

    setTrafficRecords((prev) => {
      const existingIndex = prev.findIndex((item) => item.date === date)
      if (existingIndex === -1) {
        return [result.data!, ...prev].sort((a, b) => b.date.localeCompare(a.date))
      }

      return prev.map((item) => (item.date === date ? result.data! : item))
    })

    setFormData({
      year: String(new Date().getFullYear()),
      month: String(new Date().getMonth() + 1),
      jsonData: formatTrafficDataJson(data)
    })
    setFormJsonTouched(false)
    toast.success('保存成功')
  }

  const handleFormatFormJson = () => {
    setFormJsonTouched(true)
    const data = parseTrafficJson(formData.jsonData)

    if (data) {
      setFormData((prev) => ({ ...prev, jsonData: formatTrafficDataJson(data) }))
    }
  }

  const handleFillLatestTrafficData = () => {
    setFormData((prev) => ({ ...prev, jsonData: latestTrafficDataJson }))
    setFormJsonTouched(false)
  }

  const handleDeleteRecord = async (date: string) => {
    const result = await deleteTrafficRecord(date)

    if (result.code !== 0) {
      toast.error(`删除失败：${result.msg}`)
      return
    }

    setTrafficRecords((prev) => prev.filter((record) => record.date !== date))
    toast.success('删除成功')
  }

  const handleSaveEdit = async (record: TrafficRecord) => {
    const validationError = getTrafficJsonValidationError(editingData)
    if (validationError) {
      toast.error(validationError)
      return
    }

    const data = parseTrafficJson(editingData)!

    const result = await upsertTrafficRecord(record.date, data)
    if (result.code !== 0 || !result.data) {
      toast.error(`更新失败：${result.msg}`)
      return
    }

    setTrafficRecords((prev) => prev.map((item) => (item.id === record.id ? result.data! : item)))
    setEditingId(null)
    setEditingData('{}')
    toast.success('更新成功')
  }

  const handleFormatEditingJson = () => {
    const data = parseTrafficJson(editingData)

    if (data) {
      setEditingData(formatTrafficDataJson(data))
    }
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col p-4">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">流量管理</h1>
        <div className="flex flex-wrap justify-end gap-3">
          <button
            onClick={exportData}
            className="flex min-w-[96px] items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600"
          >
            <Download className="h-4 w-4" />
            导出 CSV
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex min-w-[96px] items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-green-600"
          >
            <Upload className="h-4 w-4" />
            导入数据
          </button>
          <Link
            href="/traffic/stats"
            className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-purple-600"
          >
            <ArrowLeft className="h-4 w-4" />
            流量统计
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-gray-600"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleImport}
            className="hidden"
          />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>添加流量记录</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-2 gap-4 lg:col-span-1">
              <div>
                <Label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                  年份
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, year: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                  月份
                </Label>
                <Select
                  value={formData.month}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, month: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, index) => String(index + 1)).map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <Label
                  htmlFor="traffic-json-data"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  数据（JSON 格式）
                </Label>
                <div className="flex flex-wrap gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={handleFormatFormJson}>
                    <Braces className="h-4 w-4" />
                    格式化
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleFillLatestTrafficData}
                  >
                    <RotateCcw className="h-4 w-4" />
                    填充最近一月
                  </Button>
                </div>
              </div>
              <Textarea
                id="traffic-json-data"
                value={formData.jsonData}
                onChange={(event) => {
                  setFormJsonTouched(true)
                  setFormData((prev) => ({ ...prev, jsonData: event.target.value }))
                }}
                placeholder='{"雪球": 105.6, "招商": 0}'
                aria-invalid={Boolean(formJsonError)}
                aria-describedby="traffic-json-error"
                spellCheck={false}
                className="min-h-44 resize-y bg-white font-mono text-sm leading-6 dark:bg-gray-900"
              />
              <p
                id="traffic-json-error"
                aria-live="polite"
                className="mt-1 min-h-5 text-sm text-destructive"
              >
                {formJsonError}
              </p>
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <Button
                onClick={handleAddTraffic}
                className="w-full bg-green-500 hover:bg-green-600 sm:w-auto"
              >
                保存记录
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>流量数据列表</CardTitle>
            <Select
              value={filterYear}
              onValueChange={(value) => {
                setFilterYear(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部年份</SelectItem>
                {yearOptions.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {trafficRecords.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-center text-gray-500 dark:text-gray-400">暂无数据</p>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-center text-gray-500 dark:text-gray-400">没有符合条件的数据</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="w-24 px-4 py-2 text-left">日期</th>
                      <th className="px-4 py-2 text-left">数据</th>
                      <th className="w-28 px-4 py-2 text-left">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((record) => (
                      <tr key={record.id} className="align-top border-b">
                        <td className="px-4 py-2 font-medium">{record.date}</td>
                        <td className="px-4 py-2">
                          {editingId === record.id ? (
                            <div className="min-w-72 max-w-2xl">
                              <div className="mb-2 flex justify-end">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={handleFormatEditingJson}
                                >
                                  <Braces className="h-4 w-4" />
                                  格式化
                                </Button>
                              </div>
                              <Textarea
                                id={`traffic-edit-json-${record.id}`}
                                value={editingData}
                                onChange={(event) => setEditingData(event.target.value)}
                                aria-invalid={Boolean(editingJsonError)}
                                aria-describedby={`traffic-edit-json-error-${record.id}`}
                                spellCheck={false}
                                className="min-h-44 resize-y bg-white font-mono text-sm leading-6 dark:bg-gray-900"
                              />
                              <p
                                id={`traffic-edit-json-error-${record.id}`}
                                aria-live="polite"
                                className="mt-1 min-h-5 text-sm text-destructive"
                              >
                                {editingJsonError}
                              </p>
                            </div>
                          ) : (
                            <pre className="max-w-xl overflow-x-auto rounded bg-gray-50 p-2 font-mono text-sm dark:bg-gray-800">
                              {JSON.stringify(record.data, null, 2)}
                            </pre>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            {editingId === record.id ? (
                              <>
                                <Button
                                  variant="default"
                                  size="sm"
                                  onClick={() => handleSaveEdit(record)}
                                >
                                  <Save className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setEditingId(null)
                                    setEditingData('{}')
                                  }}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setEditingId(record.id)
                                    setEditingData(JSON.stringify(record.data, null, 2))
                                  }}
                                >
                                  编辑
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteRecord(record.date)}
                                >
                                  <Trash2 className="h-4 w-4" />
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

              {totalPages > 1 && (
                <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-4 sm:flex-row">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    显示 {startIndex + 1}-{Math.min(endIndex, filteredRecords.length)} 条，共{' '}
                    {filteredRecords.length} 条
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      variant="outline"
                    >
                      上一页
                    </Button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                      const pageNumber =
                        totalPages <= 5
                          ? index + 1
                          : currentPage <= 3
                            ? index + 1
                            : currentPage >= totalPages - 2
                              ? totalPages - 4 + index
                              : currentPage - 2 + index

                      return (
                        <Button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          variant={currentPage === pageNumber ? 'default' : 'outline'}
                        >
                          {pageNumber}
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
