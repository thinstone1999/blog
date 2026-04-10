import { createRequire } from 'module'
import type { NextConfig } from 'next'

const require = createRequire(import.meta.url)

type WebpackConfigLike = {
  plugins?: unknown[]
}

function getPrismaPluginFactory(): null | (() => unknown) {
  try {
    const pluginModule = require('@prisma/nextjs-monorepo-workaround-plugin') as {
      PrismaPlugin: new () => unknown
    }

    return () => new pluginModule.PrismaPlugin()
  } catch {
    return null
  }
}

const prismaPluginFactory = getPrismaPluginFactory()

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: ''
      }
    ]
  },

  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/api/feed.xml'
      },
      {
        source: '/rss.xml',
        destination: '/api/feed.xml'
      },
      {
        source: '/feed',
        destination: '/api/feed.xml'
      }
    ]
  },

  webpack: (config: WebpackConfigLike, { isServer }: { isServer: boolean }) => {
    if (isServer && process.env.NODE_ENV === 'production' && prismaPluginFactory) {
      config.plugins = [...(config.plugins ?? []), prismaPluginFactory()]
    }

    return config
  },

  outputFileTracingIncludes: {
    '/api/*': ['./node_modules/.prisma/client/*.wasm']
  }
}

export default nextConfig
