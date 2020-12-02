<template>
  <div class="container w-1/2">
    <div class="w-full">
      <div class="bg-gray-100 p-10 rounded-lg">
        <h3 class="tracking-widest text-teal-500  font-medium title-font">
          日付{{ day }}
        </h3>
        <h2 class="text-lg  font-medium title-font p-32">
          イラスト
        </h2>
        <p class="leading-relaxed text-base">
          気温など
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import getWeather from "@/lib/weather.js";
export default {
  name: "Weather",
  data: function() {
    return {
      date: Date(),
      observer: function() {},
    };
  },
  mounted: async function() {
    const collectionReference = firebase.firestore().collection("dates");
    let date = new Date(
      new Date().toLocaleString({ timeZone: "Asia/Tokyo" })
    ).getDate();

    const docRef = collectionReference.doc(data);
    // 今日の日付のdocがあるかどうか一回取得して確認する。
    docRef
      .get()
      .then((data) => {
        return data.data();
      })
      .catch((error) => {
        console.log(error);
      });
    // ないんだったら作る。

    // リアルタイムリッスンを開始する。

    this.observer = await firebase
      .firestore()
      .collection("dates")
      .doc(date)
      .onSnapshot(
        (docSnapshot) => {
          date = docSnapshot.data();
        },
        (err) => {
          // err
          console.log(`Encountered error: ${err}`);
        }
      );
  },
  beforeDestroy() {
    this.observer();
  },
};
</script>

<style lang="scss" scoped></style>
