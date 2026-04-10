import { prisma } from '@/lib/prisma'
import { parsePaginationParams, calculatePaginationResult } from '@/lib/pagination'
import { sendJson } from '@/lib/utils'

const articleListSelect = {
  id: true,
  title: true,
  summary: true,
  classify: true,
  coverImg: true,
  source: true,
  views: true,
  likes: true,
  favorites: true,
  createdAt: true,
  updatedAt: true
} as const

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const searchTerm = searchParams.get('searchTerm') || ''
    const { page, pageSize, skip } = parsePaginationParams(searchParams)

    const where = {
      title: {
        contains: searchTerm
      }
    }

    const articles = await prisma.article.findMany({
      where,
      select: articleListSelect,
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize
    })

    const totalArticles = await prisma.article.count({ where })
    const pagination = calculatePaginationResult(totalArticles, page, pageSize)

    return sendJson({
      data: {
        articles,
        totalArticles: pagination.total,
        currentPage: pagination.currentPage,
        totalPages: pagination.totalPages
      }
    })
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return sendJson({ code: -1, msg: '获取文章列表失败，请稍后重试' })
  }
}
