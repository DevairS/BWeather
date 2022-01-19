import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { validationWallpaper } from '~/utils/validation/validationWallpaper';
import { useStores } from '../../hooks';
import Details from './Details';

// import { Container } from './styles';

const DetailsContainer: FC = () => {
  const { weather } = useStores();
  const [loading, setLoading] = useState(true);

  const [wallpaperPath, setWallpaperPath] = useState<string>(
    './wallpapers/default.png',
  );

  const handlePathWallpaper = (condition: Weather.Condition): string => {
    const wallpaperName = `${condition.main}-${condition.icon}`;
    const isValid = validationWallpaper(wallpaperName);
    if (!isValid) return './wallpapers/default.png';
    return `./wallpapers/${wallpaperName}.png`;
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
