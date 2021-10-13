<template>
  <div id="diy">
    <div class="diy-person">
      <van-image
        width="100%"
        :src="require('@/assets/diy-image.png')"
        fit="cover"
      ></van-image>
    </div>
    <div class="diy-price">
      <div class="diy-price-detail" v-for="item in prices">
        <van-image
          round
          width="20"
          height="20"
          fit="cover"
          :src="require('@/assets/FU.jpg')"
        />
        <span>{{ item.price }}</span>
        <small>{{ item.name }}</small>
      </div>
      <div class="diy-price-detail">
        <van-image
          round
          width="20"
          height="20"
          fit="cover"
          :src="require('@/assets/FU.jpg')"
        /><span>100</span> <small>总价</small>
      </div>
    </div>
    <div class="diy-clothes">
      <div
        @click="selectClothes(index)"
        :class="['diy-clothes-detail', {active: currentIndex === index}]"
        v-for="(item, index) in clothes"
      >
        <van-image
          fit="cover"
          height="3rem"
          width="3rem"
          round
          :src="item.src"
        />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="diy-operator">
      <div class="upload">上传</div>
      <div class="forward">转发</div>
      <div>
        <van-button round color="var(--custom-primary-color)"
          >保存画稿</van-button
        >
        <van-button round color="var(--custom-primary-color)"
          >立即生成</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "diy",
  setup() {
    const prices = reactive([
      {
        name: "款式",
        price: 10,
      },
      {
        name: "面料",
        price: 20,
      },
      {
        name: "细节",
        price: 30,
      },
      {
        name: "图案",
        price: 40,
      },
    ]);
    const clothes = reactive([
      {
        src: require("@/assets/4.png"),
        name: "款式",
      },
      {
        src: require("@/assets/clothes1.png"),
        name: "面料",
      },
      {
        src: require("@/assets/clothes3.png"),
        name: "尺寸",
      },
      {
        src: require("@/assets/clothes4.png"),
        name: "细节",
      },
    ]);
    const currentIndex = ref<number>(0);

    const selectClothes = (index: number) => {
      currentIndex.value = index;
    };
    return {
      prices,
      clothes,
      currentIndex,
      selectClothes,
    };
  },
});
</script>

<style lang='scss' scoped>
#diy {
  width: 90vw;
  margin: 1rem auto;

  .diy-person {
    width: 100%;
    height: 100%;
  }
  .diy-clothes,
  .diy-price {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .diy-price {
    .diy-price-detail {
      flex: 1;
      background: #fff;
      width: 2rem;
      padding: 1rem 0;
      border: 1px solid #f8f8f8;
      small {
        display: block;
      }
    }
  }
  .diy-clothes {
    margin: 1rem 0;
    .diy-clothes-detail {
      flex: 1;
      background: #fff;
      padding: 0.5rem;
      margin: 0.2rem;
      span {
        display: block;
      }
    }
    .active {
      border: 1px solid var(--custom-primary-color);
    }
  }
  .diy-operator {
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .upload,
    .forward {
      color: var(--custom-primary-color);
      border-radius: 50%;
      padding: 0.8rem 0.5rem;
      font-size: 13px;
      border: 1px solid var(--custom-primary-color);
    }
    .van-button {
      margin-left: 0.2rem;
    }
  }
}
</style>