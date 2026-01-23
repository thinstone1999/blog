import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email, password, inviteCode } = await request.json()

    // 验证必填字段
    if (!email || !password || !inviteCode) {
      return NextResponse.json({ error: '邮箱、密码和邀请码均为必填项' }, { status: 400 })
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '请输入有效的邮箱地址' }, { status: 400 })
    }

    // 根据邀请码判断角色类型
    let role = '01' // 默认普通用户角色

    const ADMIN_INVITE_CODE = process.env.ADMIN_INVITE_CODE || 'since1999.'
    const USER_INVITE_CODE = process.env.USER_INVITE_CODE || 'since1999'

    if (inviteCode === ADMIN_INVITE_CODE) {
      role = '00' // 管理员角色
    } else if (inviteCode === USER_INVITE_CODE) {
      role = '01' // 普通用户角色
    } else {
      return NextResponse.json({ error: '邀请码无效' }, { status: 400 })
    }

    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: '该邮箱已被注册' }, { status: 400 })
    }

    // 创建新用户
    const newUser = await prisma.user.create({
      data: {
        email,
        password: password, // 对密码进行哈希处理
        name: email.split('@')[0], // 使用邮箱名作为用户名
        role // 根据邀请码分配的角色
      }
    })

    // 返回成功响应
    return NextResponse.json({
      success: true,
      message: '注册成功',
      user: { id: newUser.id, email: newUser.email, name: newUser.name, role }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: '注册失败，请稍后重试' }, { status: 500 })
  }
}
