// import Layout from 
import { RouteRecordRaw } from "vue-router"

const TabbarRoutes: RouteRecordRaw = {
    name: 'root',
    path: '/',
    component: () => import("@/layout/basic-layout.vue"),
    children: [
        {
            name: '首页',
            path: '/home',
            meta: {
                code: 'index',
                icon: 'home-o',
                title: "个性化定制首页"
            },
            component: () => import('@/pages/home/index.vue')
        },
        {
            name: '消息',
            path: '/im',
            meta: {
                code: 'im',
                icon: 'chat-o',
                title: "消息列表"
            },
            component: () => import('@/pages/im/index.vue')
        },
        {
            name: "",
            path: '/publish',
            meta: {
                code: 'publish',
                icon: "plus",
                title: "发布"
            },
            component: () => import('@/pages/publish/index.vue')
        },
        {
            name: '购物车',
            path: '/shopCart',
            meta: {
                code: 'shopCart',
                icon: 'cart',
                title: "购物车"
            },
            component: () => import('@/pages/shopCart/index.vue')
        },
        {
            name: '我的',
            path: '/profile',
            meta: {
                code: 'profile',
                icon: 'user-o',
                title: '我的'
            },
            component: () => import('@/pages/profile/index.vue')
        },
    ]
}

export default TabbarRoutes;