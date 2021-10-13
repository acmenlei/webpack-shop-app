import { RouteRecordRaw } from "vue-router"

const MenuGridRoutes: RouteRecordRaw = {
    name: 'menuGrid',
    path: '/menuGrid',
    component: () => import("@/layout/basic-layout.vue"),
    children: [
        {
            name: '设计师定制',
            path: '/menuGrid/design',
            meta: {
                code: 'design',
                icon: 'sign',
                title: "设计师定制"
            },
            component: () => import('@/pages/design/index.vue')
        },
        {
            name: 'DIY自主设计助手',
            path: '/menuGrid/diy',
            meta: {
                code: 'diy',
                icon: 'hot',
                title: "DIY自主设计助手"
            },
            component: () => import('@/pages/DIY/index.vue')
        },
        {
            name: 'FU社区',
            path: '/menuGrid/fuCommunity',
            meta: {
                code: 'fuCommunity',
                icon: 'friends',
                title: "FU社区"
            },
            component: () => import('@/pages/fuCommunity/index.vue')
        },
        {
            name: '原创预售橱窗',
            path: '/menuGrid/fuGoods',
            meta: {
                code: 'fuGoods',
                icon: 'shop',
                title: "原创预售橱窗"
            },
            component: () => import('@/pages/fuGoods/index.vue')
        },
        {
            name: 'FU充值中心',
            path: '/menuGrid/fuTopCenter',
            meta: {
                code: 'fuTopCenter',
                icon: 'wechat-pay',
                title: "FU充值中心"
            },
            component: () => import('@/pages/fuTopCenter/index.vue')
        },
        {
            name: '个性化就业',
            path: '/menuGrid/personalWorks',
            meta: {
                code: 'personalWorks',
                icon: 'card',
                title: "个性化就业"
            },
            component: () => import('@/pages/personalWorks/index.vue')
        },
        {
            name: 'FU工厂',
            path: '/menuGrid/fuFactory',
            meta: {
                code: 'fuFactory',
                icon: 'printer',
                title: "FU工厂"
            },
            component: () => import('@/pages/fuFactory/index.vue')
        },
        {
            name: '个性化点餐',
            path: '/menuGrid/personalOrder',
            meta: {
                code: 'personalOrder',
                icon: 'cart-circle',
                title: "个性化点餐"
            },
            component: () => import('@/pages/personalOrder/index.vue')
        },
        {
            name: '定制领域选择',
            path: '/menuGrid/customDomain',
            meta: {
                code: 'customDomain',
                icon: 'cluster',
                title: "定制领域选择"
            },
            component: () => import('@/pages/customDomain/index.vue')
        }
    ]
}

export default MenuGridRoutes;