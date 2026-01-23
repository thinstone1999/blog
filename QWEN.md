# vaebe的博客 - 项目概述

## AI提示词
    - 总是用中文回复
    - 不用启动服务器验证

## 项目描述
这是vaebe的个人博客项目，一位专注于前端技术的全栈开发者。该博客使用Next.js构建，并采用各种现代技术进行内容管理、身份验证和部署。它支持文章创建、用户身份验证、评论和RSS订阅等功能。

## 使用的技术
- **框架**: Next.js 16（带Turbopack）
- **语言**: TypeScript
- **样式**: Tailwind CSS配合shadcn/ui组件
- **数据库**: MongoDB与Prisma ORM (v6.19.2)
- **身份验证**: Next-Auth.js支持GitHub和邮箱/密码登录
- **内容**: ByteMD用于Markdown处理
- **部署**: Vercel（含分析功能）
- **包管理器**: pnpm

## 主要特性
- 文章管理（创建、编辑、查看）
- 用户身份验证（GitHub OAuth、邮箱/密码）
- 评论系统
- RSS订阅生成
- 深色/浅色模式支持
- 图像上传支持（使用ImageKit）
- 内容过滤（敏感词检测）
- SEO优化

## 项目结构
```
blog/
├── app/                  # Next.js 13+ App Router页面
│   ├── (main)/          # 主布局路由
│   ├── actions/         # 服务器操作
│   ├── api/             # API路由
│   ├── article/         # 文章相关页面
│   ├── auth/            # 身份验证页面
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── providers.tsx    # React上下文提供者
├── components/          # 可重用React组件
├── lib/                 # 工具函数
├── prisma/              # 数据库模式和迁移
├── public/              # 静态资源
├── types/               # TypeScript类型定义
├── generated/           # 生成的Prisma客户端
└── ...
```

## 环境变量
项目需要在`.env`文件中定义几个环境变量（基于`.env.example`）：
- 数据库连接详情（MySQL）
- Next-Auth配置
- GitHub OAuth凭据
- 邮箱服务配置（用于邮箱身份验证）
- ImageKit凭据（用于图像存储）
- 站点URL

## 构建和运行

### 开发设置
1. 安装依赖项：`pnpm install`
2. 生成Prisma客户端：`npx prisma generate`
3. 启动开发服务器：`pnpm run dev`

### 生产构建
- 构建项目：`pnpm run build`
- 启动生产服务器：`pnpm run start`

### 数据库管理
- 生成数据库迁移：`npx prisma migrate dev --name <migration-name>`
- 生成TypeScript类型：`npx prisma generate`

## 开发规范
- 组件库：shadcn/ui配合Lucide图标
- 样式：Tailwind CSS配合自定义工具
- 代码格式化：Prettier
- 代码检查：ESLint
- Git钩子：提交前使用lint-staged进行代码检查
- 提交规范：使用commitlint的约定式提交

## 关键依赖
- **UI组件**: shadcn/ui、Radix UI原语
- **Markdown处理**: ByteMD及各种插件
- **表单处理**: React Hook Form配合Zod验证
- **状态管理**: React钩子、Next.js App Router
- **日期处理**: Day.js
- **动画**: Framer Motion
- **图标**: Lucide React、Iconify

## 特殊功能
- 自动RSS订阅生成
- 支持自托管文章和导入的掘金文章
- 查看次数统计
- 敏感词过滤
- 深色/浅色主题支持，可检测系统偏好
- 使用Tailwind CSS的响应式设计

## 部署
项目配置为在Vercel上部署，集成分析功能。构建过程包括自动生成站点地图。