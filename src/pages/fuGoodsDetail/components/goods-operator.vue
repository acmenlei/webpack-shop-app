<template>
  <div class="goods-operator">
    <div class="goods-operator-left">
      <div>
        <van-icon color="var(--custom-primary-color)" name="like-o"></van-icon>
        <span>点赞</span>
      </div>
      <div>
        <van-icon color="var(--custom-primary-color)" name="star-o" />
        <span>收藏</span>
      </div>
      <div>
        <van-icon color="var(--custom-primary-color)" name="arrow-left" />
        <span>转发</span>
      </div>
    </div>
    <div class="goods-operator-right">
      <van-button round size="small" color="var(--custom-primary-color)"
        >购买版权</van-button
      >
      <van-button round size="small" color="var(--custom-primary-color)"
        >立即购买</van-button
      >
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "goods-operator",
});
</script>

<style lang='scss' scoped>
.goods-operator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .goods-operator-left {
    display: flex;
    text-align: center;
    justify-content: center;
    div {
      padding: 0.3rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      transform: scale(0.8);
      border: 1px solid var(--custom-primary-color);
      span {
        display: block;
        font-size: 10px;
        color: var(--custom-primary-color);
      }
    }
  }
  .goods-operator-right {
    margin-right: 0.5rem;
    .van-button {
      margin-left: 0.5rem;
    }
  }
}
</style>