import type { ApiRes } from './utils'
import type { TrafficDataWithCategory, TrafficCategoryType } from '@/types/traffic'

// 客户端API调用函数
export async function createTrafficData(
  props: { categoryId: string; amount: number; date: string }
): Promise<ApiRes<TrafficDataWithCategory>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'createTrafficData',
        ...props
      })
    });

    return await response.json();
  } catch (error) {
    console.error('创建流量数据失败:', error);
    return { code: -1, msg: `创建流量数据失败：${error}` };
  }
}

export async function getAllTrafficData(): Promise<ApiRes<TrafficDataWithCategory[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getAllTrafficData`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取流量数据失败:', error);
    return { code: -1, msg: `获取流量数据失败：${error}` };
  }
}

export async function getTrafficDataByYear(year: string): Promise<ApiRes<TrafficDataWithCategory[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getTrafficDataByYear&year=${year}`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取流量数据失败:', error);
    return { code: -1, msg: `获取流量数据失败：${error}` };
  }
}

export async function updateTrafficData(id: string, amount: number, date: string, categoryId: string): Promise<ApiRes<TrafficDataWithCategory>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'updateTrafficData',
        id,
        amount,
        date,
        categoryId
      })
    });

    return await response.json();
  } catch (error) {
    console.error('更新流量数据失败:', error);
    return { code: -1, msg: `更新流量数据失败：${error}` };
  }
}

export async function deleteTrafficData(id: string): Promise<ApiRes> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteTrafficData',
        id
      })
    });

    return await response.json();
  } catch (error) {
    console.error('删除流量数据失败:', error);
    return { code: -1, msg: `删除流量数据失败：${error}` };
  }
}

export async function createTrafficCategory(
  props: { name: string }
): Promise<ApiRes<TrafficCategoryType>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'createCategory',
        ...props
      })
    });

    return await response.json();
  } catch (error) {
    console.error('创建流量类别失败:', error);
    return { code: -1, msg: `创建流量类别失败：${error}` };
  }
}

export async function getAllTrafficCategories(): Promise<ApiRes<TrafficCategoryType[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getAllCategories`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取流量类别失败:', error);
    return { code: -1, msg: `获取流量类别失败：${error}` };
  }
}

export async function updateTrafficCategory(id: string, name: string): Promise<ApiRes<TrafficCategoryType>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'updateCategory',
        id,
        name
      })
    });

    return await response.json();
  } catch (error) {
    console.error('更新流量类别失败:', error);
    return { code: -1, msg: `更新流量类别失败：${error}` };
  }
}

export async function deleteTrafficCategory(id: string): Promise<ApiRes> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteCategory',
        id
      })
    });

    return await response.json();
  } catch (error) {
    console.error('删除流量类别失败:', error);
    return { code: -1, msg: `删除流量类别失败：${error}` };
  }
}