import { FC } from 'react';
import { Container, ContainerText, Text, Navbar } from './styles';

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
