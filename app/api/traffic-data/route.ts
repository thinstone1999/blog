import { NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import type { TrafficData, TrafficCategory } from '../prisma/client'
import type { ApiRes } from '@/lib/utils'

// 定义流量数据类型
interface TrafficDataWithCategory extends TrafficData {
  categoryInfo: TrafficCategory
}

// 流量数据验证Schema
const createTrafficDataSchema = z.object({
  categoryId: z.string().min(1, { message: '类别ID不能为空！' }),
  amount: z.number().positive({ message: '数量必须大于0' }),
  date: z.string().regex(/^\d{4}-\d{2}$/, { message: '日期格式必须为YYYY-MM' })
})

async function createTrafficDataServer(
  props: z.infer<typeof createTrafficDataSchema>
): Promise<ApiRes<TrafficData | null>> {
  try {
    const parsed = createTrafficDataSchema.safeParse(props)

    if (!parsed.success) {
      // 当解析失败时，返回第一个错误信息
      const errorMessage = parsed.error.issues[0].message
      return { code: 400, data: null, msg: errorMessage }
    }

    const { categoryId, amount, date } = parsed.data

    // 检查类别是否存在
    const categoryExists = await prisma.trafficCategory.findUnique({
      where: { id: categoryId }
    })

    if (!categoryExists) {
      return { code: 400, data: null, msg: '指定的类别不存在' }
    }

    const res = await prisma.trafficData.create({
      data: {
        categoryId,
        amount,
        date
      },
      include: {
        category: true
      }
    })

    return { code: 0, msg: '创建流量数据成功！', data: res }
  } catch (error) {
    console.error('创建流量数据失败:', error)
    return { code: -1, data: null, msg: `创建流量数据失败：${error}` }
  }
}

async function getAllTrafficDataServer(): Promise<ApiRes<TrafficDataWithCategory[]>> {
  try {
    const res = await prisma.trafficData.findMany({
      include: {
        category: true
      },
      orderBy: {
        date: 'desc'
      }
    })

    const trafficDataWithCategory: TrafficDataWithCategory[] = res.map((item) => ({
      ...item,
      categoryInfo: item.category
    }))

    return { code: 0, msg: '获取流量数据成功', data: trafficDataWithCategory }
  } catch (error) {
    console.error('获取流量数据失败:', error)
    return { code: -1, msg: `获取流量数据失败：${error}` }
  }
}

async function getTrafficDataByYearServer(
  year: string
): Promise<ApiRes<TrafficDataWithCategory[]>> {
  try {
    const res = await prisma.trafficData.findMany({
      where: {
        date: {
          gte: `${year}-01`, // 大于等于该年第一天
          lt: `${String(parseInt(year) + 1)}-01` // 小于下一年第一天
        }
      },
      include: {
        category: true
      },
      orderBy: {
        date: 'desc'
      }
    })

    const trafficDataWithCategory: TrafficDataWithCategory[] = res.map((item) => ({
      ...item,
      categoryInfo: item.category
    }))

    return { code: 0, msg: '获取流量数据成功', data: trafficDataWithCategory }
  } catch (error) {
    console.error('获取流量数据失败:', error)
    return { code: -1, msg: `获取流量数据失败：${error}` }
  }
}

async function updateTrafficDataServer(
  id: string,
  amount: number,
  date: string,
  categoryId: string
): Promise<ApiRes<TrafficData | null>> {
  try {
    // 检查类别是否存在
    const categoryExists = await prisma.trafficCategory.findUnique({
      where: { id: categoryId }
    })

    if (!categoryExists) {
      return { code: 400, data: null, msg: '指定的类别不存在' }
    }

    const res = await prisma.trafficData.update({
      where: {
        id
      },
      data: {
        amount,
        date,
        categoryId
      },
      include: {
        category: true
      }
    })

    return { code: 0, msg: '更新流量数据成功', data: res }
  } catch (error) {
    console.error('更新流量数据失败:', error)
    return { code: -1, msg: `更新流量数据失败：${error}` }
  }
}

async function deleteTrafficDataServer(id: string): Promise<ApiRes> {
  try {
    await prisma.trafficData.delete({
      where: {
        id
      }
    })

    return { code: 0, msg: '删除流量数据成功' }
  } catch (error) {
    console.error('删除流量数据失败:', error)
    return { code: -1, msg: `删除流量数据失败：${error}` }
  }
}

// 流量类别相关操作
const createTrafficCategorySchema = z.object({
  name: z
    .string()
    .min(1, { message: '类别名称不能为空！' })
    .max(50, { message: '类别名称不能超过50个字符' })
})

async function createTrafficCategoryServer(
  props: z.infer<typeof createTrafficCategorySchema>
): Promise<ApiRes<TrafficCategory | null>> {
  try {
    const parsed = createTrafficCategorySchema.safeParse(props)

    if (!parsed.success) {
      // 当解析失败时，返回第一个错误信息
      const errorMessage = parsed.error.issues[0].message
      return { code: 400, data: null, msg: errorMessage }
    }

    const { name } = parsed.data

    // 检查类别名称是否已存在
    const existingCategory = await prisma.trafficCategory.findFirst({
      where: {
        name: name
      }
    })

    if (existingCategory) {
      return { code: 400, data: null, msg: '该类别名称已存在' }
    }

    const res = await prisma.trafficCategory.create({
      data: {
        name
      }
    })

    return { code: 0, msg: '创建流量类别成功！', data: res }
  } catch (error) {
    console.error('创建流量类别失败:', error)
    return { code: -1, data: null, msg: `创建流量类别失败：${error}` }
  }
}

async function getAllTrafficCategoriesServer(): Promise<ApiRes<TrafficCategory[]>> {
  try {
    const res = await prisma.trafficCategory.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })

    return { code: 0, msg: '获取流量类别成功', data: res }
  } catch (error) {
    console.error('获取流量类别失败:', error)
    return { code: -1, msg: `获取流量类别失败：${error}` }
  }
}

async function updateTrafficCategoryServer(
  id: string,
  name: string
): Promise<ApiRes<TrafficCategory | null>> {
  try {
    // 检查类别名称是否已存在（排除当前类别）
    const existingCategory = await prisma.trafficCategory.findFirst({
      where: {
        name: name,
        id: {
          not: id
        }
      }
    })

    if (existingCategory) {
      return { code: 400, data: null, msg: '该类别名称已存在' }
    }

    const res = await prisma.trafficCategory.update({
      where: {
        id
      },
      data: {
        name
      }
    })

    return { code: 0, msg: '更新流量类别成功', data: res }
  } catch (error) {
    console.error('更新流量类别失败:', error)
    return { code: -1, data: null, msg: `更新流量类别失败：${error}` }
  }
}

async function deleteTrafficCategoryServer(id: string): Promise<ApiRes> {
  try {
    // 检查是否有流量数据正在使用该类别
    const hasData = await prisma.trafficData.count({
      where: {
        categoryId: id
      }
    })

    if (hasData > 0) {
      return { code: 400, data: null, msg: '该类别下有数据，无法删除' }
    }

    await prisma.trafficCategory.delete({
      where: {
        id
      }
    })

    return { code: 0, msg: '删除流量类别成功' }
  } catch (error) {
    console.error('删除流量类别失败:', error)
    return { code: -1, msg: `删除流量类别失败：${error}` }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const year = searchParams.get('year')

    let result

    switch (action) {
      case 'getAllTrafficData':
        result = await getAllTrafficDataServer()
        break
      case 'getTrafficDataByYear':
        if (!year) {
          return Response.json({ code: 400, msg: '缺少年份参数' })
        }
        result = await getTrafficDataByYearServer(year)
        break
      case 'getAllCategories':
        result = await getAllTrafficCategoriesServer()
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
      case 'createTrafficData':
        result = await createTrafficDataServer(params)
        break
      case 'createCategory':
        result = await createTrafficCategoryServer(params)
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

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    let result

    switch (action) {
      case 'updateTrafficData':
        result = await updateTrafficDataServer(
          params.id,
          params.amount,
          params.date,
          params.categoryId
        )
        break
      case 'updateCategory':
        result = await updateTrafficCategoryServer(params.id, params.name)
        break
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }

    return Response.json(result)
  } catch (error) {
    console.error('更新流量数据失败:', error)
    return Response.json({ code: -1, msg: '更新流量数据失败' })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, id } = body

    // 验证ID是否存在
    if (!id) {
      return Response.json({ code: 400, msg: '缺少ID参数' })
    }

    let result

    switch (action) {
      case 'deleteTrafficData':
        result = await deleteTrafficDataServer(id)
        break
      case 'deleteCategory':
        result = await deleteTrafficCategoryServer(id)
        break
      default:
        return Response.json({ code: 400, msg: '无效的操作' })
    }

    return Response.json(result)
  } catch (error) {
    console.error('删除流量数据失败:', error)
    return Response.json({ code: -1, msg: '删除流量数据失败' })
  }
}
