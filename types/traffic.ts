// 定义流量数据类型
export interface TrafficDataWithCategory {
  id: string;
  categoryId: string;
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  categoryInfo: TrafficCategoryType;
}

// 定义流量类别类型
export interface TrafficCategoryType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}