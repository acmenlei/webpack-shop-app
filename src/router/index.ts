import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import configuraRoutes from "./router.comp"
import defaultRoutes from "./router.default"

// 默认的路由配置
const routes: RouteRecordRaw[] = defaultRoutes;

// 将得到的需要显示的菜单路由 导出给外界使用
export const MenuRoutes: RouteRecordRaw[] = Object.values(configuraRoutes);

const router = createRouter({
    routes: routes.concat(MenuRoutes),// 最终的路由配置 
    history: createWebHashHistory()
})

export default router