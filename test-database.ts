import { getAllTrafficData, getAllTrafficCategories } from './lib/traffic-data'

async function testDatabase() {
  console.log('Testing database connection...')

  try {
    console.log('Fetching traffic data...')
    const trafficResult = await getAllTrafficData()
    console.log('Traffic data result:', trafficResult)

    console.log('Fetching traffic categories...')
    const categoryResult = await getAllTrafficCategories()
    console.log('Category data result:', categoryResult)
  } catch (error) {
    console.error('Error testing database:', error)
  }
}

testDatabase()
