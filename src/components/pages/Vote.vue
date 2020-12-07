<template>
  <body>
    <p>
      {{ count1 }}
    </p>
    <button @click="voteCountOne()">
      ちょっとあつい
    </button>
    <p>
      {{ count2 }}
    </p>
    <button id="normal">
      普通
    </button>
    <p>
      {{ count3 }}
    </p>
    <button id="chil">
      さむい
    </button>
  </body>
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
      this.count1 += 1;
      firebase
        .firestore()
        .collection("Dates")
        .update({
          count1: this.count1,
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
