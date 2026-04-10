'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import type { PublishArticleInfo } from '@/types'
import type { ApiRes } from '@/lib/utils'
import { PublishForm, type FormValues } from './form'

interface PublishDialogProps {
  children: React.ReactNode
  articleInfo: PublishArticleInfo
  onPublish: (data: FormValues) => Promise<ApiRes>
}

export function PublishDialog({ children, articleInfo, onPublish }: PublishDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  function publishArticle(data: FormValues) {
    onPublish(data).then((res) => {
      if (res.code === 0) {
        setIsOpen(false)
      }
    })
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>Publish Article</DialogTitle>
            <DialogDescription>Fill in the required fields before publishing.</DialogDescription>
          </DialogHeader>

          <PublishForm
            articleInfo={articleInfo}
            onPublish={(data) => {
              publishArticle(data)
            }}
            onCancel={() => setIsOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
