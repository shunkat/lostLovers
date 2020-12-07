<template>
  <div class="container p-10 rounded-lg">
    <ul class="snip1226">
      <div class="flame">
        <div>
          <p>
            {{ count1 }}
          </p>
          <button :disabled="isVoted" @click="voteCountOne()">
            ちょっとあつい
          </button>
        </div>
        <div>
          <p>
            {{ count2 }}
          </p>
          <button :disabled="isVoted" @click="voteCountTwo()">
            普通
          </button>
        </div>
        <div>
          <p>
            {{ count3 }}
          </p>
          <button :disabled="isVoted" @click="voteCountThree()">
            さむい
          </button>
        </div>
      </div>
    </ul>
  </div>
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
  border: solid 2px white;
  padding: 1rem;
  // width: 3rem;
  width: 800px;
}

.container {
  background-color: rgb(235, 235, 235);
  opacity: 0.85;
  margin: 50px;
}
p {
  font-size: 1.7rem;
  // position: relative;
  // writing-mode: vertical-lr !important;
  padding: 0.5em 0.75em;
  background-color: #f0f0f0c4;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1) inset;
}
.snip1226 {
  font-family: "Raleway", Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
.snip1226 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1226 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  overflow: hidden;
}
button {
  background: #14d0d6;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  margin-bottom: 1em;
  border-radius: 20px;
  // cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  &:hover {
    background: #fff;
    color: #1aab8a;
  }
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
