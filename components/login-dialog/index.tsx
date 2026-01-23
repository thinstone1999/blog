'use client'

import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { GithubLoginButton } from './GithubLoginButton'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription
} from '@/components/ui/dialog'
import { Icon } from '@iconify/react'

interface Props {
  children: React.ReactNode
  onClose?: () => void
}

function LoginTips() {
  return (
    <div className="flex items-center justify-center">
      <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 gradient-anim bg-clip-text text-transparent font-medium">
        正在登录中
      </span>
      <Icon icon="eos-icons:three-dots-loading" className="h-6! w-6!"></Icon>
    </div>
  )
}

const LoginDialog = ({ onClose, children }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false)

  function openDialog() {
    setIsOpen(true)
    setIsRegisterMode(false) // 默认打开登录模式
  }

  function closeDialog() {
    setIsOpen(false)
    setIsRegisterMode(false) // 重置模式
    onClose?.()
  }

  function switchToRegister() {
    setIsRegisterMode(true)
  }

  function switchToLogin() {
    setIsRegisterMode(false)
  }

  return (
    <>
      <div onClick={openDialog}>{children}</div>

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isRegisterMode ? '注册' : '登录'}</DialogTitle>

            <DialogDescription className=" text-center">
              {isLoading ? <LoginTips></LoginTips> :
                isRegisterMode ? '请输入您的注册信息' : '请选择下方任意一种方式登录'}
            </DialogDescription>
          </DialogHeader>

          {isRegisterMode ? (
            <RegisterForm
              setIsLoading={setIsLoading}
              switchToLogin={switchToLogin}
            />
          ) : (
            <>
              <LoginForm setIsLoading={setIsLoading} closeDialog={closeDialog} />

              <div className="w-full my-1 h-[1px] bg-gray-300 dark:bg-gray-600"></div>

              <GithubLoginButton setIsLoading={setIsLoading} />

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={switchToRegister}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  没有账号？点击注册
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export { LoginDialog }
export default LoginDialog
