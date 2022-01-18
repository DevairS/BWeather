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
      const { data } = await api.get('/forecast', {
        params: {
          lat,
          lon,
          cnt: 5,
        },
      });
      return data.list;
    } catch (error) {
      throw new Error(error);
    }
  };
}
