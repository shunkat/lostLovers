<template>
  <div class="container w-1/2">
    <div class="w-full">
      <div class="bg-gray-100 p-10 rounded-lg">
        <h3 class="tracking-widest text-teal-500  font-medium title-font">
          日付
        </h3>
        <img alt="読み込みません" :src="clothesImage" />
        <p class="leading-relaxed text-base">
          コメント
        </p>
      </div>
      <!-- </div> -->
    </div>
  </div>
  <!-- <div class="container bg-red-500">
    <p>服装イラスト</p>
   <div>コメント（服に応じて変更</div></div>  -->
  <!-- </div>  -->
</template>

<script>
export default {
  name: "Cloth",
  props: {
    dressNumber: {
      type: Number,
      required: true,
    },
  },

  computed: {
    clothesImage() {
      if (this.dressNumber == 4) {
        return "/img/t-shirt.png"; //半袖
      } else if (this.dressNumber == 3) {
        return "/img/y-shirt.png"; //長袖
      } else if (this.dressNumber == 2) {
        return "/img/longt-shirt.png"; //ジャケット
      } else if (this.dressNumber == 1) {
        return "/img/jacket.png"; //コート
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
