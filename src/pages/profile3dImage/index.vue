<template>
  <div class="profile-3d-image">
    <my-image />
    <design-image />
    <div class="submit">
      <van-button style="width: 70%" round color="var(--custom-primary-color)"
        >立即生成</van-button
      >
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import myImage from "../profile/components/my-image.vue";
import designImage from "./components/design-image.vue";

export default defineComponent({
  name: "profile-threeD-image",
  components: { myImage, designImage },
});
</script>

<style lang='scss' scoped>
.profile-3d-image {
  .submit {
    text-align: center;
    .van-button {
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>