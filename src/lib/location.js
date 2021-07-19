export const getLocation = async () => {
  // let result = {};
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 5000,
      });
    });
  };
  await getCurrentPosition()
    .then((position) => {
      const map = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // TODO location.js lat・lng→ok
      // console.log(map.lat);
      return map;
    })
    .catch((reject) => {
      // エラーコードのメッセージを定義
      let errorMessage = {
        0: "原因不明のエラーが発生しました…。",
        1: "位置情報の取得が許可されませんでした…。",
        2: "電波状況などで位置情報が取得できませんでした…。",
        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。",
      };
      // エラーコードに合わせたエラー内容をアラート表示
      alert(errorMessage[reject.code]);
      return;
    });
  // return result;
};
