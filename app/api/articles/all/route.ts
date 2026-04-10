import { sendJson } from '@/lib/utils'
import { getAllArticles } from '@/lib/services/article'

export async function GET() {
  try {
    const articles = await getAllArticles()
    return sendJson({ data: articles })
  } catch (error) {
    console.error('获取全部文章失败:', error)
    return sendJson({ code: -1, msg: '获取全部文章失败，请稍后重试' })
  }
}
