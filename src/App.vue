<template>
  <div id="app" class="bg-red-600">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/pages/HelloWorld.vue";
import { getWeather } from "./lib/weather"; // 確認のためのテストなので後で消す。
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(getWeather()); // 確認のためのテストなので後で消す。
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
