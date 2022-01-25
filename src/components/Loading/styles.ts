import styled from 'styled-components';
import { Navbar as _Navbar } from '~/components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  background-image: url('./wallpapers/Clear-01d.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Navbar = styled(_Navbar)``;

export const ContainerText = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${pxToRem(18)};
`;
