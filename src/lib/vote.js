import firebase from "firebase";


export const dateToStr = () => {
  let date = new Date();
  format = 'YYYY.MM.DD'
    // フォーマット文字列内のキーワードを日付に置換する
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    return format;
  }

export const vote = (date) => {
  let docRef = db.collection(date).doc("1");

  docRef.get().then(function(doc) {
      if (doc.exists) {
          return doc.data();
      } else {
          // doc.data() will be undefined in this case
          return "No such document!";
      }
  }).catch(function(error) {
      return "Error getting document:";
  });




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
