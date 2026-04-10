import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import { getHeaderRoutes } from '@/lib/routers'
import { BlogLogo } from '@/components/blog-logo'
import { HeaderNav } from '@/components/layout/header-nav'
import { HeaderShell } from '@/components/layout/header-shell'
import { HeaderAuthAction } from '@/components/layout/header-auth-action'

export default async function LayoutHeader() {
  const session = await getAuthSession()
  const routes = getHeaderRoutes(session?.user?.role === '00')

  return (
    <HeaderShell>
      <div className="flex items-center justify-between px-2 py-2 sm:px-4 lg:px-6">
        <Link href="/" className="group flex items-center space-x-2">
          <BlogLogo />
        </Link>

        <HeaderNav routes={routes} />

        <div className="flex items-center space-x-4">
          <HeaderAuthAction session={session} />
        </div>
      </div>
    </HeaderShell>
  )
}
