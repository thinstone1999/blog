// 技术栈图标映射
export const techIcons: Record<string, string> = {
  Go: 'logos:go',
  Python: 'logos:python',
  'C++': 'logos:c-plusplus',
  '分布式系统': 'material-symbols:architecture',
  k8s: 'logos:kubernetes',
  '游戏后端': 'game-icons:cannon',
  Redis: 'logos:redis',
  MySQL: 'logos:mysql',
  MongoDB: 'logos:mongodb',
  ETCD: 'logos:etcd',
  NATS: 'logos:nats'
}

export const techStackData = ['Go', 'Python', 'C++', '分布式系统', 'k8s', '游戏后端', 'Redis', 'MySQL', 'MongoDB', 'ETCD', 'NATS']

export const TimeInSeconds = {
  oneHour: 3600, // 1小时 = 3600秒
  oneDay: 86400, // 1天 = 86400秒
  oneWeek: 604800, // 1周 = 604800秒
  oneMonth: 2592000 // 1个月 = 2592000秒（以30天计算）
}
