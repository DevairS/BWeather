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
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}
