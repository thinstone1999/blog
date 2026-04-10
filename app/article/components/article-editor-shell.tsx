'use client'

import { useImmer } from 'use-immer'
import { LayoutHeader } from '@/app/article/components/header'
import { BytemdEditor } from '@/components/bytemd/editor'
import type { PublishArticleInfo } from '@/types'

interface ArticleEditorShellProps {
  initialArticleInfo: PublishArticleInfo
  submitLabel: string
}

export function ArticleEditorShell({
  initialArticleInfo,
  submitLabel
}: ArticleEditorShellProps) {
  const [articleInfo, updateArticleInfo] = useImmer<PublishArticleInfo>(initialArticleInfo)

  return (
    <div className="h-screen overflow-hidden">
      <LayoutHeader
        articleInfo={articleInfo}
        updateArticleInfo={updateArticleInfo}
        publishButName={submitLabel}
      />

      <BytemdEditor
        content={articleInfo.content}
        setContent={(value) =>
          updateArticleInfo((draft) => {
            draft.content = value || ''
          })
        }
      />
    </div>
  )
}
