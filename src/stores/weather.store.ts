import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { WeatherApi } from '~/api';
import { formatWeatherDate } from '~/utils';

class WeatherStore {
  weatherApi: WeatherApi;

  constructor() {
    makeAutoObservable(this);
    this.weatherApi = new WeatherApi();
  }

  @persist('object')
  weatherData: Weather.Current = null;

  @persist('object')
  weatherForecast: Weather.Forecast[] = null;

  getWeather = async (lat: number, lon: number): Promise<void> => {
    const data = await this.weatherApi.getGeoCoordinates(lat, lon);
    this.weatherData = formatWeatherDate(data);
  };

  getWeatherForecast = async (lat: number, lon: number): Promise<void> => {
    const data = await this.weatherApi.getGeoCoordinatesForecast(lat, lon);
    this.weatherForecast = data;
  };
}

export default WeatherStore;
