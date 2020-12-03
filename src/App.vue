<template>
  <div id="app" class="flex flex-row ">
    <Weather />
    <Cloth :dress-number="dressIndex" />
  </div>
</template>

<script>
import HelloWorld from "./components/pages/HelloWorld.vue";
// import { getTemperature } from "@/lib/weather"; // テスト用
import Cloth from "./components/pages/Cloth.vue";
import Weather from "./components/pages/Weather.vue";
// import { clothIndex } from "./lib/clothes"; //　テスト用
export default {
  name: "App",
  components: {
   Cloth
  },
  data() {
    return {
      dressIndex: 2,
    };
  },
  mounted() {
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
