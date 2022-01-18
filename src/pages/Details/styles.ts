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

export const Nav = styled.nav``;

export const Link = styled(_Link)`
  color: #fff;
  text-decoration: none;
`;

export const ImageIcon = styled.img`
  width: ${pxToRem(50)};
`;

export const ContainerForecast = styled.div``;

export const Card = styled.div`
  flex-direction: column;
  background-color: #ffffff5c;
  align-items: center;
  margin: ${pxToRem(16)};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
`;

export const TextCard = styled.div`
  font-size: ${pxToRem(12)};
`;
