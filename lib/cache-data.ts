import { z } from 'zod'
import type { ApiRes } from './utils'
import { prisma } from '@/lib/prisma'
import type { CacheData } from '../prisma/client'
import { getCacheDataRecordByKey } from '@/lib/services/cache-data'

const createCacheDataSchema = z.object({
  key: z.string().min(1, { message: '缓存数据的 key 不能为空' }),
  data: z.string().min(1, { message: '缓存数据不能为空' }),
  desc: z.string().optional()
})

export async function createCacheData(
  props: z.infer<typeof createCacheDataSchema>
): Promise<ApiRes> {
  try {
    const parsed = createCacheDataSchema.safeParse(props)

    if (!parsed.success) {
      const errorMessage = parsed.error.issues[0].message
      return { code: 400, data: null, msg: errorMessage }
    }

    const { key, data, desc = '' } = parsed.data

    const res = await prisma.cacheData.upsert({
      where: { key },
      update: { data, desc },
      create: { key, data, desc }
    })

    return { code: 0, msg: '创建缓存数据成功', data: res }
  } catch (error) {
    return { code: -1, msg: `创建缓存数据失败: ${error}` }
  }
}

interface GetCacheDataProps {
  key: string
  next?: NextFetchRequestConfig
}

async function getCacheData(props: GetCacheDataProps): Promise<ApiRes<CacheData>> {
  try {
    if (!props.key) {
      return { code: 400, msg: '缓存数据的 key 不能为空' }
    }

    const cacheData = await getCacheDataRecordByKey(props.key)
    return { code: 0, data: cacheData ?? undefined, msg: '获取缓存数据成功' }
  } catch (error) {
    return { code: -1, msg: `获取缓存数据失败: ${error}` }
  }
}

export async function getCacheDataByKey<T>(props: GetCacheDataProps): Promise<ApiRes<T>> {
  try {
    const res = await getCacheData(props)

    if (res.code !== 0) {
      return { code: -1, msg: '获取缓存数据失败' }
    }

    const raw = res.data?.data
    if (!raw) {
      return { code: 0, msg: '缓存数据为空' }
    }

    const data = JSON.parse(raw) as T
    return { code: 0, data, msg: '获取缓存数据成功' }
  } catch (error) {
    return { code: -1, msg: `获取缓存数据失败: ${error}` }
  }
}
