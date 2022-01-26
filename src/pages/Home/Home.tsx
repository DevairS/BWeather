import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import ClimateDetails from './ClimateDetails';
import {
  ButtonIcon,
  Container,
  ContainerButton,
  ContainerClimate,
  ContainerLocation,
  ContainerTemp,
  FontAwesomeIcon,
  FontAwesomeIconDetail,
  Link,
  Nav,
  Navbar,
  Text,
  TextCelsius,
  TextLocation,
  TextTemp,
} from './styles';

type Props = {
  weatherData: Weather.Current;
  updateGeolocation(): void;
};

const Home: FC<Props> = ({ weatherData, updateGeolocation }) => {
  return (
    <Container>
      <Navbar />
      <ContainerLocation>
        <TextLocation>{weatherData.name}</TextLocation>
        <FontAwesomeIcon />
      </ContainerLocation>
      <ContainerTemp>
        <TextTemp>{weatherData.main.temp}</TextTemp>
        <TextCelsius>℃</TextCelsius>
      </ContainerTemp>
      <ContainerClimate>
        <Text>{weatherData.weather[0].description}</Text>
        <ClimateDetails
          tempMin={weatherData.main.tempMin}
          tempMax={weatherData.main.tempMax}
          icon={weatherData.weather[0].icon}
        />
      </ContainerClimate>
      <Nav>
        <Link to="/details">
          Ver detalhes
          <FontAwesomeIconDetail />
        </Link>
      </Nav>
      <ContainerButton>
        <ButtonIcon onClick={updateGeolocation}>Atualizar</ButtonIcon>
      </ContainerButton>
    </Container>
  );
};

export default observer(Home);
