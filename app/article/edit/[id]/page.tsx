import { notFound } from 'next/navigation'
import { ArticleEditorShell } from '@/app/article/components/article-editor-shell'
import { requireAdminPage } from '@/lib/auth'
import { getArticleById } from '@/lib/services/article'

export default async function EditArticlePage(props: { params: Promise<{ id: string }> }) {
  await requireAdminPage()
  const params = await props.params
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <ArticleEditorShell
      submitLabel="编辑"
      initialArticleInfo={{
        id: article.id,
        title: article.title || '',
        content: article.content || '',
        classify: article.classify || '',
        coverImg: article.coverImg || '',
        summary: article.summary || ''
      }}
    />
  )
}
