import styled from 'styled-components';
import { Navbar as _Navbar } from '~/components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const Navbar = styled(_Navbar)``;

export const ContainerText = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0 ${pxToRem(40)};
  text-align: center;
  font-size: ${pxToRem(18)};
`;
