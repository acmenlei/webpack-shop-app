import { RouteRecordRaw } from "vue-router"

const PagesRoutes: RouteRecordRaw = {
    name: 'pages',
    path: '/page',
    component: () => import("@/layout/basic-layout.vue"),
    children: [
        {
            name: '消息会话',
            path: '/page/im/detail',
            meta: {
                code: 'im',
                icon: 'im',
                title: "会话"
            },
            component: () => import('@/pages/imDetail/index.vue')
        },
        {
            name: '原创橱窗详情',
            path: '/page/fuGoods/detail',
            meta: {
                code: 'showCaseDetail',
                icon: 'showCaseDetail',
                title: "原创橱窗详情"
            },
            component: () => import('@/pages/fuGoodsDetail/index.vue')
        },
        {
            name: '我的3D形象',
            path: '/page/profile/3d-image',
            meta: {
                code: '3dImage',
                icon: '3dIamge',
                title: "我的3D形象"
            },
            component: () => import('@/pages/profile3dImage/index.vue')
        }
    ]
}

export default PagesRoutes;