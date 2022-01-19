import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sunriseIcon, sunsetIcon } from '~/assets/icons';
import { IconsWeather, Navbar } from '~/components';
import { formatTimestampToDate } from '~/utils';
import {
  Container,
  ContainerDetails,
  ContainerDetailsItem,
  ContainerClimateDetails,
  Text,
  ContainerTitle,
  Nav,
  Link,
  TextTitle,
  ImageIcon,
  Card,
  ContainerForecast,
  TextCard,
  ContainerTextCard,
  ContainerForecastTitle,
} from './styles';

type Props = {
  wallpaperPath: string;
  weatherData: Weather.Data;
  weatherForecast: Weather.Forecast[];
};
const Details: FC<Props> = ({
  wallpaperPath,
  weatherData,
  weatherForecast,
}) => {
  return (
    <Container wallpaperPath={wallpaperPath}>
      <Navbar />
      <ContainerTitle>
        <TextTitle>Detalhes do clima</TextTitle>
      </ContainerTitle>
      <ContainerClimateDetails>
        <ContainerDetails>
          <ContainerDetailsItem>
            <Text>Nascer do Sol</Text>
            <ImageIcon src={sunriseIcon} />
            <Text>{weatherData.sys.sunriseFormat}</Text>
          </ContainerDetailsItem>
          <ContainerDetailsItem>
            <Text>Pôr do Sol</Text>
            <ImageIcon src={sunsetIcon} />
            <Text>{weatherData.sys.sunsetFormat}</Text>
          </ContainerDetailsItem>
        </ContainerDetails>
        <ContainerDetails>
          <ContainerDetailsItem>
            <Text>Sensação</Text>
            <Text>{weatherData.main.feels_like}℃</Text>
          </ContainerDetailsItem>
          <ContainerDetailsItem>
            <Text>Umidade</Text>
            <Text>{weatherData.main.humidity}%</Text>
          </ContainerDetailsItem>
        </ContainerDetails>
        <ContainerDetails>
          <ContainerDetailsItem>
            <Text>Vel. do Vento</Text>
            <Text>{weatherData.wind.speedFormat}km/h</Text>
          </ContainerDetailsItem>
        </ContainerDetails>
      </ContainerClimateDetails>
      <ContainerForecastTitle>
        <TextTitle>Previsão para a semana</TextTitle>
      </ContainerForecastTitle>
      <ContainerForecast>
        {weatherForecast.map((item) => {
          return (
            <Card>
              <p>{formatTimestampToDate(item.dt, 'dd/MM')}</p>
              <IconsWeather icon={item.weather[0].icon} sizeIcon={40} />
              <p>{Math.round(item.temp.day)}℃</p>
              <ContainerTextCard>
                <TextCard>{item.weather[0].description}</TextCard>
              </ContainerTextCard>
            </Card>
          );
        })}
      </ContainerForecast>
      <Nav>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" color="#FFCC00" />
          Voltar
        </Link>
      </Nav>
    </Container>
  );
};

export default observer(Details);
