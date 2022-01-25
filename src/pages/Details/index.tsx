import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { formatWallpaperName, validationWallpaper } from '~/utils';
import { useStores } from '../../hooks';
import Details from './Details';

const DetailsContainer: FC = () => {
  const { weather } = useStores();
  const [loading, setLoading] = useState(true);

  const [wallpaperPath, setWallpaperPath] = useState<string>(
    './wallpapers/default.jpg',
  );

  const handlePathWallpaper = (condition: Weather.Condition): string => {
    const wallpaperName = formatWallpaperName(
      `${condition.main}-${condition.icon}`,
    );
    const isValid = validationWallpaper(wallpaperName);
    if (!isValid) return './wallpapers/default.jpg';
    return `./wallpapers/${wallpaperName}.jpg`;
  };

  const setCurrentData = useCallback((): void => {
    setWallpaperPath(handlePathWallpaper(weather.weatherData.weather[0]));
    setLoading(false);
  }, [weather.weatherData]);

  useEffect(() => {
    setLoading(true);
    setCurrentData();
  }, [setCurrentData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details
      wallpaperPath={wallpaperPath}
      weatherData={weather.weatherData}
      weatherForecast={weather.weatherForecast}
    />
  );
};

export default observer(DetailsContainer);
