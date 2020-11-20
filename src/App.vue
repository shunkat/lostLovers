<template>
  <div id="app" class="bg-white">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/pages/HelloWorld.vue";

//位置情報を取得する
import "@/lib/location.js"; // これでjsを読み込める…
import { getLocation } from "@/lib/location"; // これでメソッド読み込める…
let address = getLocation();
console.log(address);

//天気情報を取得する
import "@/lib/weather.js"; // これでjsを読み込める…
import { getWeather } from "@/lib/weather"; // これでメソッド読み込める…
// console.log(getWeather(35, 139)); //緯度と経度を引数に渡す
export default {
  name: "App",
  components: {
    HelloWorld,
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
