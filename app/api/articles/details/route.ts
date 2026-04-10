import { sendJson } from '@/lib/utils'
import { getArticleById } from '@/lib/services/article'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id')

  try {
    if (!id) {
      return sendJson({ code: -1, msg: 'id 不存在' })
    }

    const article = await getArticleById(id)
    return sendJson({ data: article })
  } catch (error) {
    console.error('获取文章详情失败:', error)
    return sendJson({ code: -1, msg: '获取文章详情失败' })
  }
}
