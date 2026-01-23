import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
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
  }
}

// Prisma workaround for Vercel deployment
if (process.env.NODE_ENV === 'production') {
  // @ts-ignore
  const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')
  const webpack = nextConfig.webpack
  nextConfig.webpack = (config, options) => {
    if (options.isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return webpack ? webpack(config, options) : config
  }
}

export default nextConfig
