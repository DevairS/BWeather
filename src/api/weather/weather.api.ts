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
      return data;
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
      console.log(data.daily);
      return data.daily;
    } catch (error) {
      throw new Error(error);
    }
  };
}
