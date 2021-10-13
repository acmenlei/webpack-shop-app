<template>
  <div class="login-title">
    <van-icon color="var(--custom-primary-color)" size="100" name="user-o" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "login-logo",
});
</script>

<style lang='scss' scoped>
.login-title {
  height: 15rem;
  background: var(--custom-primary-color);
  position: relative;
  .van-icon {
    border-radius: 50%;
    padding: 15px;
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>