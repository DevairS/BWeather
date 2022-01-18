import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  flex-direction: column;
  background-image: url('./wallpapers/Clear-01d.png');
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
