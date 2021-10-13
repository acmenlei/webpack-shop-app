import { ref } from "vue"

const active = ref<number>(0);

const onChange = (index: number) => {
    active.value = index;
};

export const useSliderBar = function () {
    return {
        active,
        onChange
    }
}