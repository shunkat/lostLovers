import firebase from "firebase";

let db = firebase.database();
export const vote = (feel) => {
  db.collection("vote").add({
    feel: feel,
    temp: test
  });
  console.log("vote");
  return vote;
};


// const getSnapShot = () => {
//   let observer = doc.onSnapshot(docSnapshot => {
//     console.log(`Received doc snapshot: ${docSnapshot}`);
//     docSnapshot.data();
//     // ...
//   }, err => {
//     console.log(`Encountered error: ${err}`);
//   });
// }

/***
 * {
 *  id:documentId
 * date: Date
 * warmCount:number
 * normalCount:number
 * coldCount:number
 * }
 * 1.当日の日付のdocumnetを作成する。
 * 2. 当日の日付のdocumentを持ってきて表示する。
 * 3. 3つのCount+1する。
 */
