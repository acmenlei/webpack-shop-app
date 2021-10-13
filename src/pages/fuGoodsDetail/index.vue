<template>
  <div id="fuGoods-detail">
    <!-- 商品轮播图 -->
    <van-image width="100%" fit="cover" :src='require("@/assets/goods4.png")'></van-image>
    <div class="fuGoods-detail-introduce">
      <goods-price />
      <goods-author />
      <goods-operator />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import goodsOperator from "./components/goods-operator.vue";
import goodsAuthor from "./components/goods-author.vue";
import goodsPrice from "./components/goods-price.vue";

export default defineComponent({
  name: "fuGoods-detail",
  components: { goodsAuthor, goodsPrice, goodsOperator },
});
</script>

<style lang='scss' scoped>
.fuGoods-detail-introduce {
  margin-left: 1rem;
}
</style>