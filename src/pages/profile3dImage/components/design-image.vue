<template>
  <van-row justify="space-around" class="design-image">
    <van-col class="operator" span="4">
      <van-button>性别</van-button>
      <van-button>身高</van-button>
      <van-button>体重</van-button>
      <van-button>三围</van-button>
      <van-button>发型</van-button>
      <van-button>肤色</van-button>
      <van-button>衣橱</van-button>
    </van-col>
    <van-col span="20">
      <van-image :src="require('@/assets/design-image.png')"></van-image>
    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "design-image",
});
</script>

<style lang='scss' scoped>
.design-image {
  width: 95vw;
  margin: 1rem auto;
  text-align: center;
  .operator {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>