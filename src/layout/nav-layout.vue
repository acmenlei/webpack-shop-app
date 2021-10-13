<template>
  <div class="my-nav">
    <van-nav-bar
      :left-arrow="hasExistTabbarPath"
      :left-text="hasExistTabbarPath ? '返回' : ''"
      @click-left="onBack"
      safe-area-inset-top
      placeholder
      z-index="99"
      :title="title"
      v-show="!hasExistNavPath"
    >
    </van-nav-bar>
    <van-sticky offset-top="0">
      <van-row
        :style="{
          background: hasExistNavPath ? 'var(--custom-primary-color)' : 'white',
        }"
        v-show="!hasExistSearchPath"
      >
        <van-col span="2">
          <van-icon
            name="credit-pay"
            :color="hasExistNavPath ? 'white' : 'var(--custom-primary-color)'"
            size="25"
            :style="`border-color: ${
              hasExistNavPath ? 'white' : 'var(--custom-primary-color)'
            }`"
          />
        </van-col>
        <van-col span="20"
          ><van-search
            right-icon="search"
            left-icon="''"
            v-model="value"
            placeholder="请输入搜索关键词"
        /></van-col>
        <van-col span="2"
          ><van-icon
            :color="hasExistNavPath ? 'white' : 'var(--custom-primary-color)'"
            size="25"
            name="user-o"
            @click="login"
        /></van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<script lang='ts'>
import {
  NavigatorWhiteRoutes,
  SearchBarWhiteRoutes,
  TabbarWhiteRoutes,
} from "@/common/white";
import { routerPush } from "@/router/scripts/router-trigger";
import { computed, defineComponent, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useNavigator, useSearch } from "../common/navigator";

export default defineComponent({
  name: "header-layout",
  setup() {
    const route = useRoute();
    
    const { title, onBack } = useNavigator();
    const { value } = useSearch();
    /* 计算属性 */
    const hasExistNavPath = computed(() =>
      NavigatorWhiteRoutes.includes(route.path)
    );
    const hasExistTabbarPath = computed(() =>
      TabbarWhiteRoutes.includes(route.path)
    );
    const hasExistSearchPath = computed(() =>
      SearchBarWhiteRoutes.includes(route.path)
    );
    const login = () => {
      routerPush("/login")
    }
    return {
      title,
      value,
      hasExistNavPath,
      hasExistTabbarPath,
      hasExistSearchPath,
      onBack,
      login
    };
  },
});
</script>

<style lang='scss' scoped>
.my-nav {
  .van-row {
    padding: 0 12px;
    height: 3.2rem;
    .van-col {
      text-align: center;
      align-self: center;
    }
  }
  .van-search {
    // border: 1px solid var(--custom-primary-color);
    padding: 0;
    border-radius: 5px;
    margin: 8px 15px;
  }
  .van-icon {
    border-radius: 50%;
    border: 1px solid;
    padding: 4px;
  }
}
</style>