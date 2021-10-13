import router from "@/router";

// 路由跳转
export const routerPush = (routePath: string, query?: any) => {
      router.push({ path: routePath, query });
}

// 路由替换
export const routerReplace = (routePath: string) => {
      router.replace(routePath);
}

// 路由回退
export const routerBack = () => {
      router.back();
}