import { requireAuthPage } from '@/lib/auth'
import { getAllTrafficRecords } from '@/lib/services/traffic-data'
import { serializeTrafficRecords } from '@/lib/services/traffic-record-transform'
import { TrafficManagementClient } from '@/app/traffic/components/traffic-management-client'

export default async function TrafficManagementPage() {
  await requireAuthPage()
  const records = serializeTrafficRecords(await getAllTrafficRecords())

  return <TrafficManagementClient initialRecords={records} />
}
