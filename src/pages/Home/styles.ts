import styled from 'styled-components';
import { Fundo } from '~/assets/images';

export const Container = styled.div`
  background-image: url(${Fundo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ContainerLocation = styled.div`
  justify-content: center;
  margin: 40px 80px;
  padding: 8px;
  border-radius: 12px;
  background-color: #b4daf3;
  letter-spacing: 3px;
`;

export const TextLocation = styled.p`
  text-transform: uppercase;
  font-size: 1.8rem;
`;

export const ContainerTemp = styled.div`
  justify-content: center;
  margin: 40px 0;
`;

export const TextTemp = styled.p`
  font-size: 6rem;
`;

export const ContainerClimate = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerClimateDetails = styled.div``;

export const ContainerMaxMinTemp = styled.div`
  flex-direction: column;
  margin: 10px 20px;
`;
