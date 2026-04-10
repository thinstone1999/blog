'use client'

import './editor.scss'
import dynamic from 'next/dynamic'
import zh_Hans from 'bytemd/locales/zh_Hans.json'
import { toast } from 'sonner'
import plugins from './plugins'
import { uploadFile } from '@/app/actions/image-kit'

const Editor = dynamic(() => import('@bytemd/react').then((module) => module.Editor), {
  ssr: false
})

async function uploadImages(files: File[]) {
  const resultData: Record<'url' | 'alt' | 'title', string>[] = []

  for (const item of files) {
    const res = await uploadFile({ file: item, fileName: item.name })

    if (res?.code === 0) {
      resultData.push({
        url: res.data?.url ?? '',
        alt: item.name,
        title: item.name
      })
    } else {
      toast('图片上传失败，请重试')
    }
  }

  return resultData
}

interface BytemdEditorProps {
  content: string
  setContent: (content: string) => void
}

export function BytemdEditor({ content, setContent }: BytemdEditorProps) {
  return (
    <Editor
      value={content}
      locale={zh_Hans}
      plugins={plugins}
      onChange={(value) => {
        setContent(value)
      }}
      uploadImages={uploadImages}
    />
  )
}
