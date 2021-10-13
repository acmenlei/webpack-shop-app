<template>
  <div id="profile">
    <my-image />
    <operator />
    <images />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import images from "./components/images.vue";
import myImage from "./components/my-image.vue";
import operator from "./components/operator.vue";

export default defineComponent({
  name: "profile",
  components: { myImage, operator, images },
});
</script>

<style lang='scss' scoped>
</style>