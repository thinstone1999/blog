import { sendJson } from '@/lib/utils'
import { getCacheDataRecordByKey } from '@/lib/services/cache-data'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const key = searchParams.get('key')

    if (!key) {
      return sendJson({ code: 400, msg: '缓存数据的 key 不能为空' })
    }

    const cacheData = await getCacheDataRecordByKey(key)
    return sendJson({ data: cacheData })
  } catch (error) {
    console.error('获取缓存数据失败:', error)
    return sendJson({ code: -1, msg: '获取缓存数据失败，请稍后重试' })
  }
}
