'use client'

import dynamic from 'next/dynamic'
import plugins from '@/components/bytemd/plugins'
import './editor.scss'
import './dark-theme.scss'

const Viewer = dynamic(() => import('@bytemd/react').then((module) => module.Viewer), {
  ssr: false
})

export function BytemdViewer({ content }: { content: string }) {
  return <Viewer value={content} plugins={plugins} />
}
