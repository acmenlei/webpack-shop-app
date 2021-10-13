<template>
  <div id="register">
    <van-form class="my-form" @submit="onSubmit">
      <register-logo />
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          placeholder="用户名/手机号/邮箱"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="password"
          name="password"
          type="password"
          placeholder="密码"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="确认密码"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="verifyCode"
          name="verifyCode"
          placeholder="验证码"
          :rules="[{ required: true }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          color="var(--custom-primary-color)"
          native-type="submit"
        >
          立即注册
        </van-button>
      </div>
    </van-form>
    <div class="register-agreement">
      <van-radio-group v-model="checked">
        <van-radio
          name="yes"
          checked-color="var(--custom-primary-color)"
        ></van-radio>
      </van-radio-group>
      <p>注册表示你同意该软件<span>用户服务协议</span>和<span>隐私政策</span></p>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { RegisterForm } from "@/types";
import { Toast } from "vant";
import { routerReplace } from "@/router/scripts/router-trigger";
import registerLogo from "@/pages/login/components/login-logo.vue";

export default defineComponent({
  name: "register",
  components: { registerLogo },
  setup() {
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const verifyCode = ref("");
    const checked = ref<string>("no");

    const onSubmit = (values: RegisterForm) => {
      console.log(values);
      Toast.loading({ forbidClick: true, message: "正在注册" });
      setTimeout(() => {
        Toast.clear(true);
        routerReplace("/login");
      }, 2000);
    };

    return {
      username,
      password,
      confirmPassword,
      verifyCode,
      onSubmit,
      checked,
    };
  },
});
</script>

<style lang='scss' scoped>
#register {
  position: relative;
  width: 100%;
  height: 100vh;
  background: white;
  left: 50%;
  transform: translateX(-50%);

  .my-form {
    width: 100vw;

    .van-cell-group {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
      .van-field {
        border: 1.5px solid var(--custom-primary-color);
        border-radius: 20px;
        width: 80%;
        margin-top: 20px;
      }
    }
    .van-button {
      width: 90%;
      margin: 0 auto;
    }
  }
  .register-agreement {
    transform: translateY(100%);
    display: flex;
    justify-content: center;
    font-size: 13px;
    align-items: center;
    letter-spacing: 2px;
    p {
        margin-left: 5px;
        span {
            color: orangered;
        }
    }
  }
}
</style>