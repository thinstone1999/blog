# blog

John 的个人博客，记录自己的一些想法

## 项目介绍

项目依赖 MongoDB、 github 仓库 api_key 、next-auth(邮箱登录、github 登录) 需要在 `.env` 文件中配置

MongoDB：存储博客的相关的数据，用户信息、文章信息、留言信息

github 仓库 api_key：目前仅是为了 github acitons 调用同步掘金文章接口的时候做鉴权防止恶意调用

next-auth: 实现 github 登录、邮箱登录、账号密码登录功能

## 从零开始运行项目

### 1. 环境准备

确保您的系统已安装以下软件：
- [Node.js](https://nodejs.org/) (推荐版本 18.x 或更高)
- [pnpm](https://pnpm.io/) (推荐使用 pnpm 进行包管理)
- [MongoDB](https://www.mongodb.com/) (本地或云端数据库)

```bash
pnpm install
```

### 4. 配置环境变量

复制 `.env.example` 文件并重命名为 `.env`，然后填入相应的配置：

```bash
cp .env.example .env
```

需要配置的环境变量包括：

- `NEXT_PUBLIC_SITE_URL`: 您的网站URL
- `DATABASE_URL`: MongoDB连接字符串，格式如下：
  ```
  mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>?retryWrites=true&w=majority
  ```
- `NEXTAUTH_SECRET`: NextAuth密钥，可通过 `openssl rand -base64 32` 生成
- `AUTH_GITHUB_CLIENT_ID` 和 `AUTH_GITHUB_CLIENT_SECRET`: GitHub OAuth应用的凭证
- `EMAIL_*`: 邮箱服务配置（用于邮箱验证登录）
- `NEXT_PUBLIC_GITHUB_USER_NAME` 和 `GITHUB_API_TOKEN`: GitHub用户名和API令牌
- `GITHUB_REPOSITORY_API_KEY`: GitHub仓库API密钥
- `JUEJIN_USER_ID`: 掘金用户ID（可选）

### 5. 配置数据库

#### 方案一：使用 MongoDB Atlas（推荐）

1. 注册 [MongoDB Atlas](https://www.mongodb.com/atlas) 账户
2. 创建集群并获取连接字符串
3. 将连接字符串填入 `.env` 文件的 `DATABASE_URL`

#### 方案二：使用本地 MongoDB

1. 安装并启动本地 MongoDB 服务
2. 在 `.env` 文件中配置本地连接字符串：
   ```
   DATABASE_URL="mongodb://localhost:27017/blog"
   ```

### 6. 生成 Prisma 客户端

```bash
npx prisma generate
```

### 7. 初始化数据库（如果是首次运行）

```bash
# 将 schema 推送到数据库
npx prisma db push
```

### 8. 启动开发服务器

```bash
pnpm run dev
```

项目将在 `http://localhost:3000` 上运行

### 9. （可选）构建生产版本

```bash
pnpm run build
pnpm run start
```

## Prisma 数据库管理

### 生成类型定义

```bash
npx prisma generate
```

### 推送 schema 到数据库

```bash
npx prisma db push
```

### 拉取数据库 schema

```bash
npx prisma db pull
```

## UI 组件管理

添加新组件

```bash
npx shadcn@latest add scroll-area
```

## UI 组件管理

添加新组件

```bash
npx shadcn@latest add scroll-area
```

## 性能看起来还行

![image](https://github.com/user-attachments/assets/9f198e59-4d3e-4f3f-a035-3c291a648785)
