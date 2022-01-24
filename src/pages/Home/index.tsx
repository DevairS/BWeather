import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { useStores } from '~/hooks';
import { Alert, formatWallpaperName } from '~/utils';
import { validationWallpaper } from '~/utils/validation/validationWallpaper';
import Home from './Home';

const HomeContainer: FC = () => {
  const { weather, app } = useStores();
  const [loading, setLoading] = useState(true);
  const [wallpaperPath, setWallpaperPath] = useState<string>(
    './wallpapers/default.jpg',
  );

  const getWeather = useCallback(
    async (lat: number, lon: number): Promise<void> => {
      await weather.getWeather(lat, lon);
      await weather.getWeatherForecast(lat, lon);
    },
    [weather],
  );

  const handlePathWallpaper = (condition: Weather.Condition[]): string => {
    const wallpaperName = formatWallpaperName(
      `${condition[0].main}-${condition[0].icon}`,
    );
    const isValid = validationWallpaper(wallpaperName);
    if (!isValid) return './wallpapers/default.jpg';
    return `./wallpapers/${wallpaperName}.jpg`;
  };

  const updateGeolocation = useCallback(async () => {
    try {
      await app.setGeolocation();
      await getWeather(
        app.userLocation.coords.latitude,
        app.userLocation.coords.longitude,
      );
      setWallpaperPath(handlePathWallpaper(weather.weatherData.weather));
      setLoading(false);
      Alert({ message: 'Atualizado com sucesso', type: 'success' });
    } catch (error) {
      Alert({ message: error.message, type: 'error' });
    }
  }, [app, getWeather, weather]);

  useEffect(() => {
    setLoading(true);
    updateGeolocation();
  }, [updateGeolocation]);

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
