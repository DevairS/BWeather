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
  weatherData: Weather.Data;
  updateGeolocation(): void;
  wallpaperPath: string;
};

const Home: FC<Props> = ({ weatherData, updateGeolocation, wallpaperPath }) => {
  return (
    <Container wallpaperPath={wallpaperPath}>
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
          tempMin={weatherData.main.temp_min}
          tempMax={weatherData.main.temp_max}
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
