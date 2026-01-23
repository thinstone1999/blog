import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 创建默认流量类别
  const defaultCategories = [{ name: '工作' }, { name: '生活' }, { name: '娱乐' }, { name: '学习' }]

  for (const category of defaultCategories) {
    const existing = await prisma.trafficCategory.findFirst({
      where: { name: category.name }
    })

    if (!existing) {
      await prisma.trafficCategory.create({
        data: { name: category.name }
      })
      console.log(`Created category: ${category.name}`)
    } else {
      console.log(`Category already exists: ${category.name}`)
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
