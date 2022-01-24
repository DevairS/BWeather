import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  @media (max-height: 730px) {
    height: 100%;
    padding-bottom: ${pxToRem(20)};
  }
`;

export const ContainerTitle = styled.div`
  background-color: #ffffff5c;
  margin: ${pxToRem(24)} ${pxToRem(24)} 0 ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border-radius: ${largeRadius};
  justify-content: center;
  ${shadow};

  @media (min-width: 1200px) {
    margin: ${pxToRem(20)} 10%};
  }

  @media(min-width: 1601px){
    margin: ${pxToRem(20)} 20%};
  }

`;

export const ContainerClimateDetails = styled.div`
  flex-direction: column;
  background-color: #ffffff5c;
  margin: ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border-radius: ${mediumRadius};
  ${shadow};

  @media (min-width: 1200px) {
    margin: ${pxToRem(20)} 10%};
  }

  @media(min-width: 1601px){
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

export const TextTitle = styled.p`
  text-transform: uppercase;
`;

export const Text = styled.p``;

export const ContainerNav = styled.div``;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: ${pxToRem(48)};
  @media (min-width: 1024px) {
    justify-content: center;
    margin: 0;
  }
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

  @media (min-width: 1200px) {
    margin: ${pxToRem(20)} 10%};
  }

  @media (min-width: 1260px) {
    overflow: hidden;
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
  @media (min-width: 1200px) {
    max-width: ${pxToRem(110)};
    min-width: ${pxToRem(110)};
  }

  @media (min-width: 1366px) {
    max-width: ${pxToRem(120)};
    min-width: ${pxToRem(120)};
  }

  @media (min-width: 1601px) {
    max-width: ${pxToRem(130)};
    min-width: ${pxToRem(130)};
  }
`;

export const ContainerTextCard = styled.div`
  height: 100%;
  align-items: center;
`;

export const CardTextItem = styled.p`
  @media (min-width: 1200px) {
    font-size: ${pxToRem(14)};
  }
`;

export const TextCard = styled.div`
  font-size: ${pxToRem(12)};
  color: #fff;
  text-align: center;
`;

export const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  margin-right: ${pxToRem(5)};
`;

export const ContainerIcon = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 75%;
  }
`;
