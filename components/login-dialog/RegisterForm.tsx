'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { hashPassword } from '@/lib/utils'

interface Props {
  setIsLoading: (status: boolean) => void
  switchToLogin: () => void
}

const RegisterForm = ({ setIsLoading, switchToLogin }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inviteCode, setInviteCode] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast('请输入邮箱!')
      return
    }

    if (!password) {
      toast('请输入密码!')
      return
    }

    if (!inviteCode) {
      toast('请输入邀请码!')
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password: hashPassword(password),
          inviteCode
        })
      })

      const data = await res.json()

      if (data.error) {
        toast(data.error)
      } else {
        toast('注册成功！请登录您的账户。')
        switchToLogin()
      }
    } catch (error) {
      toast('注册失败，请稍后重试。')
      console.error('Registration error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:email" className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              className="pl-10 block w-full"
              placeholder="请输入邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:lock" className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              className="pl-10 block w-full"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:key" className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="inviteCode"
              name="inviteCode"
              type="text"
              className="pl-10 block w-full"
              placeholder="请输入邀请码"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </div>
        </div>
        <Button className="w-full cursor-pointer" type="submit">
          注册账号
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={switchToLogin}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          已有账号？点击登录
        </button>
      </div>
    </div>
  )
}

export { RegisterForm }
export default RegisterForm