import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { type AnyObject } from '@/types'
import { generateUUID, hashPassword } from '@/lib/utils'

const AUTH_GITHUB_CLIENT_ID = process.env.AUTH_GITHUB_CLIENT_ID
const AUTH_GITHUB_CLIENT_SECRET = process.env.AUTH_GITHUB_CLIENT_SECRET

function createAvatar() {
  return `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${generateUUID()}&size=64`
}

async function updateUserProfilePicture(user?: AnyObject) {
  if (!user) {
    return
  }

  try {
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        image: user.image
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        account: { label: 'Account', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.account || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.account }
        })

        if (!user || !user.password) {
          return null
        }

        const hashedInput = hashPassword(credentials.password)
        if (hashedInput !== user.password) {
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role
        }
      }
    }),
    GitHubProvider({
      clientId: AUTH_GITHUB_CLIENT_ID ?? '',
      clientSecret: AUTH_GITHUB_CLIENT_SECRET ?? '',
      httpOptions: {
        timeout: 20000
      }
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    })
  ],
  pages: {
    signIn: '/',
    verifyRequest: '/auth/verify-request'
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (!user?.image) {
        user.image = createAvatar()
        await updateUserProfilePicture(user)
      }

      return true
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role as string
      }

      if (token?.id) {
        session.user.id = token.id as string
      }

      return session
    }
  }
}
