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
        component: () => import('@/views/about/about'),
        meta: { title: '关于我', keepAlive: false }
      },

    ]
  },
  {
    path: "/pricePolicy",
    meta: {
      title: "奖励政策"
    },
    component: () => import("@/views/home/pricePolicy")
  },
  {
    path: "/pushTutorial",
    meta: {
      title: "推广教程"
    },
    component: () => import("@/views/home/pushTutorial")
  },
  {
    path: "/creditCard",
    meta: {
      title: "信用卡"
    },
    component: () => import("@/views/home/creditCard")
  },
  {
    path: "/applyforother",
    meta: {
      title: "更换申请信息"
    },
    component: () => import("@/views/home/applyforother")
  },
  {
    path: "/schedule",
    meta: {
      title: "进度查询"
    },
    component: () => import("@/views/home/schedule")
  },
  {
    path: "/cardList",
    meta: {
      title: "银行"
    },
    component: () => import("@/views/home/cardList")
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
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    meta: {
      title: "登陆"
    }
  },
  {
    path: "/register",
    component: () => import("@/views/register/register.vue"),
    meta: {
      title: "理事注册"
    }
  },
  {
    path: "/registerArr",
    component: () => import("@/views/register/registerArr.vue"),
    meta: {
      title: "理事注册成功"
    }
  },
  {
    path: "/registration",
    component: () => import("@/views/treaty/registration.vue"),
    meta: {
      title: "注册协议"
    }
  },
  {
    path: "/information",
    component: () => import("@/views/treaty/information.vue"),
    meta: {
      title: "用户授权协议"
    }
  },
  {
    path: "/agreement",
    component: () => import("@/views/treaty/agreement.vue"),
    meta: {
      title: "用户隐私保护政策"
    }
  },
  {
    path: "/authorization",
    component: () => import("@/views/treaty/authorization.vue"),
    meta: {
      title: "理事推广规范守则"
    }
  },
  {
    path: "/setting",
    component: () => import("@/views/setting/setting.vue"),
    meta: {
      title: "设置"
    },
  },
  {
    path: "/infoabout",
    component: () => import("@/views/setting/infoabout.vue"),
    meta: {
      title: "关于"
    }
  },
  {
    path: "/matter",
    component: () => import("@/views/about/matter/matter.vue"),
    meta: {
      title: "常见问题"
    }
  },



]
