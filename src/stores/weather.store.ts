// eslint-disable-next-line import/no-unresolved
import { makeAutoObservable } from 'mobx';
import { WeatherApi } from '~/api';

class WeatherStore {
  weatherApi: WeatherApi;

  constructor() {
    makeAutoObservable(this);
    this.weatherApi = new WeatherApi();
  }

  weatherData: Weather.Data = null;

  getWeather = async (lat: number, log: number): Promise<Weather.Data> => {
    const data = await this.weatherApi.getGeoCoordinates(lat, log);
    this.weatherData = data;
    return data;
  };
}

export default WeatherStore;
