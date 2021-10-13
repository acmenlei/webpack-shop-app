<template>
  <div id="community">
    <van-list
      class="community-container"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="community-item"
        v-for="item of list"
        :key="item"
      >
        <van-image
          fit="cover"
          height="15rem"
          width="98%"
          :src="item.src"
        ></van-image>
        <div class="community-item-comments van-multi-ellipsis--l2">
          {{ item.comments }}
        </div>
        <div class="community-card-footer">
          <div class="community-card-author">
            <van-icon
              size="15"
              color="var(--custom-primary-color)"
              name="user-o"
            /><span>{{ item.name }}</span>
          </div>
          <div class="community-card-like-counts">
            <van-icon size="15" color="deeppink" name="like" />
            <span>{{ item.likeCounts }}</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useList } from "../design/scritps";

export default defineComponent({
  name: "community",
  setup() {
    let data = [
      {
        name: "陶鑫",
        likeCounts: 2001,
        comments:
          "服装设计时装的手绘，今日临摹，疯狂点高光，水平有限望指点，努力ing。。。",
        src: require("@/assets/community1.png"),
      },
      {
        name: "阿月sin",
        likeCounts: 1883,
        comments:
          "电脑绘制效果图，图案是中国传统团花纹样，有龙凤纹，款式修身，设计感强。",
        src: require("@/assets/community2.png"),
      },
      {
        name: "kikikili",
        likeCounts: 1501,
        comments:
          "运动会好看的班服设计，班服不仅要穿的好看，还要整齐，设计好看的班服步骤，选款式，选面料...",
        src: require("@/assets/community3.png"),
      },
      {
        name: "bomb",
        likeCounts: 1500,
        comments:
          "服装系列效果图，以绿色为主，绿色，生态。设计感极强的一种风格",
        src: require("@/assets/community4.png"),
      },
    ];
    const { onLoad, list, loading, finished } = useList(data);
    return {
      onLoad,
      list,
      loading,
      finished,
    };
  },
});
</script>

<style lang='scss' scoped>
.community-container {
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  .community-item {
    background: #fff;
    margin: 0.5rem 0.8rem 0 0;
    padding: 0.5rem;
    font-size: 15px;
    color: #456;
    .community-item-comments {
      font-size: 13px;
    }
    .community-card-footer {
      display: flex;
      justify-content: space-between;

      .community-card-author,
      .community-card-like-counts {
        font-size: 10px;
        color: #999;
      }
      .community-card-author {
        margin-left: -0.5rem;
      }
    }

    .van-icon {
      margin: 0 0.5rem;
      margin-top: 0.5rem;
    }
  }
}
</style>