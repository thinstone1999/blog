'use client'

import Link from 'next/link'
import { Rss } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { EmailSubscription } from './email-subscription'
import { getHeaderRoutes } from '@/lib/routers'

export default function LayoutFooter() {
  const githubUserName = process.env.NEXT_PUBLIC_GITHUB_USER_NAME ?? ''

  return (
    <footer className="bg-transparent dark:text-white">
      <div className="mx-auto my-4 max-w-4xl px-2">
        <NavList />
        <Subscription className="mt-4" />
        <Copyright githubUserName={githubUserName} />
      </div>
    </footer>
  )
}

function NavList() {
  const { data: session } = useSession()
  const routes = getHeaderRoutes(Boolean(session?.user))

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
      <ul className="flex flex-wrap items-center space-x-2">
        {routes.map((item) => (
          <li key={item.path} className="mb-1">
            <Link href={item.path} className="mx-2 text-gray-500 hover:text-black hover:dark:text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Subscription({ className }: { className: string }) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
      <p className="mb-4 text-gray-500">Stay up to date with the latest posts.</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <EmailSubscription />

        <Link href="/rss" target="_blank" className="flex items-center justify-end hover:text-gray-500">
          <p className="mr-4 text-lg">RSS Feed</p>
          <Rss width={24} height={24} />
        </Link>
      </div>
    </div>
  )
}

function Copyright({ githubUserName }: { githubUserName: string }) {
  return (
    <div className="mt-8 border-t pt-8 text-center">
      <Link
        href={`https://github.com/${githubUserName}/blog/blob/main/LICENSE`}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Released under the MIT License.
      </Link>
      <Link
        href={`https://github.com/${githubUserName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 dark:hover:text-blue-400"
      >
        Copyright © 2024-present {githubUserName}.
      </Link>
    </div>
  )
}
