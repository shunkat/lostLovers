<template>
  <p>{{ Vote }}</p>
</template>

<script>
import firebase from "firebase";
import { vote } from "@/lib/vote.js";
import { dateToStr } from "@/lib/vote.js";
export default {
  name: "Vote",
  data() {},
  mounted() {
    const date = dateToStr();
    console.log(date);
    vote = vote(date);
    console.log(vote);
  },
};
</script>

<style lang="scss" scoped></style>
