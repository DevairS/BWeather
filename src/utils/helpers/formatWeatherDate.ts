import { convertDate } from './convertDate';

export const formatWeatherDate = (weather: Weather.Data): Weather.Data => {
  const cloneWeather = weather;
  cloneWeather.main.temp = Math.round(weather.main.temp);
  cloneWeather.main.temp_max = Math.round(weather.main.temp_max);
  cloneWeather.main.temp_min = Math.round(weather.main.temp_min);
  cloneWeather.main.feels_like = Math.round(weather.main.feels_like);
  cloneWeather.sys.sunriseFormat = convertDate(weather.sys.sunrise);
  cloneWeather.sys.sunsetFormat = convertDate(weather.sys.sunset);
  cloneWeather.wind.speed = weather.wind.speed * 3.6;
  return cloneWeather;
};
