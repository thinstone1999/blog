import { NextRequest } from 'next/server'
import { z } from 'zod'
import type { ApiRes } from '@/lib/utils'
import {
  deleteTrafficRecordByDate,
  getAllTrafficRecords,
  getTrafficRecordsByYear,
  importTrafficRecords as importTrafficRecordsService,
  upsertTrafficRecord as upsertTrafficRecordService
} from '@/lib/services/traffic-data'
import { getTrafficCategories } from '@/lib/traffic-utils'

type TrafficRecord = Awaited<ReturnType<typeof getAllTrafficRecords>>[number]

const upsertTrafficRecordSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}$/, { message: '日期格式必须为 YYYY-MM' }),
  data: z.record(z.string(), z.number())
})

const importTrafficRecordsSchema = z.object({
  records: z.array(
    z.object({
      date: z.string().regex(/^\d{4}-\d{2}$/),
      data: z.record(z.string(), z.number())
    })
  )
})

async function upsertTrafficRecordServer(
  date: string,
  data: Record<string, number>
): Promise<ApiRes<TrafficRecord | null>> {
  try {
    const parsed = upsertTrafficRecordSchema.safeParse({ date, data })

    if (!parsed.success) {
      return { code: 400, data: null, msg: parsed.error.issues[0].message }
    }

    const record = await upsertTrafficRecordService(date, data)
    return { code: 0, msg: '保存流量记录成功', data: record }
  } catch (error) {
    console.error('保存流量记录失败:', error)
    return { code: -1, data: null, msg: `保存流量记录失败: ${error}` }
  }
}

async function getAllTrafficRecordsServer(): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const records = await getAllTrafficRecords()
    return { code: 0, msg: '获取流量记录成功', data: records }
  } catch (error) {
    console.error('获取流量记录失败:', error)
    return { code: -1, msg: `获取流量记录失败: ${error}` }
  }
}

async function getTrafficRecordsByYearServer(year: string): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const records = await getTrafficRecordsByYear(year)
    return { code: 0, msg: '获取流量记录成功', data: records }
  } catch (error) {
    console.error('获取流量记录失败:', error)
    return { code: -1, msg: `获取流量记录失败: ${error}` }
  }
}

async function deleteTrafficRecordServer(date: string): Promise<ApiRes> {
  try {
    await deleteTrafficRecordByDate(date)
    return { code: 0, msg: '删除流量记录成功' }
  } catch (error) {
    console.error('删除流量记录失败:', error)
    return { code: -1, msg: `删除流量记录失败: ${error}` }
  }
}

async function importTrafficRecordsServer(
  records: Array<{ date: string; data: Record<string, number> }>
): Promise<ApiRes<{ imported: number; updated: number }>> {
  try {
    const parsed = importTrafficRecordsSchema.safeParse({ records })

    if (!parsed.success) {
      return { code: 400, msg: parsed.error.issues[0].message }
    }

    const result = await importTrafficRecordsService(records)
    return { code: 0, msg: '导入成功', data: result }
  } catch (error) {
    console.error('批量导入流量记录失败:', error)
    return { code: -1, msg: `批量导入流量记录失败: ${error}` }
  }
}

async function getAllCategoriesServer(): Promise<ApiRes<string[]>> {
  try {
    const records = (await getAllTrafficRecords()) as Array<{
      data: Record<string, number>
    }>
    return { code: 0, msg: '获取类别成功', data: getTrafficCategories(records) }
  } catch (error) {
    console.error('获取类别失败:', error)
    return { code: -1, msg: `获取类别失败: ${error}` }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const year = searchParams.get('year')

    switch (action) {
      case 'getAllTrafficRecords':
      case 'getAllTrafficData':
        return Response.json(await getAllTrafficRecordsServer())
      case 'getTrafficRecordsByYear':
      case 'getTrafficDataByYear':
        if (!year) {
          return Response.json({ code: 400, msg: '缺少年份参数' })
        }
        return Response.json(await getTrafficRecordsByYearServer(year))
      case 'getAllCategories':
        return Response.json(await getAllCategoriesServer())
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }
  } catch (error) {
    console.error('获取流量数据失败:', error)
    return Response.json({ code: -1, msg: '获取流量数据失败' })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'upsertTrafficRecord':
        return Response.json(await upsertTrafficRecordServer(params.date, params.data))
      case 'importTrafficRecords':
        return Response.json(await importTrafficRecordsServer(params.records))
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }
  } catch (error) {
    console.error('创建流量数据失败:', error)
    return Response.json({ code: -1, msg: '创建流量数据失败' })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, date } = body

    if (action !== 'deleteTrafficRecord') {
      return Response.json({ code: 400, msg: '无效的操作' })
    }

    if (!date) {
      return Response.json({ code: 400, msg: '缺少日期参数' })
    }

    return Response.json(await deleteTrafficRecordServer(date))
  } catch (error) {
    console.error('删除流量数据失败:', error)
    return Response.json({ code: -1, msg: '删除流量数据失败' })
  }
}
