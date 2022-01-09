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

  getWeather = async (lat: number, log: number): Promise<void> => {
    this.weatherData = await this.weatherApi.getGeoCoordinates(lat, log);
  };
}

export default WeatherStore;
