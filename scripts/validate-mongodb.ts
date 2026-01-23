/**
 * MongoDB连接验证脚本
 * 此脚本用于验证Prisma与MongoDB的连接是否正常工作
 */

import { prisma } from '@/lib/prisma';

async function validateMongoDBConnection() {
  try {
    console.log('正在验证MongoDB连接...');
    
    // 尝试执行一个简单的查询
    const userCount = await prisma.user.count();
    console.log(`✓ 成功连接到MongoDB！当前用户数量: ${userCount}`);
    
    // 验证各个模型是否可以正常访问
    const articleCount = await prisma.article.count();
    console.log(`✓ 文章模型访问正常，当前文章数量: ${articleCount}`);
    
    const messageCount = await prisma.message.count();
    console.log(`✓ 留言模型访问正常，当前留言数量: ${messageCount}`);
    
    const subscriberCount = await prisma.subscriber.count();
    console.log(`✓ 订阅者模型访问正常，当前订阅者数量: ${subscriberCount}`);
    
    console.log('\n✓ 所有验证通过，MongoDB连接正常！');
    
  } catch (error: unknown) {
    console.error('✗ 连接验证失败:', (error as Error).message);
    if ((error as Error).message?.includes('DATABASE_ACCESS_ERROR')) {
      console.error('请检查您的DATABASE_URL环境变量配置是否正确');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// 运行验证
validateMongoDBConnection();

export { validateMongoDBConnection };