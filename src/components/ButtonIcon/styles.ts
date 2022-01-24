import styled from 'styled-components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${pxToRem(150)};
  border: none;
  border-radius: ${mediumRadius};
  background-color: #ffffff5c;
  padding: ${pxToRem(4)} ${pxToRem(8)};
  color: #fff;
  font-size: ${pxToRem(16)};
  ${shadow}

  @media (min-width:768px) {
    font-size: ${pxToRem(20)};
  }
`;

export const Text = styled.p`
  padding-right: ${pxToRem(4)};
`;
