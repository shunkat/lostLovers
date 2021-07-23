<template>
  <div id="app">
    <div class="flex">
      <Weather :weather-number="weatherIndex" />
      <Cloth :dress-number="dressIndex" />
    </div>

    <div>
      <Vote />
    </div>
  </div>
</template>

<script>
// 変更　テストも兼ねて
import Cloth from "./components/pages/Cloth.vue";
import Weather from "./components/pages/Weather.vue";
import Vote from "./components/pages/Vote.vue"; //エラーが出たので放置
export default {
  name: "App",
  components: {
    Weather,
    Cloth,
    Vote,
  },

  mounted() {},
};
</script>

<style lang="scss">
$bg_color: #000000;
$font_color: #333;

body {
  background-color: black;
  color: $font_color;
  text-align: center;
}
#app {
  font-family: "HanziPen TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url(../public/img/sea.jpg);

  .box {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
