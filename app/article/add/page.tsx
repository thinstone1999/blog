import { ArticleEditorShell } from '@/app/article/components/article-editor-shell'
import { requireAdminPage } from '@/lib/auth'

export default async function PublishArticlePage() {
  await requireAdminPage()

  return (
    <ArticleEditorShell
      submitLabel="新增"
      initialArticleInfo={{
        id: '',
        title: '',
        content: '',
        classify: '',
        coverImg: '',
        summary: ''
      }}
    />
  )
}
