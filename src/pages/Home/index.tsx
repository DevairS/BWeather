import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { useStores } from '~/hooks';
import { Alert, formatWallpaperName, validationWallpaper } from '~/utils';
import Home from './Home';

const HomeContainer: FC = () => {
  const { weather, app } = useStores();
  const [loading, setLoading] = useState(true);
  const [blockGeolocation, setBlockGeolocation] = useState(false);
  const [wallpaperPath, setWallpaperPath] = useState<string>(
    './wallpapers/default.jpg',
  );

  const getWeather = useCallback(
    async (lat: number, lon: number): Promise<void> => {
      await Promise.all([
        weather.getWeather(lat, lon),
        weather.getWeatherForecast(lat, lon),
      ]);
    },
    [weather],
  );

  const handlePathWallpaper = (condition: Weather.Condition): string => {
    const urlWallpaper = process.env.REACT_APP_S3_URL_WALLPAPER;
    const wallpaperName = formatWallpaperName(
      `${condition.main}-${condition.icon}`,
    );
    const isValid = validationWallpaper(wallpaperName);
    if (!isValid) return `${urlWallpaper}default.jpg`;
    return `${urlWallpaper}${wallpaperName}.jpg`;
  };

  const updateGeolocation = useCallback(async () => {
    try {
      await app.setGeolocation();
      await getWeather(
        app.userLocation.coords.latitude,
        app.userLocation.coords.longitude,
      );
      setWallpaperPath(handlePathWallpaper(weather.weatherData.weather[0]));
      setLoading(false);
      Alert({ message: 'Atualizado com sucesso', type: 'success' });
    } catch (error) {
      setBlockGeolocation(true);
      Alert({ message: error.message, type: 'error' });
    }
  }, [app, getWeather, weather]);

  useEffect(() => {
    setLoading(true);
    updateGeolocation();
  }, [updateGeolocation]);

  if (loading) {
    return <Loading blockGeolocation={blockGeolocation} />;
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
