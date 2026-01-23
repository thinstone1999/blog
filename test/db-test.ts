import { prisma } from '@/lib/prisma';

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    
    // 测试连接 - 查询用户数量
    const userCount = await prisma.user.count();
    console.log(`Connected successfully! Found ${userCount} users.`);
    
    // 测试创建一个用户
    console.log('Testing user creation...');
    const newUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        username: 'testuser'
      }
    });
    console.log('Created user with ID:', newUser.id);
    
    // 测试查询刚创建的用户
    const foundUser = await prisma.user.findUnique({
      where: { id: newUser.id }
    });
    console.log('Found user:', foundUser?.name);
    
    // 清理测试数据
    await prisma.user.delete({
      where: { id: newUser.id }
    });
    console.log('Cleaned up test user.');
    
    console.log('All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行测试
testConnection();