<template>
  <van-row align="center" class="my-image">
    <van-col span="11" class="my-image-avator">
      <van-icon
        name="user-o"
        size="80"
        color="var(--custom-primary-color)"
      ></van-icon>
    </van-col>
    <van-col span="13" class="my-image-info">
      <div class="my-image-info-detail">
        <p>FU用户</p>
        <span>修改资料</span>
        <p>
          <small>关注30</small>
          <small>喜欢30</small>
        </p>
      </div>
      <van-button
        @click="GoThreeDImage"
        size="small"
        style="width: 95%"
        color="var(--custom-primary-color)"
        >我的3D形象</van-button
      >
    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { routerPush } from "@/router/scripts/router-trigger";
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-image",
  setup() {
    const GoThreeDImage = () => {
      routerPush("/page/profile/3d-image");
    };
    return {
      GoThreeDImage,
    };
  },
});
</script>

<style lang='scss' scoped>
.my-image {
  .my-image-avator {
    text-align: center;
    .van-icon {
      padding: 0.8rem;
      border: 1px solid var(--custom-primary-color);
      border-radius: 50%;
    }
  }
  .my-image-info {
    .my-image-info-detail {
      background: white;
      padding: 0.2rem 0.5rem;
      margin: 1rem 1rem 1rem 0;
    }
  }
}
</style>