import Link from 'next/link'
import { Eye, Star, ThumbsUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { EmptyState } from '@/components/no-found'
import { getJumpArticleDetailsUrl } from '@/lib/utils'
import { getArticleListItems, type ArticleListItem } from '@/lib/services/article'

type GroupedArticles = Record<string, ArticleListItem[]>

const ArticleInfo = ({ info }: { info: ArticleListItem }) => {
  const date = new Date(info.createdAt).toLocaleDateString()

  return (
    <Link href={getJumpArticleDetailsUrl(info)} target="_blank">
      <h3 className="text-lg font-medium">{info.title}</h3>
      <p className="my-4">{info.summary}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <p className="flex items-center">
            <ThumbsUp className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{info.likes}</span>
          </p>
          <p className="flex items-center">
            <Star className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{info.favorites}</span>
          </p>
          <p className="flex items-center">
            <Eye className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{info.views}</span>
          </p>
        </div>
        <time dateTime={info.createdAt.toString()}>{date}</time>
      </div>
    </Link>
  )
}

const ArticleList = ({ articleInfo }: { articleInfo: GroupedArticles }) => (
  <>
    {Object.entries(articleInfo)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, articles]) => (
        <div key={year}>
          <div className="my-8 flex items-center">
            <h2 className="text-3xl font-bold">{year}</h2>
            <p className="ml-4 text-lg text-black/50 dark:text-white/50">{articles.length} 篇</p>
          </div>

          <div className="space-y-4">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="rounded-lg p-4 transition-colors duration-200 hover:bg-accent"
              >
                <ArticleInfo info={article} />
              </Card>
            ))}
          </div>
        </div>
      ))}
  </>
)

function groupArticlesByYear(articles: ArticleListItem[]): GroupedArticles {
  return articles.reduce((accumulator: GroupedArticles, article) => {
    const year = new Date(article.createdAt).getFullYear().toString()
    accumulator[year] = [...(accumulator[year] || []), article]
    return accumulator
  }, {})
}

export default async function ArticlesPage() {
  const articles = groupArticlesByYear(await getArticleListItems())

  return (
    <div className="mx-auto max-w-4xl px-2">
      {Object.keys(articles).length > 0 ? <ArticleList articleInfo={articles} /> : <EmptyState />}
    </div>
  )
}
