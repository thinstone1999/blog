import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import { sendJson } from '@/lib/utils'

export async function getAuthSession() {
  return getServerSession(authOptions)
}

export async function requireAuth() {
  const session = await getAuthSession()

  if (!session?.user) {
    return {
      error: sendJson({ code: 401, msg: '请先登录' }),
      session: null
    }
  }

  return { error: null, session }
}

export async function requireAdmin() {
  const { error, session } = await requireAuth()

  if (error || !session) {
    return { error, session: null }
  }

  if (session.user.role !== '00') {
    return {
      error: sendJson({ code: 403, msg: '无权限操作' }),
      session: null
    }
  }

  return { error: null, session }
}

export async function requireAuthPage() {
  const session = await getAuthSession()

  if (!session?.user) {
    redirect('/')
  }

  return session
}

export async function requireAdminPage() {
  const session = await getAuthSession()

  if (!session?.user || session.user.role !== '00') {
    redirect('/')
  }

  return session
}
