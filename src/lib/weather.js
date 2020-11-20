export const getWeather= async (lat,lon) =>{
  //openweathermap（天気予報API）に接続

  let owmApiKey = process.env.VUE_APP_WEATHER_API_KEY;
  let ownURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + lon +"&APPID="+ owmApiKey +"";
  const result = await fetch(ownURL)

  .then((res)=>{
    return res.json();
  }).then((data)=>{
    return data.main;
  });
  return result

}
