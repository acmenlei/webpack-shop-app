<template>
  <div class="login-methods">
    <van-divider dashed>更多登陆方式</van-divider>
    <div class="login-methods-list">
      <i class="iconfont icon-qq"></i>
      <i class="iconfont icon-xinlangweibo"></i>
      <i class="iconfont icon-weixin"></i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "other-login-method",
});
</script>

<style lang='scss' scoped>
.login-methods {
  margin-top: 5rem;

  .login-methods-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 25px;
      border: 1px solid var(--custom-primary-color);
      border-radius: 50%;
      padding: 10px;
      color: var(--custom-primary-color);
    }
  }
}
</style>