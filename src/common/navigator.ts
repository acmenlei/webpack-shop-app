import { routerBack } from "@/router/scripts/router-trigger";
import { ref } from "vue"

const title = ref<string>("个性化定制商城");
const value = ref<string>("");

/* 改变导航的标题 */
function setTitle(name: string) {
    title.value = name;
}

/* 点击返回 */
function onBack() {
    routerBack()
}

export function useNavigator() {
    return {
        setTitle,
        onBack,
        title
    }
}

export function useSearch() {
    return {
        value
    }
}