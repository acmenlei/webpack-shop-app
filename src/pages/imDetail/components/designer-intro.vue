<template>
  <div class="designer-introduce">
    <van-row align="center" justify="space-around">
      <van-col span="8">
        <van-icon size="80" color="#789" name="user-o"></van-icon>
      </van-col>
      <van-col span="16">
        <div class="designer-introduce-title">
          <van-tag
            size="large"
            round
            type="primary"
            color="var(--custom-primary-color)"
            >设计师简介</van-tag
          >
        </div>
        <div class="designer-introduce-content van-multi-ellipsis--l3">
          <strong>张三</strong> ，男,1983年出生于吉林长春，毕业于江西财经大学，荣获多项设计大赛奖项，已有5年工作经验。
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "designer-introduce",
});
</script>

<style lang='scss' scoped>
.designer-introduce {
  padding: 1rem 0;
  width: 100%;
  background: #fff;
  text-align: center;
  .van-icon {
    padding: 1rem;
    background: #f9f9f9;
  }
  .designer-introduce-title,
  .designer-introduce-content {
    text-align: left;
    font-size: 13px;
    padding-left: 1rem;
  }
  .designer-introduce-title {
    margin-bottom: 0.5rem;
  }
  .designer-introduce-content {
    color: #456;
    text-indent: 2em;
  }
}
</style>