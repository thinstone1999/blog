'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, Save, Trash2, Upload, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
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
  getTrafficCategories,
  getYearOptions,
  parseTrafficCsv,
  parseTrafficJson
} from '@/lib/traffic-utils'
import {
  deleteTrafficRecord,
  importTrafficRecords,
  upsertTrafficRecord
} from '@/lib/traffic-data'

export function TrafficManagementClient({ initialRecords }: { initialRecords: TrafficRecord[] }) {
  const [trafficRecords, setTrafficRecords] = useState(initialRecords)
  const [formData, setFormData] = useState({
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1),
    jsonData: '{}'
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingData, setEditingData] = useState('{}')
  const [currentPage, setCurrentPage] = useState(1)
  const [filterYear, setFilterYear] = useState('all')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = useMemo(() => getTrafficCategories(trafficRecords), [trafficRecords])
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
      toast.error('No data to export.')
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
    toast.success('Export completed.')
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
          toast.error('File content is empty.')
          return
        }

        const records = parseTrafficCsv(content)
        const result = await importTrafficRecords(records)

        if (result.code !== 0) {
          toast.error(`Import failed: ${result.msg}`)
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
          `Import completed: ${result.data?.imported ?? 0} created, ${result.data?.updated ?? 0} updated.`
        )
      } catch (error) {
        console.error('Import traffic data failed:', error)
        toast.error(error instanceof Error ? error.message : 'Import traffic data failed.')
      } finally {
        event.target.value = ''
      }
    }

    reader.readAsText(file)
  }

  const handleAddTraffic = async () => {
    if (!formData.year || !formData.month) {
      toast.error('Please choose year and month.')
      return
    }

    const data = parseTrafficJson(formData.jsonData)
    if (!data) {
      toast.error('JSON format is invalid.')
      return
    }

    if (Object.keys(data).length === 0) {
      toast.error('Data cannot be empty.')
      return
    }

    const date = `${formData.year}-${formData.month.padStart(2, '0')}`
    const result = await upsertTrafficRecord(date, data)

    if (result.code !== 0 || !result.data) {
      toast.error(`Save failed: ${result.msg}`)
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
      jsonData: '{}'
    })
    toast.success('Record saved.')
  }

  const handleDeleteRecord = async (date: string) => {
    const result = await deleteTrafficRecord(date)

    if (result.code !== 0) {
      toast.error(`Delete failed: ${result.msg}`)
      return
    }

    setTrafficRecords((prev) => prev.filter((record) => record.date !== date))
    toast.success('Record deleted.')
  }

  const handleSaveEdit = async (record: TrafficRecord) => {
    const data = parseTrafficJson(editingData)
    if (!data) {
      toast.error('JSON format is invalid.')
      return
    }

    const result = await upsertTrafficRecord(record.date, data)
    if (result.code !== 0 || !result.data) {
      toast.error(`Update failed: ${result.msg}`)
      return
    }

    setTrafficRecords((prev) => prev.map((item) => (item.id === record.id ? result.data! : item)))
    setEditingId(null)
    setEditingData('{}')
    toast.success('Record updated.')
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col p-4">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Traffic Management</h1>
        <div className="flex flex-wrap justify-end gap-3">
          <button
            onClick={exportData}
            className="flex min-w-[96px] items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex min-w-[96px] items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-green-600"
          >
            <Upload className="h-4 w-4" />
            Import Data
          </button>
          <Link
            href="/traffic/stats"
            className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-purple-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Traffic Stats
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-gray-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <input ref={fileInputRef} type="file" accept=".csv" onChange={handleImport} className="hidden" />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add Record</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-2 gap-4 lg:col-span-1">
              <div>
                <Label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Year
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
                  Month
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
              <Label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                Data (JSON)
              </Label>
              <textarea
                value={formData.jsonData}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, jsonData: event.target.value }))
                }
                placeholder='{"category": 105.6, "another": 0}'
                className="h-24 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <Button onClick={handleAddTraffic} className="w-full bg-green-500 hover:bg-green-600 sm:w-auto">
                Save Record
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Records</CardTitle>
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
                <SelectItem value="all">All Years</SelectItem>
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
              <p className="text-center text-gray-500 dark:text-gray-400">No data yet.</p>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-center text-gray-500 dark:text-gray-400">No matching records.</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="w-24 px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Data</th>
                      <th className="w-28 px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((record) => (
                      <tr key={record.id} className="align-top border-b">
                        <td className="px-4 py-2 font-medium">{record.date}</td>
                        <td className="px-4 py-2">
                          {editingId === record.id ? (
                            <textarea
                              value={editingData}
                              onChange={(event) => setEditingData(event.target.value)}
                              className="h-32 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                            />
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
                                <Button variant="default" size="sm" onClick={() => handleSaveEdit(record)}>
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
                                  Edit
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
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredRecords.length)} of{' '}
                    {filteredRecords.length}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      variant="outline"
                    >
                      Prev
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
                      Next
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
