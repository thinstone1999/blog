'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { BlogLogo } from '@/components/blog-logo'
import { HeaderNav } from '@/components/layout/header-nav'
import { HeaderAuthAction } from '@/components/layout/header-auth-action'
import { getHeaderRoutes } from '@/lib/routers'

export function HeaderContent() {
  const { data: session } = useSession()
  const routes = getHeaderRoutes(Boolean(session?.user))

  return (
    <div className="flex items-center justify-between px-2 py-2 sm:px-4 lg:px-6">
      <Link href="/" className="group flex items-center space-x-2">
        <BlogLogo />
      </Link>

      <HeaderNav routes={routes} />

      <div className="flex items-center space-x-4">
        <HeaderAuthAction session={session ?? null} />
      </div>
    </div>
  )
}
