import React from 'react';
import { convertDate } from '~/utils';
import { Container, Text } from './styles';

type Props = {
  weatherData: Weather.Data;
};

const Home: React.FC<Props> = ({ weatherData }) => {
  return (
    <Container>
      <Text>Icon: {weatherData.weather[0].icon}</Text>
      <Text>Clima: {weatherData.weather[0].description}</Text>
      <Text>Cidade: {weatherData.name}</Text>
      <br />
      <Text>Base: {weatherData.base}</Text>
      <br />
      <Text>Temperatura: {weatherData.main.temp}</Text>
      <Text>Min: {weatherData.main.temp_min}</Text>
      <Text>Max: {weatherData.main.temp_max}</Text>
      <Text>Humidade: {weatherData.main.humidity}</Text>
      <Text>Sensação: {weatherData.main.feels_like}</Text>
      <Text>Pressão: {weatherData.main.pressure}</Text>
      <br />
      <Text>Visibilidade: {weatherData.visibility}</Text>
      <br />
      <Text>Vento velocidade: {weatherData.wind.speed}</Text>
      <Text>Vento grau?: {weatherData.wind.deg}</Text>
      <br />
      <Text>Nuvens: {weatherData.clouds.all}</Text>
      <Text>Dt: {convertDate(weatherData.dt)}</Text>
      <Text>País: {weatherData.sys.country}</Text>
      <Text>Message: {weatherData.sys.message}</Text>
      <Text>Nascer do Sol: {convertDate(weatherData.sys.sunrise)}</Text>
      <Text>Por do Sol: {convertDate(weatherData.sys.sunset)}</Text>

      <Text>Timezone: {weatherData.timezone}</Text>
    </Container>
  );
};

export default Home;
