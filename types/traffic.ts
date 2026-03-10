// 流量记录类型：每个文档代表一个月份
export interface TrafficRecord {
  id: string;
  date: string;  // YYYY-MM 格式
  data: Record<string, number>;  // { "雪球": 105.6, "招商": 0, ... }
  createdAt: string;
  updatedAt: string;
}

// 用于前端展示的扁平化数据项
export interface TrafficDataItem {
  id: string;
  category: string;  // 类别名称
  amount: number;
  date: string;  // YYYY-MM 格式
}