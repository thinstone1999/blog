import { sendJson } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // 使用 Prisma 的聚合查询功能来按月统计文章数量
    const articles = await prisma.article.findMany({
      where: {
        isDeleted: 0
      },
      select: {
        createdAt: true
      }
    })

    // 按月份分组统计
    const monthlyCounts: Record<string, number> = {}

    articles.forEach(article => {
      const date = new Date(article.createdAt)
      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

      if (monthlyCounts[month]) {
        monthlyCounts[month]++
      } else {
        monthlyCounts[month] = 1
      }
    })

    // 转换为数组并按月份排序
    const formattedCounts = Object.entries(monthlyCounts)
      .map(([month, count]) => ({
        month,
        count
      }))
      .sort((a, b) => a.month.localeCompare(b.month))

    return sendJson({ data: formattedCounts })
  } catch (error) {
    console.error('按月查询文章数量失败:', error)
    return sendJson({ code: -1, msg: '按月查询文章数量失败，请稍后重试' })
  }
}
