<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    lazy-render
    height="200"
  >
    <van-swipe-item
    v-for="(item, index) in 6"
    :key="index"
      ><van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="require(`@/assets/swiper${item+1}.jpg`)"
    /></van-swipe-item>
  </van-swipe>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "swiper-image",
});
</script>

<style lang='scss' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #e418a0;
}
</style>