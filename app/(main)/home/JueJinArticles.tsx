import dayjs from 'dayjs'
import Link from 'next/link'
import { Clock3, Eye, Star, ThumbsUp } from 'lucide-react'
import { ContentCard } from './ContentCard'
import { getJumpArticleDetailsUrl } from '@/lib/utils'
import { getArticleListItems, type ArticleListItem } from '@/lib/services/article'

function EmptyArticles() {
  return <p className="py-8 text-center text-gray-500 dark:text-gray-400">No articles found.</p>
}

function ArticleList({ articles }: { articles: ArticleListItem[] }) {
  return (
    <div key="content" className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {articles.map((article) => (
        <div
          key={article.id}
          className="block rounded p-2 transition duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10"
        >
          <Link href={getJumpArticleDetailsUrl(article)} target="_blank" rel="noopener noreferrer">
            <h3 className="mb-2 text-lg font-semibold transition duration-300">{article.title}</h3>
            <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {article.summary || 'No description available'}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-500" />
                {article.favorites}
              </span>
              <span className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4 text-green-500" />
                {article.likes}
              </span>
              <span className="flex items-center">
                <Eye className="mr-1 h-4 w-4 text-blue-500" />
                {article.views}
              </span>
              <span className="flex items-center">
                <Clock3 className="mr-1 h-4 w-4" />
                {dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function JueJinArticles() {
  const articles = (await getArticleListItems())
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6)
    .sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix())

  return (
    <ContentCard title="文章">
      {articles.length === 0 ? <EmptyArticles /> : <ArticleList articles={articles} />}
    </ContentCard>
  )
}
