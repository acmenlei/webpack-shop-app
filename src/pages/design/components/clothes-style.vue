<template>
  <van-list
    class="design-container"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="design-item" v-for="item of list" :key="item">
      <van-image fit="cover" width="98%" :src="item.src"></van-image>
    </div>
  </van-list>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useList } from "../scritps";
import { data } from "@/mock/design-clothes-style";

export default defineComponent({
  name: "clothes-style",
  setup() {
    const { onLoad, list, loading, finished } = useList(data);
    return {
      list,
      onLoad,
      loading,
      finished,
    };
  },
});
</script>

<style lang='scss' scoped>
</style>