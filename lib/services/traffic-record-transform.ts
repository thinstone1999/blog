import type { TrafficRecord } from '@/types/traffic'
import type { getAllTrafficRecords } from '@/lib/services/traffic-data'

type TrafficRecordEntity = Awaited<ReturnType<typeof getAllTrafficRecords>>[number]

export function serializeTrafficRecord(record: TrafficRecordEntity): TrafficRecord {
  return {
    id: record.id,
    date: record.date,
    data: record.data as Record<string, number>,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString()
  }
}

export function serializeTrafficRecords(records: TrafficRecordEntity[]): TrafficRecord[] {
  return records.map(serializeTrafficRecord)
}
