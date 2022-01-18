import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Navbar } from '~/components';
import {
  Container,
  ContainerDetails,
  ContainerDetailsItem,
  ContainerClimateDetails,
  Text,
  ContainerTitle,
  Nav,
  Link,
} from './styles';

type Props = {
  wallpaperPath: string;
  weatherData: Weather.Data;
};
const Details: FC<Props> = ({ wallpaperPath, weatherData }) => {
  return (
    <Container wallpaperPath={wallpaperPath}>
      <Navbar />
      <ContainerTitle>
        <Text>Detalhes do clima</Text>
      </ContainerTitle>
      <ContainerClimateDetails>
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
            <Text>Nascer do Sol</Text>
            <Text>{weatherData.sys.sunriseFormat}</Text>
          </ContainerDetailsItem>
          <ContainerDetailsItem>
            <Text>Pôr do Sol</Text>
            <Text>{weatherData.sys.sunsetFormat}</Text>
          </ContainerDetailsItem>
        </ContainerDetails>
        <ContainerDetails>
          <ContainerDetailsItem>
            <Text>Vel. do Vento</Text>
            <Text>{weatherData.wind.speed}</Text>
          </ContainerDetailsItem>
        </ContainerDetails>
      </ContainerClimateDetails>
      <Nav>
        <Link to="/">Voltar</Link>
      </Nav>
    </Container>
  );
};

export default observer(Details);
