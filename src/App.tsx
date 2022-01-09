import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from './hooks';

const App: React.FC = () => {
  const { weather, app } = useStores();
  const getWeather = useCallback(
    async (lat: number, log: number): Promise<void> => {
      await weather.getWeather(lat, log);
    },
    [weather],
  );

  useEffect(() => {
    app.getGeolocation();
    getWeather(
      app.userLocation.coords.latitude,
      app.userLocation.coords.longitude,
    );
  }, [getWeather, app]);

  return (
    <div>
      <p>clima: {weather.weatherData.weather[0].description}</p>
    </div>
  );
};

export default observer(App);
