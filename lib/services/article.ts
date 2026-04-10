import { prisma } from '@/lib/prisma'
import type { Prisma } from '@/prisma/client'

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
} satisfies Prisma.ArticleSelect

export type ArticleListItem = Prisma.ArticleGetPayload<{
  select: typeof articleListSelect
}>

export async function getAllArticles() {
  return prisma.article.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function getArticleListItems() {
  return prisma.article.findMany({
    select: articleListSelect,
    orderBy: { createdAt: 'desc' }
  })
}

export async function getArticleById(id: string) {
  return prisma.article.findUnique({
    where: { id }
  })
}
