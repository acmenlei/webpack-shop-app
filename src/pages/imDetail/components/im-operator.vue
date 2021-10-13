<template>
  <div class="im-operator">
    <i class="iconfont icon-zhaoxiangji"></i>
    <i class="iconfont icon-dianhuatianchong"></i>
    <i class="iconfont icon-maikefeng"></i>
    <i class="iconfont icon-xiangce"></i>
    <i class="iconfont icon-biaoqing"></i>
    <i class="iconfont icon-zengjia"></i>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "im-operator",
});
</script>

<style lang='scss' scoped>
.im-operator {
  margin: .4rem 0;
  display: flex;
  justify-content: space-around;
  i {
    font-size: 30px;
    color: #456;
  }
}
</style>