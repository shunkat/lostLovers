export const getLocation= async () =>{
  // ユーザーの端末がGeoLocation APIに対応しているかの判定

  // 対応している場合
  if( navigator.geolocation )
  {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(

      // [第1引数] 取得に成功した場合の関数
      function( position )
      {
        // 取得したデータの整理
        let data = position.coords ;

        // データの整理
        let lat = data.latitude ;
        let lng = data.longitude ;

        let result = {lat,lng};
        // データの書き出し
        console.log(result);


      },

      // [第2引数] 取得に失敗した場合の関数
      function( error )
      {
        // エラーコード(error.code)の番号
        // 0:UNKNOWN_ERROR				原因不明のエラー
        // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
        // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
        // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

        // エラー番号に対応したメッセージ
        let errorInfo = [
          "原因不明のエラーが発生しました…。" ,
          "位置情報の取得が許可されませんでした…。" ,
          "電波状況などで位置情報が取得できませんでした…。" ,
          "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
        ] ;

        // エラー番号
        let errorNo = error.code ;

        // エラーメッセージ
        let errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;

        // アラート表示
        alert( errorMessage ) ;

      } ,

      // [第3引数] オプション
      {
        "enableHighAccuracy": false,
        "timeout": 8000,
        "maximumAge": 2000,
      }

    ) ;
  }

  // 対応していない場合
  else
  {
    // エラーメッセージ
    let errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;

    // アラート表示
    alert( errorMessage ) ;

  }
}
