<template>
  <body>
    <p>
      {{ count1 }}
    </p>
    <button :disabled="isVoted" @click="voteCountOne()">
      ちょっとあつい
    </button>
    <p>
      {{ count2 }}
    </p>
    <button :disabled="isVoted" @click="voteCountTwo()">
      普通
    </button>
    <p>
      {{ count3 }}
    </p>
    <button :disabled="isVoted" @click="voteCountThree()">
      さむい
    </button>
  </body>
</template>

<script>
import firebase from "firebase";
import { addData } from "@/lib/vote.js";
import { fetchDate } from "@/lib/vote.js";
import { dateToStr } from "@/lib/vote.js";
export default {
  name: "Vote",
  data() {
    return {
      count1: 0,
      count2: 0,
      count3: 0,
      isVoted: false,
    };
  },
  async mounted() {
    const date = dateToStr();
    const data = await fetchDate(date);
    if (data) {
      this.count1 = data.count1;
      this.count2 = data.count2;
      this.count3 = data.count3;
    }
  },
  methods: {
    voteCountOne() {
      const date = dateToStr();
      this.count1 += 1;
      addData(date, this.count1, 1);
      this.isVoted = true;
    },
    voteCountTwo() {
      const date = dateToStr();
      this.count2 += 1;
      addData(date, this.count2, 2);
      this.isVoted = true;
    },
    voteCountThree() {
      const date = dateToStr();
      this.count3 += 1;
      addData(date, this.count3, 3);
      this.isVoted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: white;
}
</style>
