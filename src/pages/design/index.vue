<template>
  <div id="design">
    <van-row>
      <van-col span="4">
        <van-sticky offset-top="3.2rem">
          <menu-slider-bar style="width: 100%" />
        </van-sticky>
      </van-col>
      <van-col span="19">
        <!-- 类型 -->
        <types v-if="active == 0" />
        <!-- 款式 -->
        <clothes-style v-if="active == 1" />
        <!-- 设计师 -->
        <van-list
          v-if="active == 2"
          class="design-container"
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="design-item"
            @click="selectDesigner(item)"
            v-for="item of list"
            :key="item"
          >
            <van-image fit="contain" width="98%" :src="item.src"></van-image>
            <van-icon
              size="20"
              color="var(--custom-primary-color)"
              name="user-o"
            /><span>{{ item.name }}</span>
          </div>
        </van-list>
      </van-col>
    </van-row>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import MenuSliderBar from "./components/menu-slider-bar.vue";
import ClothesStyle from "./components/clothes-style.vue";
// import Designer from "./components/designer.vue";
import Types from "./components/types.vue";
import { useSliderBar } from "./scritps/slider-bar";
import { useList } from "./scritps";
import { routerPush } from "@/router/scripts/router-trigger";
import { data } from "@/mock/design-designer";

export default defineComponent({
  components: { MenuSliderBar, ClothesStyle, Types },
  name: "designer",
  setup() {
    
    const { active } = useSliderBar();
    const { onLoad, list, loading, finished } = useList(data);
    /* 设计师模块逻辑 */
    const selectDesigner = (id: number) => {
      routerPush("/page/im/detail", { id });
    };
    return {
      active,
      list,
      onLoad,
      loading,
      finished,
      selectDesigner,
    };
  },
});
</script>

<style lang='scss' >
#design {
  .design-container {
    margin-left: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .design-item {
      background: #fff;
      margin: 0.5rem;
      font-size: 15px;
      color: #456;
      .van-icon {
        margin: 0 0.5rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>