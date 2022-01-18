import { create } from 'mobx-persist';
import AppStore from './app.store';
import WeatherStore from './weather.store';

class RootStore {
  app: AppStore;

  weather: WeatherStore;

  constructor() {
    this.app = new AppStore();
    this.weather = new WeatherStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('weather', store.weather);

export { RootStore, AppStore, WeatherStore };
export default store;
