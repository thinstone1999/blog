// 测试数据库连接和流量管理功能
import { getAllTrafficCategories, createTrafficCategory } from '@/lib/traffic-data';

async function testDatabase() {
  console.log('开始测试数据库连接...');
  
  try {
    // 测试获取所有类别
    const categoriesResult = await getAllTrafficCategories();
    console.log('获取类别结果:', categoriesResult);
    
    if (categoriesResult.code === 0) {
      console.log(`成功获取 ${categoriesResult.data?.length} 个类别`);
      console.log('类别列表:', categoriesResult.data?.map(c => ({ id: c.id, name: c.name })));
    } else {
      console.log('获取类别失败:', categoriesResult.msg);
    }
    
    // 尝试创建一个测试类别
    const testCategoryResult = await createTrafficCategory({
      name: `测试类别-${Date.now()}`
    });
    
    console.log('创建类别结果:', testCategoryResult);
    
  } catch (error) {
    console.error('测试过程中出现错误:', error);
  }
}

// 在浏览器环境中不能直接运行此测试，需要在服务器端运行
if (typeof window === 'undefined') {
  testDatabase();
}