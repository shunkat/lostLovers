<template>
  <p>ボタン</p>
</template>

<script>
import firebase from "firebase";
import { fetchDate } from "@/lib/vote.js";
import { dateToStr } from "@/lib/vote.js";
export default {
  name: "Vote",
  data() {
    return {
      count1: 0,
      count2: 0,
      count3: 0,
    };
  },
  // methods: {
  //   voteCountOne() {
  //     this.count1 += 1;
  //     // ここで+1するfetchdata的なやつを実行
  //   };
  // }
  mounted() {
    const date = dateToStr();
    const data = fetchDate(date);
    if (data) {
      this.count1 = data.count1;
      this.count2 = data.count2;
      this.count3 = data.coun3;
    }
  },
};
</script>

<style lang="scss" scoped></style>
