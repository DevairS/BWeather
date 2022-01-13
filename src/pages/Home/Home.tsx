import React from 'react';
import { faSync, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon, IconsWeather, Navbar } from '~/components';
import {
  Container,
  ContainerButton,
  ContainerClimate,
  ContainerClimateDetails,
  ContainerLocation,
  ContainerMaxMinTemp,
  ContainerTemp,
  TextCelsius,
  TextLocation,
  TextTemp,
} from './styles';

type Props = {
  weatherData: Weather.Data;
};

const Home: React.FC<Props> = ({ weatherData }) => {
  return (
    <Container>
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
        <p>{weatherData.weather[0].description}</p>
        <ContainerClimateDetails>
          <ContainerMaxMinTemp>
            <p>MIN.</p>
            <p>{weatherData.main.temp_min}℃</p>
          </ContainerMaxMinTemp>
          <ContainerMaxMinTemp>
            <IconsWeather icon={weatherData.weather[0].icon} />
          </ContainerMaxMinTemp>
          <ContainerMaxMinTemp>
            <p>MÁX.</p>
            <p>{weatherData.main.temp_max}℃</p>
          </ContainerMaxMinTemp>
        </ContainerClimateDetails>
      </ContainerClimate>
      <ContainerButton>
        <ButtonIcon
          type="button"
          icon={faSync}
          message="Atualizar"
          colorIcon="#FFCC00"
        />
      </ContainerButton>
    </Container>
  );
};

export default Home;
