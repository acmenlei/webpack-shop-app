<template>
  <div class="im-content">
    <div class="message">
      <van-icon name="user-o" size="25"></van-icon>
      <p>您好，请问有什么能够帮到您？</p>
    </div>
    <div class="message self">
      <p>我想要设计一款上衣</p>
      <van-icon name="user-o" size="25"></van-icon>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "im-content",
});
</script>

<style lang='scss' scoped>
.im-content {
  height: 60vh;
  display: flex;
  flex-direction: column;
  .message {
    .van-icon {
      padding: 0.8rem;
      border-radius: 50%;
      background: var(--custom-primary-color);
      margin: 0.5rem;
    }
    p {
      background: white;
      display: inline-block;
      text-align: center;
      border-radius: 1rem;
      padding: 0.8rem;
      border: 1px solid var(--custom-primary-color);
    }
  }
  .self {
    align-self: flex-end;
  }
}
</style>