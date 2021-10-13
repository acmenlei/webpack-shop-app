<template>
  <van-sidebar v-model="active" @change="onChange">
    <van-sidebar-item title="类型" />
    <van-sidebar-item title="款式" />
    <van-sidebar-item title="设计师" />
  </van-sidebar>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useSliderBar } from "../scritps/slider-bar"

export default defineComponent({
  name: "menu-slider-bar",
  setup() {
    const { active, onChange } = useSliderBar();
    return {
      active,
      onChange,
    };
  },
});
</script>

<style lang='scss' scoped>
.van-sidebar {
    border: 1px solid #eee;
    border-left: none;
    border-top: none;
    height: 100vh;
    background: white;
}
</style>