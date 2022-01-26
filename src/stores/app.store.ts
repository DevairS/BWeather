import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { translateGeolocation } from '~/translate';
import { formatWallpaperName, validationWallpaper } from '~/utils';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  userLocation: GeolocationPosition = null;

  @persist('object')
  wallpaperPath = './wallpapers/default.jpg';

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

  setWallpaperPath = (condition: Weather.Condition): void => {
    const urlWallpaper = process.env.REACT_APP_S3_URL_WALLPAPER;
    const wallpaperName = formatWallpaperName(
      `${condition.main}-${condition.icon}`,
    );
    const isValid = validationWallpaper(wallpaperName);
    console.log(isValid);
    if (!isValid) this.wallpaperPath = `${urlWallpaper}default.jpg`;

    this.wallpaperPath = `${urlWallpaper}${wallpaperName}.jpg`;
  };
}

export default AppStore;
