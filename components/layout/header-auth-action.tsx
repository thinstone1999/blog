'use client'

import Link from 'next/link'
import { LogIn, LogOut, PenSquare } from 'lucide-react'
import { signOut } from 'next-auth/react'
import type { Session } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LoginDialog } from '@/components/login-dialog'

export function HeaderAuthAction({ session }: { session: Session | null }) {
  if (!session?.user) {
    return (
      <LoginDialog>
        <div className="flex cursor-pointer items-center space-x-2 rounded-full bg-white px-3 py-1 text-gray-800 shadow-sm transition-colors duration-300 hover:bg-gray-100 hover:shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
          <LogIn className="mr-2 h-5 w-5" />
          登录
        </div>
      </LoginDialog>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user.image ?? ''} alt="user avatar" />
            <AvatarFallback>{session.user.name?.slice(0, 2) ?? 'U'}</AvatarFallback>
          </Avatar>
          <span>{session.user.name ?? '用户'}</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {session.user.role === '00' && (
          <Link href="/article/add" target="_blank">
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center">
                <PenSquare className="mx-2 h-5 w-5" />
                <span>写文章</span>
              </div>
            </DropdownMenuItem>
          </Link>
        )}

        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <div className="flex items-center">
            <LogOut className="mx-2 h-5 w-5" />
            <span>退出登录</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
