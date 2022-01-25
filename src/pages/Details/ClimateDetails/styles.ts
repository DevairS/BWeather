import styled from 'styled-components';
import { shadow, radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const ContainerClimateDetails = styled.div`
  flex-direction: column;
  background-color: #ffffff5c;
  margin: ${pxToRem(24)};
  border-radius: ${mediumRadius};
  ${shadow};

  @media (min-width: 1080px) {
    margin: ${pxToRem(20)} 10%};
  }

  @media(min-width: 1600px){
    margin: ${pxToRem(20)} 20%};
  }
`;

export const ContainerDetails = styled.div`
  justify-content: space-evenly;
  margin: ${pxToRem(16)} ${pxToRem(0)};
`;

export const ContainerDetailsItem = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ImageIcon = styled.img`
  width: ${pxToRem(50)};

  @media (min-width: 1080px) {
    width: ${pxToRem(65)};
  }
`;

export const Text = styled.p``;
