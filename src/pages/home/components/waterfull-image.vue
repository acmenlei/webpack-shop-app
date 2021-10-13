<template>
  <van-list
    class="waterfull"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="waterfull-item-container">
      <van-image
        width="98%"
        fit="cover"
        class="waterfull-item"
        v-for="item in list"
        :key="item"
        :src="item.src"
      />
    </div>
  </van-list>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "waterfull-image",
  setup() {
    const list = reactive<any>([
      {
        src: require("@/assets/00-1.jpg"),
      },
      {
        src: require("@/assets/swiper5.jpg"),
      },
      {
        src: require("@/assets/swiper4.jpg"),
      },
      {
        src: require("@/assets/00-1.jpg"),
      },
    ]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.push(...list.slice(0, 3));
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
      list,
      onLoad,
      loading,
      finished,
    };
  },
});
</script>

<style lang='scss' scoped>
.waterfull {
  -moz-column-count: 2;
  /* Firefox */
  -webkit-column-count: 2;
  /* Safari 和 Chrome */
  column-count: 2;
  -moz-column-gap: 0;
  -webkit-column-gap: 0;
  column-gap: 0;
  .waterfull-item-container {
    .waterfull-item {
      width: 100%;
      -moz-page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
    }
  }
}
</style>