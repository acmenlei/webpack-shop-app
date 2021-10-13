<template>
  <div id="topCenter">
    <div class="user-icons">
      <van-icon
        size="40"
        name="user-circle-o"
        color="var(--custom-primary-color)"
      />
      <div class="coins-count">
        <van-image
          round
          width="20"
          height="20"
          fit="cover"
          :src='require("@/assets/FU.jpg")'
        />160
      </div>
    </div>
    <div class="user-icons-logo">
      <van-image :src="require('@/assets/fu-coins.png')" />
    </div>
    <div class="topCenter-images">
      <van-image height="10rem" width="32.2%" :src="require('@/assets/coins-55.png')" />
      <van-image height="10rem" width="32.2%" :src="require('@/assets/coins-120.png')" />
      <van-image height="10rem" width="32.2%" :src="require('@/assets/coins-250.png')" />
      <van-image height="10rem" width="32.2%" :src="require('@/assets/coins-600.png')" />
      <van-image height="10rem" width="32.2%" :src="require('@/assets/coins-1000.png')" />
      <van-image height="10rem" width="32.2%" :src="require('@/assets/gitf.jpg')" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "top-center",
});
</script>

<style lang='scss' scoped>
#topCenter {
  text-align: center;
  .user-icons,
  .user-icons-logo,
  .topCenter-images {
    width: 95vw;
    margin: 0 auto;
  }
  .topCenter-images {
    margin-top: 2rem;
    .van-image {
      margin-right: 0.2rem;
    }
  }
  .user-icons {
    display: flex;
    align-items: center;
    margin: 0.8rem 1.5rem;
    .coins-count {
      color: white;
      padding: 0.5rem;
      margin-left: 1rem;
      border-radius: 1rem;
      background: var(--custom-primary-color);
    }
  }
}
</style>