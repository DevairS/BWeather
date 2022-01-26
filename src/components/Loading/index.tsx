import { FC } from 'react';
import { Container, ContainerText, Text, Navbar } from './styles';

type Props = {
  blockGeolocation?: boolean;
};
const Loading: FC<Props> = ({ blockGeolocation }) => {
  return (
    <Container>
      <Navbar />
      <ContainerText>
        <Text>
          {blockGeolocation
            ? 'Por favor, libere a localização do seu navegador para ter acesso ao conteúdo da aplicação'
            : 'Atualizando...'}
        </Text>
      </ContainerText>
    </Container>
  );
};

export default Loading;
