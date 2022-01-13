import styled from 'styled-components';
import { Fundo } from '~/assets/images';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

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
  justify-content: space-evenly;
  align-items: center;
  margin: ${pxToRem(40)} ${pxToRem(80)};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
  background-color: #ffffff5c;
  letter-spacing: ${pxToRem(3)};
  ${shadow};
`;

export const TextLocation = styled.p`
  text-transform: uppercase;
  font-size: 1.8rem;
`;

export const ContainerTemp = styled.div`
  justify-content: center;
  align-items: center;
  margin: ${pxToRem(40)} 0;
`;

export const TextTemp = styled.p`
  font-size: ${pxToRem(144)};
`;

export const TextCelsius = styled.p`
  position: absolute;
  right: 80px;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(74)};
`;

export const ContainerClimate = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerClimateDetails = styled.div``;

export const ContainerMaxMinTemp = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${pxToRem(10)} ${pxToRem(20)};
`;

export const ContainerButton = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
