import { notFound } from 'next/navigation'
import { Clock3 } from 'lucide-react'
import { getReadingTime } from '@/lib/getReadingTime'
import { BytemdViewer } from '@/components/bytemd/viewer'
import { getArticleById } from '@/lib/services/article'
import { Anchor } from './anchor'

export default async function ArticleDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  const readingTime = getReadingTime(article.content).minutes

  return (
    <div className="mx-auto my-2 max-w-4xl">
      <div className="space-y-4 border-b pb-4">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <div className="flex items-center text-gray-500">
          <Clock3 className="mr-1 h-4 w-4" />
          阅读时间：{readingTime} 分钟
        </div>
      </div>

      <div className="mt-4 rounded-md bg-black/5 p-2 dark:bg-white/10">
        <h2 className="mb-2 text-lg text-gray-600 dark:text-gray-300">导读</h2>
        <p className="text-gray-500 dark:text-gray-400">{article.summary}</p>
      </div>

      <div className="my-4 rounded-md bg-black/5 p-2 dark:bg-white/10">
        <h3 className="mb-4 text-lg font-semibold">章节目录</h3>
        <Anchor content={article.content || ''} />
      </div>

      <div className="rounded-md bg-black/5 p-2 dark:bg-white/10">
        <BytemdViewer content={article.content ?? ''} />
      </div>
    </div>
  )
}
