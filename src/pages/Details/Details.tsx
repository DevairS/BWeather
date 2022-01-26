import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import ClimateDetails from './ClimateDetails';
import Forecast from './Forecast';
import {
  Container,
  ContainerTitle,
  FontAwesomeIcon,
  Link,
  Nav,
  Navbar,
  TextTitle,
} from './styles';

type Props = {
  weatherData: Weather.Current;
  weatherForecast: Weather.Forecast[];
};
const Details: FC<Props> = ({ weatherData, weatherForecast }) => {
  return (
    <Container>
      <Navbar />
      <ContainerTitle>
        <TextTitle>Detalhes do clima</TextTitle>
      </ContainerTitle>
      <ClimateDetails
        sunrise={weatherData.sys.sunrise}
        sunset={weatherData.sys.sunset}
        feelsLike={weatherData.main.feelsLike}
        humidity={weatherData.main.humidity}
        speedFormat={weatherData.wind.speedFormat}
      />
      <Forecast weatherForecast={weatherForecast} />
      <Nav>
        <Link to="/">
          <FontAwesomeIcon />
          Voltar
        </Link>
      </Nav>
    </Container>
  );
};

export default observer(Details);
