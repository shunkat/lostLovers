<template>
  <div class="cp-10 rounded-lg">
    <h3>{{ city }} {{ day }}</h3>
    <div class="imgBox">
      today's weather
      <img alt=" 読み込みません" :src="weatherImage" />
    </div>
    <p>{{ weather }}</p>
    <p>
      {{ temperature }}
    </p>
  </div>
</template>

<script>
import { getLocation } from "@/lib/location.js";
import { getWeather } from "@/lib/weather.js";
export default {
  name: "Weather",
  props: {
    weatherNumber: {
      required: true,
    },
  },
  data() {
    return {
      city: "東京",
      day: "12/3",
      weather: "曇り",
      temperature: "9℃",
    };
  },
  computed: {
    weatherImage() {
      if (this.weatherNumber == "sun") {
        return "/img/sun.png"; //晴れ
      } else if (this.weatherNumber == "cloud") {
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
  async mounted() {
    const Weather = getLocation().then((location) => {
      getWeather(location.lat, location.lng).then((result) => {
        console.log(result);

        return result;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(235, 235, 235);
  opacity: 0.85;
  margin: 50px;
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
</style>
