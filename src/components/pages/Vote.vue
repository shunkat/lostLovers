<template>
  <div class="container p-10 rounded-lg">
    <h3>
      Today's best Clothes
    </h3>
    <div class="imgBox">
      <img alt="読み込みません" :src="clothesImage" />
    </div>
    <p>{{ Vote }}</p>
    <p>
      <!-- {{ comment }} -->
      コメント
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import { vote } from "@/lib/vote.js";
export default {
  name: "Vote",

  mounted() {
    const vote = vote("good");
    console.log(vote);
    return result;
  },
};
</script>

<style lang="scss" scoped></style>
