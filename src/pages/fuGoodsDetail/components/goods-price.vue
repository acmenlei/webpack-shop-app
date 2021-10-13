<template>
  <div class="goods-price">
    <div class="goods-amount">
      <van-image width="20" height="20" fit="cover" :src="require('@/assets/FU.jpg')"></van-image>
      150币/155元
    </div>
    <div class="goods-copy-right">
      <span>版权：25元</span>
      <small>（仅限于单次生产）</small>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "goods-price",
});
</script>

<style lang='scss' scoped>
.goods-price {
  margin-top: 1rem;
  padding: .2rem;
  display: flex;
  align-items: center;
     .goods-amount,.goods-copy-right {
         border-radius: .5rem;
     }
  .goods-amount {
    border: 1px solid var(--custom-primary-color);
    padding: 0.5rem 1rem;
    color: #567;
  }
  .goods-copy-right {
    color: #567;
    padding: 0.1rem 0.5rem;
    text-align: center;
    margin-left: 1rem;
    background: var(--custom-primary-color);
    span {
      font-size: 13px;
    }
    small {
      display: block;
    }
  }
}
</style>