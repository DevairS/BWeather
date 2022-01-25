import { FC } from 'react';
import { formatTimestampToDate } from '~/utils';
import {
  Card,
  CardTextItem,
  ContainerForecast,
  ContainerForecastTitle,
  ContainerIcon,
  ContainerTextCard,
  IconsWeather,
  TextCard,
  TextTitle,
} from './styles';

type Props = {
  weatherForecast: Weather.Forecast[];
};

const Forecast: FC<Props> = ({ weatherForecast }) => {
  return (
    <>
      <ContainerForecastTitle>
        <TextTitle>Previsão para a semana</TextTitle>
      </ContainerForecastTitle>
      <ContainerForecast>
        {weatherForecast.map((item) => {
          return (
            <Card>
              <CardTextItem>
                {formatTimestampToDate(item.dt, 'dd/MM')}
              </CardTextItem>
              <ContainerIcon>
                <IconsWeather icon={item.weather[0].icon} />
              </ContainerIcon>
              <CardTextItem>{Math.round(item.temp.day)}℃</CardTextItem>
              <ContainerTextCard>
                <TextCard>{item.weather[0].description}</TextCard>
              </ContainerTextCard>
            </Card>
          );
        })}
      </ContainerForecast>
    </>
  );
};

export default Forecast;
