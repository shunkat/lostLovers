<template>
  <div class="container p-10 rounded-lg">
    <h3>
      Today's best Clothes
    </h3>
    <div class="imgBox">
      <img alt="読み込みません" :src="clothesImage" />
    </div>

    <p>
      コメント
    </p>
  </div>
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
