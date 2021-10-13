<template>
  <van-grid :column-num="data.length" class="home-grid-menu">
    <van-grid-item
      v-for="item in data"
      :key="item"
      :icon="item.meta.icon"
      icon-color="var(--custom-primary-color)"
      text-color="var(--custom-primary-color)"
      :text="item.name"
      :to="item.path"
    />
  </van-grid>
</template>

<script lang='ts'>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "menu-grid",
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>

<style lang='scss' scoped>

</style>