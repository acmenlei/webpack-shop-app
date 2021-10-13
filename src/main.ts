import { createApp } from "vue"
import App from "@/App.vue"
import Vant from "@/plugins/vant"
import router from "@/permission"
import "@/assets/scss"
import "@/assets/iconfont/iconfont.css"
import "@/assets/iconfont/im/iconfont.css"

createApp(App).use(Vant).use(router).mount("#app");
