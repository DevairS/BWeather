import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  flex-direction: column;
  background-image: url('./wallpapers/Clear-01d.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const ContainerText = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${pxToRem(18)};
`;
