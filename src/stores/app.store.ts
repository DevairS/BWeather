import { makeAutoObservable } from 'mobx';

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
    this.userLocation = await this.getGeolocation();
    console.log(this.userLocation);
  };
}

export default AppStore;
