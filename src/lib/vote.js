import firebase from "firebase";
import "firebase/firestore";



export const dateToStr = () => {
  let date = new Date();
  let format = 'YYYY.MM.DD'
    // フォーマット文字列内のキーワードを日付に置換する
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    return format;
  }


export const fetchDate = async (date) => {
  const db = firebase.firestore();
  let docRef = db.collection("Dates").doc(date);

  let data = null;
  await docRef.get().then(function(doc) {
      if (doc.exists) {
        // あった場合
        data = doc.data();
      } else {
        // なかった場合
        db.collection("Dates").doc(date).set({
          count1: 0,count2: 0,count3: 0
        });

      }
  }).catch(function(error) {
      return "Error getting document:";
  });

  return data;

};

export const addData = async (date,count,countNumber) => {
  const db = firebase.firestore();
  let docRef = db.collection("Dates").doc(date);
  switch (countNumber) {
    case 1:
      await docRef.update({
        count1:count
      })
      break;
      case 2:
      await docRef.update({
        count2:count
      })
      break;
      case 3:
        await docRef.update({
          count3:count
        })
        break;
  }



}


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
