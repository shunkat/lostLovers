<template>
  <div class="container p-10 rounded-lg">
    <ul class="snip1226">
      <li>
        <h3>
          Today's best Clothes?
        </h3>
      </li>
      <div class="buttonbox">
        <button @click="active">
          今日のおすすめの服装は？
        </button>
      </div>
      <div v-if="isActive" />
      <div
        v-else
        class="imgBox"
      >
        <p>
          朝
          <img
            alt="読み込みません"
            :src="clothesImage2"
          >
          {{ morningcomment }}
        </p>
        <p>
          夜
          <img
            alt="読み込みません"
            :src="clothesImage"
          >
          {{ nightcomment }}
        </p>
      </div>
    </ul>
  </div>
</template>

<script>
import { clothIndex } from "@/lib/clothes.js";
import { getWeather } from "@/lib/weather.js";
export default {
  name: "Cloth",
  data() {
    return {
      isActive: true,
      dressNumber: 0,
      dressNumber2: 0,
      morningcomment: "",
      nightcomment: "",
    };
  },
  computed: {
    clothesImage() {
      if (this.dressNumber == 5) {
        return "/img/t-shirt.png"; //半袖
      } else if (this.dressNumber == 4) {
        return "/img/y-shirt.png"; //長袖　薄手のジャケットを羽織ろう　長袖シャツ・カットソーで快適に
      } else if (this.dressNumber == 3) {
        return "/img/longt-shirt.png"; //ジャケット　コートを着ないと寒いよ
      } else if (this.dressNumber == 2) {
        return "/img/blackcoat.png"; //ジャケット　コートを着ないと寒いよ
      } else if (this.dressNumber == 1) {
        return "/img/jacket2.png"; //コート　ブルブル何をきても寒い　ダウンジャケットでしっかり防寒
      }
      return "";
    },
    clothesImage2() {
      if (this.dressNumber2 == 5) {
        return "/img/t-shirt.png"; //半袖
      } else if (this.dressNumber2 == 4) {
        return "/img/y-shirt.png"; //長袖　薄手のジャケットを羽織ろう　長袖シャツ・カットソーで快適に
      } else if (this.dressNumber2 == 3) {
        return "/img/longt-shirt.png"; //ジャケット　コートを着ないと寒いよ
      } else if (this.dressNumber2 == 2) {
        return "/img/blackcoat.png"; //ジャケット　コートを着ないと寒いよ
      } else if (this.dressNumber2 == 1) {
        return "/img/jacket2.png"; //コート　ブルブル何をきても寒い　ダウンジャケットでしっかり防寒
      }
      return "";
    },
  },
  async mounted() {
    //イラスト表示のための温度取得
    let queltemp;
    // TODO clothImage表示されない問題解決→下のgetWeather()がgetTemperatureになってた
    await getWeather().then((result) => {
      queltemp = result;
    });

    this.dressNumber = clothIndex(Math.round(queltemp.night) - 271);
    this.dressNumber2 = clothIndex(Math.round(queltemp.morning) - 271);

    if (this.dressNumber == 5) {
      this.morningcomment = "半袖で十分！";
      this.nightcomment = "半袖で十分！";
    } else if (this.dressNumber == 4) {
      this.morningcomment = "";
      this.nightcomment = ""; //長袖　薄手のジャケットを羽織ろう　長袖シャツ・カットソーで快適に
    } else if (this.dressNumber == 3) {
      this.morningcomment = "薄めのニットやジャケットで快適に！";
      this.nightcomment = "薄めのニットやジャケットで快適に！"; //ジャケット　コートを着ないと寒いよ
    } else if (this.dressNumber == 2) {
      this.morningcomment = "コートにインナーでしっかり防寒対策を！";
      this.nightcomment = "手袋やマフラーを忘れずに！"; //ジャケット　コートを着ないと寒いよ
    } else if (this.dressNumber == 1) {
      this.morningcomment = "手袋やマフラーを忘れずに！";
      this.nightcomment = "手袋やマフラーを忘れずに！";
    }
  },
  methods: {
    active: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 900px;
  border-radius: 0.8rem;
  background-color: rgb(235, 235, 235);
  opacity: 0.85;
  margin: 50px;
}
.imgBox {
  display: flex;
  justify-content: center;
  margin-right: 1em;
}
img {
  height: 128px;
  width: 128px;
}
h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
p {
  font-size: 1.7rem;
  position: relative;
  padding: 0.5em 0.75em;
  background-color: #f0f0f0c4;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1) inset;
}
</style>
