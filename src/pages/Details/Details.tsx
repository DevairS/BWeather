import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { sunriseIcon, sunsetIcon } from '~/assets/icons';
import { IconsWeather, Navbar } from '~/components';
import { convertDate } from '~/utils';
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
      <ContainerForecast>
        {weatherForecast.map((item) => {
          return (
            <Card>
              <p>{convertDate(item.dt, 'dd/MM')}</p>
              <IconsWeather icon={item.weather[0].icon} />
              <p>{Math.round(item.main.temp)}℃</p>
              <TextCard>{item.weather[0].description}</TextCard>
            </Card>
          );
        })}
      </ContainerForecast>
      <Nav>
        <Link to="/">Voltar</Link>
      </Nav>
    </Container>
  );
};

export default observer(Details);
