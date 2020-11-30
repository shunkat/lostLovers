<template>
  <div id="app" class="bg-white">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      緯度経度を表示する場所
      <ul>
        <li id="latitude" />
        <li id="longitude" />
      </ul>
    </div>
    <Cloth :dress-number="dressIndex" />
  </div>
</template>

<script>
import HelloWorld from "./components/pages/HelloWorld.vue";
import { getTemperature } from "@/lib/weather"; // テスト用
import Cloth from "./components/pages/Cloth.vue";
import { clothIndex } from "./lib/clothes"; //　テスト用
export default {
  name: "App",
  components: {
    HelloWorld,
    Cloth,
  },
  data() {
    return {
      dressIndex: 2,
    };
  },
  mounted() {
    this.dressIndex = clothIndex(21);
    console.log(this.dressIndex); // テスト用
    console.log(getTemperature()); // テスト用
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
