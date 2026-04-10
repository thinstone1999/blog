import { prisma } from '@/lib/prisma'

export async function getAllTrafficRecords() {
  return prisma.trafficRecord.findMany({
    orderBy: {
      date: 'desc'
    }
  })
}

export async function getTrafficRecordsByYear(year: string) {
  return prisma.trafficRecord.findMany({
    where: {
      date: {
        gte: `${year}-01`,
        lt: `${String(parseInt(year, 10) + 1)}-01`
      }
    },
    orderBy: {
      date: 'asc'
    }
  })
}

export async function upsertTrafficRecord(date: string, data: Record<string, number>) {
  return prisma.trafficRecord.upsert({
    where: { date },
    update: { data },
    create: { date, data }
  })
}

export async function deleteTrafficRecordByDate(date: string) {
  return prisma.trafficRecord.delete({
    where: { date }
  })
}

export async function importTrafficRecords(
  records: Array<{ date: string; data: Record<string, number> }>
) {
  let imported = 0
  let updated = 0

  for (const record of records) {
    const existing = await prisma.trafficRecord.findUnique({
      where: { date: record.date }
    })

    if (existing) {
      const mergedData = { ...(existing.data as Record<string, number>), ...record.data }
      await prisma.trafficRecord.update({
        where: { date: record.date },
        data: { data: mergedData }
      })
      updated += 1
    } else {
      await prisma.trafficRecord.create({
        data: {
          date: record.date,
          data: record.data
        }
      })
      imported += 1
    }
  }

  return { imported, updated }
}
