export interface AppRouteItem {
  path: string
  name: string
  icon: 'home' | 'article' | 'guestbook' | 'traffic' | 'trafficStats'
}

export const publicRoutes: AppRouteItem[] = [
  {
    path: '/',
    name: '首页',
    icon: 'home'
  },
  {
    path: '/article/list',
    name: '文章',
    icon: 'article'
  },
  {
    path: '/guestbook',
    name: '留言板',
    icon: 'guestbook'
  }
]

export const authenticatedRoutes: AppRouteItem[] = [
  {
    path: '/traffic',
    name: '流量管理',
    icon: 'traffic'
  },
  {
    path: '/traffic/stats',
    name: '流量统计',
    icon: 'trafficStats'
  }
]

export function getHeaderRoutes(isAuthenticated: boolean) {
  return isAuthenticated ? [...publicRoutes, ...authenticatedRoutes] : publicRoutes
}
