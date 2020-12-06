<template>
  <p>{{ Vote }}</p>
</template>

<script>
import firebase from "firebase";
import { vote } from "@/lib/vote.js";
export default {
  name: "Vote",
  data() {
    return { vote: vote("good") };
  },
  mounted() {
    vote("good");
  },
};
</script>

<style lang="scss" scoped></style>
