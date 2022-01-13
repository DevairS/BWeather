import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks';
import Home from './Home';

const HomeContainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState<string>('');
  const { weather, app } = useStores();

  const getWeather = useCallback(
    async (lat: number, log: number): Promise<void> => {
      await weather.getWeather(lat, log);
    },
    [weather],
  );

  const getInit = useCallback(async () => {
    await app.setGeolocation();
    await getWeather(
      app.userLocation.coords.latitude,
      app.userLocation.coords.longitude,
    );

    const iconImport = await import(
      `~/assets/icons/${weather.weatherData.weather[0].icon}.svg`
    );
    setIcon(iconImport.default);
    setLoading(true);
  }, [app, getWeather]);

  useEffect(() => {
    setLoading(false);
    getInit();
  }, [app, getWeather, getInit]);

  if (!loading) {
    return <h1>carregado...</h1>;
  }

  return <Home weatherData={weather.weatherData} icon={icon} />;
};

export default observer(HomeContainer);
