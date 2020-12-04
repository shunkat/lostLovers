<template>
  <div id="app" class="flex flex-row ">
    <!-- <div class="background">
      <section class="one">
        <img src="https://source.unsplash.com/1920x1080?nature" alt="" />
        <div class="wrapper" />
      </section>

      <section class="two">
        <img src="https://source.unsplash.com/1920x1080?landscape" alt="" />
        <div class="wrapper" />
      </section>

      <section class="three">
        <img src="https://source.unsplash.com/1920x1080?landscape" alt="" />
        <div class="wrapper" />
      </section>

      <section class="four">
        <img src="https://source.unsplash.com/1920x1080?landscape" alt="" />
        <div class="wrapper" />
      </section>
    </div> -->
    <Weather :weather-number="weatherIndex" />
    <Cloth :dress-number="dressIndex" />
  </div>
</template>

<script>
// import { getTemperature } from "@/lib/weather"; // テスト用
import Cloth from "./components/pages/Cloth.vue";
import Weather from "./components/pages/Weather.vue";
// import { clothIndex } from "./lib/clothes"; //　テスト用
export default {
  name: "App",
  components: {
    Weather,
    Cloth,
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
%fixedbox {
  // Basic styling
  // box-sizing: border-box;
  // display: block;
  // font-size: 4em;
  // padding: 1em;
  // width: 6em;
  // height: 3em;

  // // Center box in middle of screen
  // // position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate3d(-50%, -50%, 0);
}
#app {
  // display: flex;
  // flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  background-image: url(/img/bgi1.jpg);
}
.background {
}

.one {
  // Section background image
  background-image: url(https://source.unsplash.com/1920x1080?nature);

  .wrapper:before {
    // Box background color
    background: red;
  }
}

.two {
  background-image: url(https://source.unsplash.com/1920x1080?landscape);

  .wrapper:before {
    background: #faaa54;
    mix-blend-mode: difference;
  }
}

.three {
  background-image: url(https://source.unsplash.com/1920x1080?portrait);

  .wrapper:before {
    background: #6c320a;
    mix-blend-mode: screen;
  }
}

.four {
  background-image: url(https://source.unsplash.com/1920x1080?stars);

  .wrapper:before {
    background: #e4135d;
  }
}
</style>
