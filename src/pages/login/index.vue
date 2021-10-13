<template>
  <div id="login">
    <van-form class="my-form" @submit="onSubmit">
      <login-logo />
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
      </van-cell-group>
      <div class="login-service-button">
        <a>立即注册</a>
        <a>忘记密码</a>
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          color="var(--custom-primary-color)"
          native-type="submit"
        >
          立即登录
        </van-button>
      </div>
    </van-form>
    <other-login-method />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { LoginForm } from "@/types";
import { Toast } from "vant";
import { routerReplace } from "@/router/scripts/router-trigger";
import LoginLogo from "./components/login-logo.vue";
import OtherLoginMethod from "./components/other-login-method.vue";

export default defineComponent({
  name: "login",
  components: { OtherLoginMethod, LoginLogo },
  setup() {
    const username = ref("");
    const password = ref("");

    const onSubmit = (values: LoginForm) => {
      const { username, password } = values;
      Toast.loading({ forbidClick: true, message: "正在登陆" });

      setTimeout(() => {
        if (username == "admin" && password == "admin") {
          routerReplace("/home");
        } else {
          Toast.fail("账号或密码错误请重新输入！");
          setTimeout(() => {
            Toast.clear(true);
          }, 2000);
          return
        }
        Toast.clear(true);
      }, 2000);
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
});
</script>

<style lang='scss' scoped>
#login {
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
      // color: #567 !important;
    }
    .login-service-button {
      display: flex;
      justify-content: space-between;
      height: 2.5rem;
      align-items: center;
      padding: 0 45px;
      a {
        margin-top: 15px;
        font-size: 13px;
      }
    }
  }
}
</style>