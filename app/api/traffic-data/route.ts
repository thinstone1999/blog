import { NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import type { ApiRes } from '@/lib/utils'

// 定义流量记录类型
type TrafficRecord = NonNullable<Awaited<ReturnType<typeof prisma.trafficRecord.findUnique>>>

// ==================== 验证 Schema ====================

const upsertTrafficRecordSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}$/, { message: '日期格式必须为YYYY-MM' }),
  data: z.record(z.string(), z.number())
})

const importTrafficRecordsSchema = z.object({
  records: z.array(z.object({
    date: z.string().regex(/^\d{4}-\d{2}$/),
    data: z.record(z.string(), z.number())
  }))
})

// ==================== 流量记录操作 ====================

async function upsertTrafficRecordServer(
  date: string,
  data: Record<string, number>
): Promise<ApiRes<TrafficRecord | null>> {
  try {
    const parsed = upsertTrafficRecordSchema.safeParse({ date, data })

    if (!parsed.success) {
      const errorMessage = parsed.error.issues[0].message
      return { code: 400, data: null, msg: errorMessage }
    }

    const res = await prisma.trafficRecord.upsert({
      where: { date },
      update: { data },
      create: { date, data }
    })

    return { code: 0, msg: '保存流量记录成功！', data: res }
  } catch (error) {
    console.error('保存流量记录失败:', error)
    return { code: -1, data: null, msg: `保存流量记录失败：${error}` }
  }
}

async function getAllTrafficRecordsServer(): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const res = await prisma.trafficRecord.findMany({
      orderBy: {
        date: 'desc'
      }
    })

    return { code: 0, msg: '获取流量记录成功', data: res }
  } catch (error) {
    console.error('获取流量记录失败:', error)
    return { code: -1, msg: `获取流量记录失败：${error}` }
  }
}

async function getTrafficRecordsByYearServer(
  year: string
): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const res = await prisma.trafficRecord.findMany({
      where: {
        date: {
          gte: `${year}-01`,
          lt: `${String(parseInt(year) + 1)}-01`
        }
      },
      orderBy: {
        date: 'asc'
      }
    })

    return { code: 0, msg: '获取流量记录成功', data: res }
  } catch (error) {
    console.error('获取流量记录失败:', error)
    return { code: -1, msg: `获取流量记录失败：${error}` }
  }
}

async function deleteTrafficRecordServer(date: string): Promise<ApiRes> {
  try {
    await prisma.trafficRecord.delete({
      where: { date }
    })

    return { code: 0, msg: '删除流量记录成功' }
  } catch (error) {
    console.error('删除流量记录失败:', error)
    return { code: -1, msg: `删除流量记录失败：${error}` }
  }
}

async function importTrafficRecordsServer(
  records: Array<{ date: string; data: Record<string, number> }>
): Promise<ApiRes<{ imported: number; updated: number }>> {
  try {
    const parsed = importTrafficRecordsSchema.safeParse({ records })

    if (!parsed.success) {
      const errorMessage = parsed.error.issues[0].message
      return { code: 400, msg: errorMessage }
    }

    let imported = 0
    let updated = 0

    for (const record of records) {
      const existing = await prisma.trafficRecord.findUnique({
        where: { date: record.date }
      })

      if (existing) {
        // 合并数据：更新已有类别的值，添加新类别
        const mergedData = { ...(existing.data as Record<string, number>), ...record.data }
        await prisma.trafficRecord.update({
          where: { date: record.date },
          data: { data: mergedData }
        })
        updated++
      } else {
        await prisma.trafficRecord.create({
          data: {
            date: record.date,
            data: record.data
          }
        })
        imported++
      }
    }

    return { code: 0, msg: '导入成功', data: { imported, updated } }
  } catch (error) {
    console.error('批量导入流量记录失败:', error)
    return { code: -1, msg: `批量导入流量记录失败：${error}` }
  }
}

// 从所有记录中提取类别列表
async function getAllCategoriesServer(): Promise<ApiRes<string[]>> {
  try {
    const records = await prisma.trafficRecord.findMany()
    const categorySet = new Set<string>()

    records.forEach(record => {
      const data = record.data as Record<string, number>
      Object.keys(data).forEach(key => categorySet.add(key))
    })

    const categories = Array.from(categorySet).sort()
    return { code: 0, msg: '获取类别成功', data: categories }
  } catch (error) {
    console.error('获取类别失败:', error)
    return { code: -1, msg: `获取类别失败：${error}` }
  }
}

// ==================== HTTP 处理器 ====================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const year = searchParams.get('year')

    let result

    switch (action) {
      case 'getAllTrafficRecords':
      case 'getAllTrafficData':
        result = await getAllTrafficRecordsServer()
        break
      case 'getTrafficRecordsByYear':
      case 'getTrafficDataByYear':
        if (!year) {
          return Response.json({ code: 400, msg: '缺少年份参数' })
        }
        result = await getTrafficRecordsByYearServer(year)
        break
      case 'getAllCategories':
        result = await getAllCategoriesServer()
        break
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }

    return Response.json(result)
  } catch (error) {
    console.error('获取流量数据失败:', error)
    return Response.json({ code: -1, msg: '获取流量数据失败' })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    let result

    switch (action) {
      case 'upsertTrafficRecord':
        result = await upsertTrafficRecordServer(params.date, params.data)
        break
      case 'importTrafficRecords':
        result = await importTrafficRecordsServer(params.records)
        break
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }

    return Response.json(result)
  } catch (error) {
    console.error('创建流量数据失败:', error)
    return Response.json({ code: -1, msg: '创建流量数据失败' })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, date } = body

    if (action === 'deleteTrafficRecord') {
      if (!date) {
        return Response.json({ code: 400, msg: '缺少日期参数' })
      }
      const result = await deleteTrafficRecordServer(date)
      return Response.json(result)
    }

    return Response.json({ code: 400, msg: '无效的操作' })
  } catch (error) {
    console.error('删除流量数据失败:', error)
    return Response.json({ code: -1, msg: '删除流量数据失败' })
  }
}