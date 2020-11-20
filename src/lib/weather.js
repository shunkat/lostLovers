export const getWeather = () => {
  //htmlのul要素（id = 'messages'）を呼び出し
  //openweathermap（天気予報API）に接続
  const request = new XMLHttpRequest();
  const cityName = "tokyo";
  const owmApiKey = process.env.VUE_APP_WEATHER_API_KEY;
  const owmURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&APPID=" +
    owmApiKey +
    "";
  request.open("GET", owmURL, true);
  //結果をjson型で受け取る
  request.responseType = "json";

  let result;
  request.onload = (response) => {
    const data = response;
    result = data;
  };

  request.send();

  return result;
};
