import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { Alert } from '~/utils';
import { validationWallpaper } from '~/utils/validation/validationWallpaper';
import { useStores } from '../../hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { weather, app } = useStores();
  const [loading, setLoading] = useState(true);
  const [wallpaperPath, setWallpaperPath] = useState<string>(
    './wallpapers/default.png',
  );

  const getWeather = useCallback(
    async (lat: number, lon: number): Promise<void> => {
      await weather.getWeather(lat, lon);
      await weather.getWeatherForecast(lat, lon);
    },
    [weather],
  );

  const handlePathWallpaper = (condition: Weather.Condition): string => {
    const wallpaperName = `${condition.main}-${condition.icon}`;
    const isValid = validationWallpaper(wallpaperName);
    if (!isValid) return './wallpapers/default.png';
    return `./wallpapers/${wallpaperName}.png`;
  };

  const updateGeolocation = useCallback(async () => {
    try {
      Alert({ message: 'texto de test test test', type: 'error' });
      await app.setGeolocation();
      await getWeather(
        app.userLocation.coords.latitude,
        app.userLocation.coords.longitude,
      );
      setWallpaperPath(handlePathWallpaper(weather.weatherData.weather[0]));
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }, [app, getWeather]);

  useEffect(() => {
    setLoading(true);
    updateGeolocation();
  }, [app, updateGeolocation]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Home
      weatherData={weather.weatherData}
      updateGeolocation={updateGeolocation}
      wallpaperPath={wallpaperPath}
    />
  );
};

export default observer(HomeContainer);
