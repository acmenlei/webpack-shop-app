<template>
  <div id="showCase">
    <van-list
      class="showCase-container"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        @click="viewFUGoods(item)"
        class="showCase-item"
        v-for="item of list"
        :key="item"
      >
         <van-image fit="cover" width="98%" :src="item.src"></van-image>
      </div>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { routerPush } from "@/router/scripts/router-trigger";
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "show-case",
  setup() {
    const list = reactive<any>([
      {
        src: require("@/assets/goods1.png")
      },
      {
        src: require("@/assets/goods2.png")
      },
      {
        src: require("@/assets/goods3.png")
      },
      {
        src: require("@/assets/goods4.png")
      },
      {
        src: require("@/assets/goods5.png")
      },
      {
        src: require("@/assets/goods6.png")
      }
    ]);
    const loading = ref(false);
    const finished = ref(false);

    const viewFUGoods = (id: number) =>
      routerPush("/page/fuGoods/detail", { id });

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.push(...list.slice(1,4));
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
      viewFUGoods,
    };
  },
});
</script>

<style lang='scss' scoped>
#showCase {
  width: 100%;
  .showCase-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    .showCase-item {
      text-align: center;
      background: #fff;
      margin: 0.5rem;
    }
    .showCase-item:nth-child(2n) {
      margin-left: 0;
      margin-bottom: 0;
    }
    .showCase-item:nth-child(2n-1) {
      margin-bottom: 0;
    }
  }
}
</style>