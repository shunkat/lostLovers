// simple weather map
// fetch("https://mxrck-ser-programadores-apis.p.rapidapi.com/weather/forecast/MXCE0008/c.json?lang=es", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "mxrck-ser-programadores-apis.p.rapidapi.com",
// 		"x-rapidapi-key": "97de04ed9emshfd77a75f4fbc4d7p13d043jsnd5d10b854251"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// open weather map
// 服装指数は、朝晩や日中の予想気温からどんな服装が適しているか提案します。

// 必要な情報→main-temp温度、main-feels_like体感温度、main-temp_min現在の最低気温、main-temp_max現在の最高気温
// 過去の服装指数を参考に
// 朝昼晩の予想気温
// fetch("https://api.openweathermap.org/data/2.5/forecast/")

// 関数作成11/20
// 服装指数　小さければ小さいほど厚着をするべき

// データ格納
// function getWeatherData() {
// path data.main.取得したい情報
// (data.name) ? city.name = data.name.toUpperCase():

// clothes.temp = Math.round(data.main.temp);
// clothes.tempMin = Math.round(data.main.temp_min);
// clothes.tempMax = Math.round(data.main.temp_max);

// }

export const clothIndex = (temperature) => {
  let dressIndex = 0;
  const clothes = {
    temp: temperature,
    // tempMin: 25,
    // tempMax: 15,
  };
  if (clothes.temp > 25) {
    dressIndex = 5; //半袖
  } else if (clothes.temp > 20) {
    dressIndex = 4; //長袖
  } else if (clothes.temp > 15) {
    dressIndex = 3; //薄手のジャケット
  } else if (clothes.temp > 10) {
    dressIndex = 2; //コート
  } else if (clothes.temp < 10) {
    dressIndex = 1; //コート
  }

  return dressIndex;
};
export const clothIndex2 = (temperature) => {
  let dressIndex2 = 0;
  const clothes = {
    temp: temperature,
    // tempMin: 25,
    // tempMax: 15,
  };
  if (clothes.temp > 25) {
    dressIndex2 = 5; //半袖
  } else if (clothes.temp > 20) {
    dressIndex2 = 4; //長袖
  } else if (clothes.temp > 15) {
    dressIndex2 = 3; //薄手のジャケット
  } else if (clothes.temp > 10) {
    dressIndex2 = 2; //コート
  } else if (clothes.temp < 10) {
    dressIndex2 = 1; //コート
  }

  return dressIndex;
};

// getWeatherData()
// console.log(clothes.temp)
// console.log(dressIndex)
// やること
// 服装指数関数作成
//服装 イラスト
