<template>
  <transition name="van-fade">
    <router-view />
  </transition>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  background: #f8f8f8;
}
</style>