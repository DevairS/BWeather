import { format } from 'date-fns';

export const formatTimestampToDate = (date: number, type: string): string => {
  return format(new Date(date * 1000), type);
};

export const formatWallpaperName = (name: string): string => {
  switch (name) {
    case 'Rain-09d':
      return 'Rain-10d';
    case 'Rain-13d':
      return 'Rain-10d';
    case 'Clouds-03d':
      return 'Clouds-02d';
    case 'Clouds-03n':
      return 'Clouds-02n';
    case 'Clouds-04d':
      return 'Clouds-02d';
    case 'Clouds-04n':
      return 'Clouds-02n';
    default:
      return name;
  }
};

export const formatWeatherDate = (weather: Weather.Data): Weather.Data => {
  const cloneWeather = weather;
  cloneWeather.main.temp = Math.round(weather.main.temp);
  cloneWeather.main.temp_max = Math.round(weather.main.temp_max);
  cloneWeather.main.temp_min = Math.round(weather.main.temp_min);
  cloneWeather.main.feels_like = Math.round(weather.main.feels_like);
  cloneWeather.sys.sunriseFormat = formatTimestampToDate(
    weather.sys.sunrise,
    'HH:mm:ss',
  );
  cloneWeather.sys.sunsetFormat = formatTimestampToDate(
    weather.sys.sunset,
    'HH:mm:ss',
  );
  cloneWeather.wind.speedFormat = (weather.wind.speed * 3.6).toFixed(2);
  return cloneWeather;
};
