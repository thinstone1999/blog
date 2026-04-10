import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import userIcon from '@/public/user-icon.png'
import { getCacheDataByKey } from '@/lib/cache-data'
import { TimeInSeconds } from '@/lib/enums'
import {
  GithubUserInfoCacheDataKey,
  type GithubUserInfo
} from '@/lib/github/user-info'

const socialLinks = {
  github: {
    url: 'https://github.com/thinstone1999',
    icon: 'mdi:github',
    label: 'GitHub'
  }
} as const

const userDescription =
  'John, game backend developer, mainly working with Golang and large-scale online game services.'

function UserInfo({ githubUserInfo }: { githubUserInfo?: GithubUserInfo }) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
      <Image
        src={githubUserInfo?.avatar_url ?? userIcon}
        alt={`${githubUserInfo?.login ?? 'user'} avatar`}
        className="rounded-lg border border-white shadow dark:border-gray-800"
        width={128}
        height={128}
        priority
      />
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-left">
          {githubUserInfo?.login ?? 'Loading...'}
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{userDescription}</p>
      </div>
    </div>
  )
}

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
          href={socialLinks.github.url}
          className="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={socialLinks.github.icon} className="mr-2" />
          {socialLinks.github.label}
        </Link>
      </div>
    </div>
  )
}
