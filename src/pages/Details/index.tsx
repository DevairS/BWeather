import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks';
import Details from './Details';

const DetailsContainer: FC = () => {
  const { weather } = useStores();

  return (
    <Details
      weatherData={weather.weatherData}
      weatherForecast={weather.weatherForecast}
    />
  );
};

export default observer(DetailsContainer);
