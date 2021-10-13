<template>
  <swiper-image />
  <menu-grid :data="rowOne" />
  <menu-grid :data="rowTwo" />
  <menu-grid :data="rowThree" />
  <waterfull-image/>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import SwiperImage from "@/components/swiper/index.vue";
import MenuGrid from "@/components/menuGrid/index.vue";
import menuGridPages from "@/router/modules/menu-grid"
import WaterfullImage from "./components/waterfull-image.vue"

export default defineComponent({
  name: "home",
  components: { SwiperImage, MenuGrid, WaterfullImage },
  setup() {
    const menus: any = menuGridPages.children;
    const rowOne = menus.slice(0, 3);
    const rowTwo = menus.slice(3, 5);
    const rowThree = menus.slice(5, 9);
    return {
      rowOne,
      rowTwo,
      rowThree,
    };
  },
});
</script>

<style lang='scss' scoped>
</style>