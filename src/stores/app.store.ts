import { makeAutoObservable } from 'mobx';
import { translateGeolocation } from '~/translate';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  userLocation: GeolocationPosition = null;

  getGeolocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  setGeolocation = async (): Promise<void> => {
    try {
      this.userLocation = await this.getGeolocation();
    } catch (error) {
      throw new Error(translateGeolocation(error.code));
    }
  };
}

export default AppStore;
