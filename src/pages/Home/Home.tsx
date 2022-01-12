import React from 'react';
import { Navbar } from '~/components';
import {
  Container,
  ContainerClimate,
  ContainerClimateDetails,
  ContainerLocation,
  ContainerMaxMinTemp,
  ContainerTemp,
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
      </ContainerLocation>
      <ContainerTemp>
        <TextTemp>{weatherData.main.temp}</TextTemp>
      </ContainerTemp>
      <ContainerClimate>
        <p>{weatherData.weather[0].description}</p>
        <ContainerClimateDetails>
          <ContainerMaxMinTemp>
            <p>MIN.</p>
            <p>{weatherData.main.temp_min}</p>
          </ContainerMaxMinTemp>
          <ContainerMaxMinTemp>
            <p>MÁX.</p>
            <p>{weatherData.main.temp_max}</p>
          </ContainerMaxMinTemp>
        </ContainerClimateDetails>
      </ContainerClimate>
    </Container>
  );
};

export default Home;
