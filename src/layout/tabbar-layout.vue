<template>
  <div id="tabbar" v-show="!TabbarWhiteRoutes.includes(path)">
    <van-tabbar
      placeholder
      route
      active-color="var(--van-nav-bar-background-color)"
      v-model="active"
    >
      <van-tabbar-item
        v-for="(route, index) in TabbarRoutes.children"
        :icon="route.name && route.meta && route.meta.icon"
        :to="route.path"
      >
        <span v-if="route.name">{{ route.name }}</span>
        <div v-else class="publish">
          <van-icon size="20" color="white" name="plus" />
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, toRefs } from "vue";
import TabbarRoutes from "@/router/modules/tabbar";
import { TabbarWhiteRoutes } from "@/common/white";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "tabbar-layout",
  setup() {
    const active = ref(0);
    const route = useRoute();

    return { active, TabbarRoutes, TabbarWhiteRoutes, ...toRefs(route) };
  },
});
</script>
<style lang='scss' scoped>
.publish {
  background: var(--custom-primary-color);
  padding: 0.6rem;
  border-radius: 50%;
}
</style>