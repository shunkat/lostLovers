<template>
  <div class="container p-10 rounded-lg">
    <ul class="snip1226">
      <li>
        <h3>{{ city }}</h3>
      </li>

      <a href="#"> today's weather </a>
      <div class="imgBox">
        <img alt=" 読み込みません" :src="weatherImage" />
      </div>
      <li>
        <a>{{ weather }}</a>
      </li>
      <li>
        <a> {{ temperature }}℃ </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getLocation } from "@/lib/location.js";
import { getWeather } from "@/lib/weather.js";
import { getTemperature } from "@/lib/weather.js";

export default {
  name: "Weather",
  props: {
    weatherNumber: {
      required: true,
    },
  },
  data() {
    return {
      show: true,
      city: [],
      // day: "12/3",
      weather: [],
      temperature: [],
    };
  },
  computed: {
    weatherImage() {
      if (this.weatherNumber == "Clear") {
        return "/img/sun.png"; //晴れ
      } else if (this.weatherNumber == "Cloud") {
        return "/img/nuage.png"; //曇り
      } else if (this.weatherNumber == "rain") {
        return "/img/rain.png"; //雨
      } else if (this.weatherNumber == "snow") {
        return "/img/snow.png"; //雪
      } else if (this.weatherNumber == "thunder") {
        return "/img/thunder.png"; //雷
      }
      return "";
    },
  },
  async created() {
    let queltemp;
    await getTemperature().then((result) => {
      queltemp = result;
    }
  },
  mounted() {
    const Location = getLocation().then((result) => {
      console.log(result);
      getWeather();
      console.log(getWeather());
    });

    this.weatherNumber = queltemp.weather[0].main;
    this.weather = queltemp.weather[0].main;
    this.city = queltemp.area;
    this.temperature = Math.round(queltemp.night) - 271;
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(235, 235, 235);
  opacity: 0.85;
  margin: 50px;
  z-index: 10;
}
.imgBox {
  display: flex;
  justify-content: center;
}
h3 {
  font-size: 2.5rem;
}
p {
  font-size: 1.8rem;
}

.snip1226 {
  font-family: "Raleway", Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
.snip1226 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1226 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  overflow: hidden;
}

.snip1226 h3:before,
.snip1226 h3:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1226 h3:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #14d0d6;
}
.snip1226 h3:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  // content: attr(data-hover);
  color: rgb(0, 0, 0);
  white-space: nowrap;
}
.snip1226 li:hover h3,
.snip1226 .current h3 {
  transform: translateY(100%);
}
a {
  position: relative;
  display: inline-block;
  transition: 0.4s;
  font-size: 1.7rem;
}
a::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 0;
  height: 3px;
  background-color: #14d0d6;
  transition: 0.3s;
}
a:hover::after {
  width: 100%;
}
</style>
