import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import userIcon from '@/public/user-icon.png'
import type { GithubUserInfo } from '@/lib/github/user-info'
import { GithubUserInfoCacheDataKey } from '@/lib/github/user-info'
import { getCacheDataByKey } from '@/lib/cache-data'
import { TimeInSeconds } from '@/lib/enums'

// 统计项组件
const StatItem = ({ icon, label, value }: { icon: string; label: string; value?: number }) => (
  <div className="inline-flex items-center space-x-2">
    <Icon icon={icon} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    <span className="text-gray-600 dark:text-gray-300">{label}:</span>
    <span className="font-semibold">{value ?? '-'}</span>
  </div>
)

// 社交媒体链接配置
const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/thinstone1999',
    icon: 'mdi:github',
    label: 'GitHub'
  }
} as const

const Userdescription = `
我是 John, 游戏后端开发, 参与过30w同时在线游戏的开发, 主要使用Golang.`

// 主要用户信息组件
const UserInfo = ({ githubUserInfo }: { githubUserInfo?: GithubUserInfo }) => (
  <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
    <Image
      src={githubUserInfo?.avatar_url ?? userIcon}
      alt={`${githubUserInfo?.login}'s avatar`}
      className="rounded-lg border border-white dark:border-gray-800 shadow"
      width={128}
      height={128}
      priority
    />
    <div>
      <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white">
        {githubUserInfo?.login ?? 'Loading...'}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{Userdescription}</p>
    </div>
  </div>
)

export async function UserProfile() {
  let githubUserInfo: GithubUserInfo | undefined
  try {
    const res = await getCacheDataByKey<GithubUserInfo>({
      key: GithubUserInfoCacheDataKey,
      next: { revalidate: TimeInSeconds.oneHour }
    })
    if (res.code === 0) {
      githubUserInfo = res.data
    }
  } catch {
    githubUserInfo = undefined
  }

  return (
    <div key="content" className="space-y-8">
      <UserInfo githubUserInfo={githubUserInfo} />

      <div className="flex justify-center">
        <Link
          href={SOCIAL_LINKS.github.url}
          className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={SOCIAL_LINKS.github.icon} className="mr-2" />
          {SOCIAL_LINKS.github.label}
        </Link>
      </div>
    </div>
  )
}
