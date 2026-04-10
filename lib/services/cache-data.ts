import { prisma } from '@/lib/prisma'

export async function getCacheDataRecordByKey(key: string) {
  if (!key) {
    return null
  }

  return prisma.cacheData.findUnique({
    where: { key }
  })
}
