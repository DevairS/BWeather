import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { validationWallpaper } from '~/utils/validation/validationWallpaper';
import { useStores } from '../../hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [wallpaperPath, setWallpaperPath] = useState<string>();
  const { weather, app } = useStores();

  const getWeather = useCallback(
    async (lat: number, log: number): Promise<void> => {
      await weather.getWeather(lat, log);
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
    await app.setGeolocation();
    await getWeather(
      app.userLocation.coords.latitude,
      app.userLocation.coords.longitude,
    );
    setWallpaperPath(handlePathWallpaper(weather.weatherData.weather[0]));
    setLoading(true);
  }, [app, getWeather]);

  useEffect(() => {
    setLoading(false);
    updateGeolocation();
  }, [app, updateGeolocation]);

  if (!loading) {
    return <h1>carregado...</h1>;
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
