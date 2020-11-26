import { getLocation } from "@/lib/location.js";

export const getWeather = async (lat, lon) => {
  //openweathermap（天気予報API）に接続

  let ownApiKey = process.env.VUE_APP_WEATHER_API_KEY;
  let ownURL =
    "http://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=hourly,minutely&appid=" +
    ownApiKey +
    "";

  const result = await fetch(ownURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.daily[0].feels_like;
    });
  return result;
};
export const getTemperature = () => {
  const latAndLng = getLocation().then((result) => {
    return result;
  });
  const weather = getWeather(latAndLng.lat, latAndLng.lng).then((result) => {
    return result;
  });
  return result;
};
