const getWeather= async (city) =>{
  //openweathermap（天気予報API）に接続
  let request = new XMLHttpRequest();
  let cityName = city;
  let owmApiKey = process.env.VUE_APP_WEATHER_API_KEY;
  let ownURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&APPID="+ owmApiKey +""; //http://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=2146bc5634ee54009009695fae2a8d1c

  const result = await fetch(ownURL)
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    return data
  });
  return result

}
console.log(getWeather('tokyo'));
