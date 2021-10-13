<template>
  <div class="send-message">
    <input type="text" v-model="value" />
    <van-button :disabled="!value" round color="var(--custom-primary-color)"
      >发送</van-button
    >
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "send-message",
  setup() {
    const value = ref<string>("");
    return {
      value,
    };
  },
});
</script>

<style lang='scss' scoped>
.send-message {
  display: flex;
  padding: 0.5rem;
  input {
    text-indent: 1em;
    border: none;
    outline: none;
    border-radius: 5rem;
    flex: 3;
    margin-right: 0.5rem;
  }
  .van-button {
    flex: 0.5;
  }
}
</style>