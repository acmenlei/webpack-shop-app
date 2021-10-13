<template>
  <div class="goods-author">
    <div class="author">
      <van-icon
        size="40"
        name="user-circle-o"
        color="var(--custom-primary-color)"
      />
      <div class="author-name">阿华的画</div>
    </div>
    <div class="goods-introduce">
      <p>上衣：简约/刺绣/羽绒服/潮牌/时尚/街头/拉链/外套</p>
      <p>运动/休闲/潮牌/新款/简约/拼接/撞色/保暖/直筒/长裤</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "goods-author",
});
</script>

<style lang='scss' scoped>
.goods-author {
  .author {
    margin-top: 1rem;
    display: flex;
    align-items: flex-end;
    .author-name {
      color: #456;
      margin-left: 0.5rem;
    }
  }
  .goods-introduce {
    color: #999;
    font-size: 13px;
  }
}
</style>