'use client'

import { signIn } from 'next-auth/react'
import { Icon } from '@iconify/react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

interface Props {
  setIsLoading: (status: boolean) => void
}

function GithubLoginButton({ setIsLoading }: Props) {
  async function handleGithubLogin() {
    setIsLoading(true)

    try {
      await signIn('github', {
        callbackUrl: window.location.href
      })
    } catch (error) {
      setIsLoading(false)
      toast(`登录失败：${error}`)
    }
  }

  return (
    <Button
      className="w-full cursor-pointer items-center justify-center space-x-1"
      onClick={handleGithubLogin}
    >
      <Icon icon="mdi:github" className="h-6! w-6!" />
      <span className="mx-2">Github</span>
    </Button>
  )
}

export { GithubLoginButton }
export default GithubLoginButton
