<template>
  <div class="operator">
      <van-button round size="small" color="var(--custom-primary-color)" icon="shopping-cart-o">购物车</van-button>
      <van-button round size="small" color="var(--custom-primary-color)" icon="like-o">点赞</van-button>
      <van-button round size="small" color="var(--custom-primary-color)" icon="star-o">收藏</van-button>
      <van-button round size="small" color="var(--custom-primary-color)" icon="arrow">转发</van-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "operator",
});
</script>

<style lang='scss' scoped>
.operator {
    display: flex;
    justify-content: space-around;
    margin: 1.5rem 0;
}
</style>