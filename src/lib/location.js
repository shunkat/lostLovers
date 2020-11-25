export const getLocation= async () =>{


  await navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj );

  function successFunc( position )
  {
    let lat = position.coords.latitude ;
    let lng = position.coords.longitude;
    // html内に書き出し
    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('longitude').innerHTML = lng;

  }


  // 失敗した時の関数
  function errorFunc( error )
  {
    // エラーコードのメッセージを定義
    var errorMessage = {
      0: "原因不明のエラーが発生しました…。" ,
      1: "位置情報の取得が許可されませんでした…。" ,
      2: "電波状況などで位置情報が取得できませんでした…。" ,
      3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
    } ;

    // エラーコードに合わせたエラー内容をアラート表示
    alert( errorMessage[error.code] ) ;
  }

  let optionObj = {
    "enableHighAccuracy": false ,
    "timeout": 8000 ,
    "maximumAge": 5000 ,
  } ;
  navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;
}




// export const getLocation= async () =>{
//   // ユーザーの端末がGeoLocation APIに対応しているかの判定

//   // 対応している場合
//   if( navigator.geolocation )
//   {

//     // 現在地を取得
//     return await navigator.geolocation.getCurrentPosition(
//       (position) =>  {
//         const pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//       }



//       ),





//   // [第2引数] 取得に失敗した場合の関数
//       function( error )
//       {
//         // エラーコード(error.code)の番号
//         // 0:UNKNOWN_ERROR				原因不明のエラー
//         // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
//         // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
//         // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

//         // エラー番号に対応したメッセージ
//         let errorInfo = [
//           "原因不明のエラーが発生しました…。" ,
//           "位置情報の取得が許可されませんでした…。" ,
//           "電波状況などで位置情報が取得できませんでした…。" ,
//           "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
//         ] ;

//         // エラー番号
//         let errorNo = error.code ;

//         // エラーメッセージ
//         let errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;

//         // アラート表示
//         alert( errorMessage ) ;

//       } ,

//       // [第3引数] オプション
//       {
//         "enableHighAccuracy": false,
//         "timeout": 8000,
//         "maximumAge": 2000,
//       }

//     );
//   }

//   // 対応していない場合
//   else
//   {
//     // エラーメッセージ
//     let errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;

//     // アラート表示
//     alert( errorMessage ) ;

//   }
//   return navigator.geolocation.getCurrentPosition(function( position ), function(err), );
// }
