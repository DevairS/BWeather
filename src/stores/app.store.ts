import { makeAutoObservable } from 'mobx';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  userLocation: GeolocationPosition = null;

  getGeolocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLocation = position;
      });
    }
  };
}

export default AppStore;
