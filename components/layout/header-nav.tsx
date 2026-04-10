'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, ChartColumnBig, FileText, House, MessageSquareMore } from 'lucide-react'
import type { AppRouteItem } from '@/lib/routers'

const iconMap = {
  home: House,
  article: FileText,
  guestbook: MessageSquareMore,
  traffic: BarChart3,
  trafficStats: ChartColumnBig
} as const

export function HeaderNav({ routes }: { routes: AppRouteItem[] }) {
  const pathname = usePathname()

  return (
    <ul className="flex space-x-1">
      {routes.map((item) => {
        const Icon = iconMap[item.icon]
        const isActive = pathname === item.path

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`flex items-center rounded-lg px-2 py-0.5 text-lg font-medium transition-all duration-100 ease-in-out hover:bg-gray-100 dark:hover:bg-white/10 md:px-4 ${isActive ? 'bg-gray-100 dark:bg-white/10' : ''}`}
            >
              <Icon width={22} height={22} className="mr-1" />
              <span className="hidden md:block">{item.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
