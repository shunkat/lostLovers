import firebase from "firebase";

export const vote = (feel) => {
  // let normalCount = 0;
  // let hotCount = 0;
  // let coldCount = 0;

  firebase.database().collection("vote").add({
    feel: feel,
    temp: test
  });

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
