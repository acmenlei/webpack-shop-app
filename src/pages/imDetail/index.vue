<template>
  <div id="im-detail">
    <designer-intro />
    <im-content />
    <send-message />
    <im-operator/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import DesignerIntro from "./components/designer-intro.vue";
import imContent from "./components/im-content.vue";
import imOperator from "./components/im-operator.vue";
import sendMessage from "./components/send-message.vue";

export default defineComponent({
  name: "im-detail",
  components: { DesignerIntro, imContent, sendMessage, imOperator },
  setup() {
    const { query } = useRoute();
    console.log(query);

    return {};
  },
});
</script>

<style lang='scss' scoped>
</style>