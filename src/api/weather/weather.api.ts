import { formatTimestampToDate } from '~/utils';
import api from '../api';

export default class WeatherApi {
  getGeoCoordinates = async (
    lat: number,
    lon: number,
  ): Promise<Weather.Data> => {
    try {
      const { data } = await api.get('/weather', {
        params: {
          lat,
          lon,
        },
      });
      return {
        ...data,
        main: {
          ...data.main,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          feelsLike: data.main.feels_like,
        },
        sys: {
          ...data.sys,
          sunrise: formatTimestampToDate(data.sys.sunrise, 'HH:mm:ss'),
          sunset: formatTimestampToDate(data.sys.sunset, 'HH:mm:ss'),
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  getGeoCoordinatesForecast = async (
    lat: number,
    lon: number,
  ): Promise<Weather.Forecast[]> => {
    try {
      const { data } = await api.get('/onecall', {
        params: {
          lat,
          lon,
          exclude: 'minutely,hourly,current',
        },
      });
      return data.daily;
    } catch (error) {
      throw new Error(error);
    }
  };
}
