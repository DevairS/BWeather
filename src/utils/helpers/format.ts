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
  return {
    ...weather,
    main: {
      ...weather.main,
      temp: Math.round(weather.main.temp),
      tempMax: Math.round(weather.main.tempMax),
      tempMin: Math.round(weather.main.tempMin),
      feelsLike: Math.round(weather.main.feelsLike),
    },
    wind: {
      ...weather.wind,
      speedFormat: (weather.wind.speed * 3.6).toFixed(2),
    },
  };
};
