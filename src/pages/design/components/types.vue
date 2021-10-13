<template>
  <div id="types">
    <menu-grid :data="rowOne" />
    <menu-grid :data="rowTwo" />
    <menu-grid :data="rowThree" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import MenuGrid from "@/components/menuGrid/index.vue";
import { data } from "@/mock/design-types"

export default defineComponent({
  name: "types",
  components: { MenuGrid },
  setup() {
    let rowOne = data.slice(0, 3);
    let rowTwo = data.slice(3, 6);
    let rowThree = data.slice(6, 7);
    return {
      rowOne,
      rowTwo,
      rowThree,
    };
  },
});
</script>

<style lang='scss' scoped>
#types {
  width: 100%;
}
</style>