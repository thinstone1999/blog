import type { ApiRes } from './utils'
import type { TrafficRecord } from '@/types/traffic'

// ==================== 流量记录操作 ====================

// 创建或更新流量记录
export async function upsertTrafficRecord(
  date: string,
  data: Record<string, number>
): Promise<ApiRes<TrafficRecord>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'upsertTrafficRecord',
        date,
        data
      })
    });

    return await response.json();
  } catch (error) {
    console.error('保存流量记录失败:', error);
    return { code: -1, msg: `保存流量记录失败：${error}` };
  }
}

// 获取所有流量记录
export async function getAllTrafficRecords(): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getAllTrafficRecords`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取流量记录失败:', error);
    return { code: -1, msg: `获取流量记录失败：${error}` };
  }
}

// 按年份获取流量记录
export async function getTrafficRecordsByYear(year: string): Promise<ApiRes<TrafficRecord[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getTrafficRecordsByYear&year=${year}`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取流量记录失败:', error);
    return { code: -1, msg: `获取流量记录失败：${error}` };
  }
}

// 删除流量记录
export async function deleteTrafficRecord(date: string): Promise<ApiRes> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteTrafficRecord',
        date
      })
    });

    return await response.json();
  } catch (error) {
    console.error('删除流量记录失败:', error);
    return { code: -1, msg: `删除流量记录失败：${error}` };
  }
}

// 批量导入流量记录
export async function importTrafficRecords(
  records: Array<{ date: string; data: Record<string, number> }>
): Promise<ApiRes<{ imported: number; updated: number }>> {
  try {
    const response = await fetch('/api/traffic-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'importTrafficRecords',
        records
      })
    });

    return await response.json();
  } catch (error) {
    console.error('批量导入流量记录失败:', error);
    return { code: -1, msg: `批量导入流量记录失败：${error}` };
  }
}

// 获取所有类别（从数据中动态提取）
export async function getAllCategories(): Promise<ApiRes<string[]>> {
  try {
    const response = await fetch(`/api/traffic-data?action=getAllCategories`, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('获取类别失败:', error);
    return { code: -1, msg: `获取类别失败：${error}` };
  }
}

// 兼容旧 API
export async function getAllTrafficData(): Promise<ApiRes<TrafficRecord[]>> {
  return getAllTrafficRecords();
}

export async function getTrafficDataByYear(year: string): Promise<ApiRes<TrafficRecord[]>> {
  return getTrafficRecordsByYear(year);
}