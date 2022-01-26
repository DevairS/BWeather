import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Path } from '~/routes';
import { useStores } from '../../hooks';
import Details from './Details';

const DetailsContainer: FC = () => {
  const { weather } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (!weather.weatherData) navigate(Path.HOME);
  }, [weather, navigate]);

  return (
    <Details
      weatherData={weather.weatherData}
      weatherForecast={weather.weatherForecast}
    />
  );
};

export default observer(DetailsContainer);
