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
  module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
}
}

export default nextConfig
