/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: "/my",
        component: () => import("@/views/my/index"),
        redirect: "/my/center",
        children: [
          {
            path: "center",
            meta: {
              title: "个人中心"
            },
            component: () => import("@/views/my/children/center")
          },
          {
            path: "set",
            meta: {
              title: "设置"
            },
            component: () => import("@/views/my/children/set")
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    meta: {
      title: "登陆"
    }
  },
]
