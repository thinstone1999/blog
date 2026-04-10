import { requireAdminPage } from '@/lib/auth'
import { getAllTrafficRecords } from '@/lib/services/traffic-data'
import { serializeTrafficRecords } from '@/lib/services/traffic-record-transform'
import { getTrafficCategories } from '@/lib/traffic-utils'
import { TrafficStatsClient } from '@/app/traffic/stats/traffic-stats-client'

export default async function TrafficStatsPage() {
  await requireAdminPage()
  const records = serializeTrafficRecords(await getAllTrafficRecords())
  const categories = getTrafficCategories(records)

  return <TrafficStatsClient initialRecords={records} initialCategories={categories} />
}
