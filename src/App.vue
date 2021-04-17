<template>
  <div id="app" class="flex flex-wrap">
    <Weather :weather-number="weatherIndex" />
    <Cloth :dress-number="dressIndex" />
    <Vote />
    <div class="shutter" />
    <div class="content" />
  </div>
</template>

<script>
// 変更　テストも兼ねて
import Cloth from "./components/pages/Cloth.vue";
import Weather from "./components/pages/Weather.vue";
import Vote from "./components/pages/Vote.vue"; //エラーが出たので放置
import { clothIndex } from "./lib/clothes"; //　テスト用
export default {
  name: "App",
  components: {
    Weather,
    Cloth,
    Vote,
  },
  data() {
    return {
      weatherIndex: "cloud",
      dressIndex: 2,
    };
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url(/img/bgi1.jpg);

  // オープニング
  .shutter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1e1e1e;
    z-index: 9999;
    animation: byeShutter 2.6s forwards;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }

    &::before {
      background-color: #8fd7ec;
      width: 0;
      height: 1px;
      animation: shutterOpen1 2.6s forwards;
    }

    &::after {
      width: 120%;
      height: 0;
      margin-left: -10%;
      background-color: #000000;
      animation: shutterOpen2 2.6s forwards;
    }
  }
  .content {
    animation: contentScale 2.6s forwards;
  }
}
@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen1 {
  0% {
    width: 0;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes shutterOpen2 {
  60% {
    width: 120%;
    height: 0;
    transform: rotate(5deg);
  }
  90% {
    width: 120%;
    height: 100%;
    transform: rotate(-5deg);
  }
  100% {
    width: 120%;
    height: 100%;
    transform: rotate(-5deg);
  }
}

@keyframes contentScale {
  70% {
    transform: perspective(800px) scale(0.9) rotateX(15deg);
  }
  100% {
    transform: perspective(800px) scale(1) rotateX(0);
  }
}
</style>
