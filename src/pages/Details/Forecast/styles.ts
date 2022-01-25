import styled from 'styled-components';
import { IconsWeather as _IconsWeather } from '~/components';
import { shadow, radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const ContainerForecastTitle = styled.div`
  justify-content: center;
`;

export const TextTitle = styled.p`
  text-transform: uppercase;
`;

export const ContainerForecast = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  justify-content: flex-start;

  @media (min-width: 1080px) {
    margin: ${pxToRem(20)} 10%;
    overflow-x: auto;
  }

  @media (min-width: 1366px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  max-width: ${pxToRem(80)};
  min-width: ${pxToRem(80)};
  height: ${pxToRem(150)};
  flex-direction: column;
  background-color: #ffffff5c;
  align-items: center;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
  ${shadow};

  @media (min-width: 1080px) {
    max-width: ${pxToRem(120)};
    min-width: ${pxToRem(120)};
  }

  @media (min-width: 1600px) {
    max-width: ${pxToRem(130)};
    min-width: ${pxToRem(130)};
  }
`;

export const ContainerTextCard = styled.div`
  height: 100%;
  align-items: center;
`;

export const CardTextItem = styled.p`
  @media (min-width: 1080px) {
    font-size: ${pxToRem(14)};
  }
`;

export const TextCard = styled.div`
  font-size: ${pxToRem(12)};
  color: #fff;
  text-align: center;
`;

export const ContainerIcon = styled.div`
  width: 100%;
  @media (min-width: 1080px) {
    width: 75%;
  }
`;

export const IconsWeather = styled(_IconsWeather)``;
