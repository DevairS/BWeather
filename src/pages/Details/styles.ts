import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius, largeRadius } = radius;

interface Wallpaper {
  wallpaperPath: string;
}

export const Container = styled.div<Wallpaper>`
  background-image: ${(props) => `url(${props.wallpaperPath})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ContainerTitle = styled.div`
  background-color: #ffffff5c;
  margin: ${pxToRem(24)} ${pxToRem(24)} 0 ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border-radius: ${largeRadius};
  justify-content: center;
  ${shadow};
`;

export const ContainerClimateDetails = styled.div`
  flex-direction: column;
  background-color: #ffffff5c;
  margin: ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border-radius: ${mediumRadius};
  ${shadow};
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

export const TextTitle = styled.p`
  text-transform: uppercase;
`;

export const Text = styled.p``;

export const ContainerNav = styled.div``;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Link = styled(_Link)`
  color: #fff;
  text-decoration: none;
`;

export const ImageIcon = styled.img`
  width: ${pxToRem(50)};
`;

export const ContainerForecastTitle = styled.div`
  justify-content: center;
`;
export const ContainerForecast = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  justify-content: center;
  min-height: ${pxToRem(160)};
`;

export const Card = styled.div`
  max-width: 80px;
  min-width: 80px;
  height: 140px;
  flex-direction: column;
  background-color: #ffffff5c;
  align-items: center;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
  ${shadow};
`;

export const ContainerTextCard = styled.div`
  height: 100%;
  align-items: center;
`;

export const TextCard = styled.div`
  font-size: ${pxToRem(12)};
  color: #fff;
  text-align: center;
`;
