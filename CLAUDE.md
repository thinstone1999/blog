# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference

- 总是用中文回复
- 不用启动服务器验证

## Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format with Prettier

# Database (Prisma + MongoDB)
npx prisma generate   # Generate Prisma client
npx prisma db push    # Push schema to database
npx prisma db pull    # Pull schema from database

# UI Components (shadcn/ui)
npx shadcn@latest add <component>  # Add new component
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router and Turbopack
- **Database**: MongoDB with Prisma ORM (v6)
- **Auth**: Next-Auth.js (GitHub OAuth, email/password)
- **UI**: Tailwind CSS + shadcn/ui + Radix UI
- **Markdown**: ByteMD with plugins (GFM, math, mermaid, highlight)
- **Image Storage**: ImageKit

### Directory Structure
- `app/` - Next.js App Router pages and API routes
  - `(main)/` - Main layout route group
  - `actions/` - Server actions (email, image-kit)
  - `api/` - API routes (articles, auth, cache-data, feed.xml, guestbook, sync-data, traffic-data)
  - `article/` - Article pages (create, edit, view)
  - `auth/` - Authentication pages
- `components/` - Reusable React components
  - `ui/` - shadcn/ui components
  - `bytemd/` - Markdown editor components
  - `layout/` - Layout components
- `lib/` - Utility functions and configurations
- `prisma/` - Database schema and Prisma client
- `types/` - TypeScript type definitions

### Key Patterns

#### Prisma Client Location
Prisma client is generated to `prisma/client/` (custom output, not default). Import from:
```typescript
import { prisma } from '@/lib/prisma'
// or
import { PrismaClient } from '../prisma/client'
```

#### Authentication
- `getAuthSession()` - Get current session
- `requireAdmin()` - Require admin role (role === '00')
- User roles: `'00'` = admin, `'01'` = regular user (default)

#### API Response Format
```typescript
sendJson({ code: 200, msg: 'success', data: {} })
```

### Environment Variables
Required in `.env`:
- `DATABASE_URL` - MongoDB connection string
- `NEXTAUTH_SECRET` - NextAuth secret
- `AUTH_GITHUB_CLIENT_ID` / `AUTH_GITHUB_CLIENT_SECRET` - GitHub OAuth
- `EMAIL_*` - Email service config
- `NEXT_PUBLIC_IMAGEKIT_*` - ImageKit config
- `NEXT_PUBLIC_SITE_URL` - Site URL

### Git Hooks
- Pre-commit: Runs lint-staged (Prettier formatting)
- Commit-msg: Commitlint (conventional commits, but rules are relaxed)