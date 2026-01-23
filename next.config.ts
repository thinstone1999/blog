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

// 注意：在Vercel部署时，如果遇到Prisma Query Engine问题，
// 请使用环境变量 PRISMA_GENERATE_CLIENT=1 来确保正确生成客户端

export default nextConfig
