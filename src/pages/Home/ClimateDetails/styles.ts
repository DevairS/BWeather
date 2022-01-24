import styled from 'styled-components';
import { IconsWeather as _IconsWeather } from '~/components';
import { pxToRem } from '~/utils';

export const ContainerClimateDetails = styled.div``;

export const ContainerMaxMinTemp = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${pxToRem(8)} ${pxToRem(0)};
  width: ${pxToRem(80)};

  @media (min-width: 1080px) {
    width: ${pxToRem(184)};
  }
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: ${pxToRem(14)};
  @media (min-width: 768px) {
    font-size: ${pxToRem(24)};
  }
`;

export const IconsWeather = styled(_IconsWeather)``;
