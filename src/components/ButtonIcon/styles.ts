import styled from 'styled-components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: ${pxToRem(150)};
  border: none;
  border-radius: ${mediumRadius};
  background-color: #ffffff5c;
  padding: ${pxToRem(4)} ${pxToRem(8)};
  color: #fff;
  font-size: ${pxToRem(20)};
  ${shadow}
`;

export const Text = styled.p``;
