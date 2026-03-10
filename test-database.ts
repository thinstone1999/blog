import { getAllTrafficRecords, getAllCategories } from './lib/traffic-data'

async function testDatabase() {
  console.log('Testing database connection...')

  try {
    console.log('Fetching traffic records...')
    const recordsResult = await getAllTrafficRecords()
    console.log('Traffic records result:', recordsResult)

    console.log('Fetching categories...')
    const categoryResult = await getAllCategories()
    console.log('Categories result:', categoryResult)
  } catch (error) {
    console.error('Error testing database:', error)
  }
}

testDatabase()