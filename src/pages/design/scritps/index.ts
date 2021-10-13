import { reactive, ref } from "vue"

export function useList(data: any) {
    const list = reactive<any>(data);
    const loading = ref(false);
    const finished = ref(false);

    function onLoad() {
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                list.push(...list.slice(0, 4));
            }
            // 加载状态结束
            loading.value = false;

            // 数据全部加载完成
            if (list.length >= 40) {
                finished.value = true;
            }
        }, 1000);
    };
    return {
        onLoad,
        list,
        loading,
        finished
    }
}