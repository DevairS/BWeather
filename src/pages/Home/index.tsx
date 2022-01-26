import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '~/components';
import { useStores } from '~/hooks';
import { Alert } from '~/utils';
import Home from './Home';

const HomeContainer: FC = () => {
  const { weather, app } = useStores();
  const [loading, setLoading] = useState(true);

  const getWeather = useCallback(
    async (lat: number, lon: number): Promise<void> => {
      await Promise.all([
        weather.getWeather(lat, lon),
        weather.getWeatherForecast(lat, lon),
      ]);
    },
    [weather],
  );

  const updateGeolocation = useCallback(async () => {
    try {
      setLoading(true);
      await app.setGeolocation();
      await getWeather(
        app.userLocation.coords.latitude,
        app.userLocation.coords.longitude,
      );
      app.setWallpaperPath(weather.weatherData.weather[0]);
      Alert({ message: 'Atualizado com sucesso', type: 'success' });
    } catch (error) {
      Alert({ message: error.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  }, [app, getWeather, weather]);

  useEffect(() => {
    updateGeolocation();
  }, [updateGeolocation, weather]);

  return loading ? (
    <Loading />
  ) : (
    <Home
      weatherData={weather.weatherData}
      updateGeolocation={updateGeolocation}
    />
  );
};

export default observer(HomeContainer);
