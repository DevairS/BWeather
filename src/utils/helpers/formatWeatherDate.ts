/* eslint-disable no-param-reassign */
export const formatWeatherDate = (weather: Weather.Data): Weather.Data => {
  weather.main.temp = Math.round(weather.main.temp);
  weather.main.temp_max = Math.round(weather.main.temp_max);
  weather.main.temp_min = Math.round(weather.main.temp_min);
  return weather;
};
