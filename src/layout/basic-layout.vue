<template>
  <div id="basic-layout">
    <header><header-layout /></header>
    <section>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </section>
    <footer><tabbar-layout /></footer>
  </div>
</template>
<script lang="ts">
import TabbarLayout from "./tabbar-layout.vue";
import HeaderLayout from "./nav-layout.vue";

export default {
  name: "basic-layout",
  components: { TabbarLayout, HeaderLayout },
};
</script>

<style lang="scss" scoped>
</style>

