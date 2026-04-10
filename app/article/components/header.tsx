import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Updater } from 'use-immer'
import { PublishDialog } from '@/app/article/components/publish-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { ApiRes } from '@/lib/utils'
import type { AnyObject, PublishArticleInfo } from '@/types'

const submitArticleConfig = {
  add: {
    url: '/api/articles/add',
    method: 'POST',
    successMsg: 'Article published successfully.',
    errorMsg: 'Failed to publish article.'
  },
  update: {
    url: '/api/articles/update',
    method: 'PUT',
    successMsg: 'Article updated successfully.',
    errorMsg: 'Failed to update article.'
  }
} as const

async function submitArticle(info: PublishArticleInfo, type: 'add' | 'update'): Promise<ApiRes> {
  if (!info.title) {
    toast('Article title is required.')
    return { code: -1, msg: 'Article title is required.' }
  }

  if (!info.content) {
    toast('Article content is required.')
    return { code: -1, msg: 'Article content is required.' }
  }

  const config = submitArticleConfig[type]

  try {
    const res = await fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then((response) => response.json())

    if (res.code === 0) {
      toast(config.successMsg)
      return { code: 0, msg: config.successMsg }
    }

    toast(config.errorMsg)
    return { code: 500, msg: config.errorMsg }
  } catch (error) {
    console.error(error)
    toast(config.errorMsg)
    return { code: 500, msg: config.errorMsg }
  }
}

interface HeaderProps {
  articleInfo: PublishArticleInfo
  publishButName: string
  updateArticleInfo: Updater<PublishArticleInfo>
}

function LayoutHeader({ publishButName, articleInfo, updateArticleInfo }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()

  async function onPublish(info: AnyObject) {
    const res = pathname.includes('edit')
      ? await submitArticle({ ...articleInfo, ...info }, 'update')
      : await submitArticle({ ...articleInfo, ...info }, 'add')

    if (res.code === 0) {
      router.push('/article/list')
    }

    return res
  }

  return (
    <div className="flex items-center justify-between border-b border-b-gray-200">
      <Input
        value={articleInfo.title}
        onChange={(event) =>
          updateArticleInfo((draft) => {
            draft.title = event.target.value
          })
        }
        placeholder="Enter article title..."
        className="border-none bg-white !text-2xl font-medium text-black shadow-none ring-0 !ring-offset-0 focus-visible:ring-0"
      />

      <PublishDialog articleInfo={articleInfo} onPublish={onPublish}>
        <Button className="cursor-pointer rounded-none shadow-none">{publishButName}</Button>
      </PublishDialog>
    </div>
  )
}

export { LayoutHeader }
