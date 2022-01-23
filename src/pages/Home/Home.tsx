import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
  faSync,
  faMapMarkerAlt,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon, Navbar } from '~/components';
import {
  Container,
  ContainerButton,
  ContainerClimate,
  ContainerClimateDetails,
  ContainerLocation,
  ContainerMaxMinTemp,
  ContainerTemp,
  Nav,
  Text,
  TextCelsius,
  TextLocation,
  TextTemp,
  Link,
  FontAwesomeIcon,
  FontAwesomeIconDetail,
  IconsWeather,
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
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#FFCC00" />
      </ContainerLocation>
      <ContainerTemp>
        <TextTemp>{weatherData.main.temp}</TextTemp>
        <TextCelsius>℃</TextCelsius>
      </ContainerTemp>
      <ContainerClimate>
        <Text>{weatherData.weather[0].description}</Text>
        <ContainerClimateDetails>
          <ContainerMaxMinTemp>
            <Text>MIN.</Text>
            <Text>{weatherData.main.temp_min}℃</Text>
          </ContainerMaxMinTemp>
          <ContainerMaxMinTemp>
            <IconsWeather icon={weatherData.weather[0].icon} />
          </ContainerMaxMinTemp>
          <ContainerMaxMinTemp>
            <Text>MÁX.</Text>
            <Text>{weatherData.main.temp_max}℃</Text>
          </ContainerMaxMinTemp>
        </ContainerClimateDetails>
      </ContainerClimate>
      <Nav>
        <Link to="/details">
          Ver detalhes
          <FontAwesomeIconDetail
            icon={faAngleDoubleRight}
            size="lg"
            color="#FFCC00"
          />
        </Link>
      </Nav>
      <ContainerButton>
        <ButtonIcon
          type="button"
          icon={faSync}
          message="Atualizar"
          colorIcon="#FFCC00"
          onClick={updateGeolocation}
        />
      </ContainerButton>
    </Container>
  );
};

export default observer(Home);
