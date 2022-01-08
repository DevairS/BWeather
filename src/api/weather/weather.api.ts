import api from '../api';

export default class WeatherApi {
  getGeoCoordinates = async (lat: string, lon: string): Promise<void> => {
    try {
      console.log(lat, lon);
      const data = await api.get('/weather', {
        params: {
          lat,
          lon,
        },
      });
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };
}
