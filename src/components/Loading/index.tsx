import { FC } from 'react';
import { Navbar } from '..';
import { Container, ContainerText, Text } from './styles';

const Loading: FC = () => {
  return (
    <Container>
      <Navbar />
      <ContainerText>
        <Text>Atualizando...</Text>
      </ContainerText>
    </Container>
  );
};

export default Loading;
