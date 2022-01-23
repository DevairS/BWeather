import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconsWeather as _IconsWeather } from '~/components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

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

  @media (max-height: 600px) {
    height: 100%;
  }
`;

export const ContainerLocation = styled.div`
  justify-content: center;
  align-items: center;
  margin: ${pxToRem(20)} ${pxToRem(80)};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
  background-color: #ffffff5c;
  letter-spacing: ${pxToRem(3)};
  ${shadow};

  @media (max-width: 340px) {
    margin: ${pxToRem(20)} 5%};
  }
  @media (min-width: 1024px) {
    margin: ${pxToRem(20)} 10%;
  }
`;

export const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  position: absolute;
  margin-left: ${pxToRem(150)};
`;

export const TextLocation = styled.p`
  text-transform: uppercase;
  font-size: 1.8rem;
`;

export const ContainerTemp = styled.div`
  justify-content: center;
  align-items: center;
  margin: ${pxToRem(40)} 0;
  width: 100%;

  @media (max-width: 340px) {
    margin: ${pxToRem(5)} 0};
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const TextTemp = styled.p`
  font-size: ${pxToRem(144)};

  @media (min-width: 1024px) {
    font-size: ${pxToRem(180)};
  }
`;

export const TextCelsius = styled.p`
  position: absolute;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(68)};
  text-transform: uppercase;
  margin-left: ${pxToRem(190)};
  @media (min-width: 1024px) {
    margin-left: ${pxToRem(260)};
    font-size: ${pxToRem(64)};
  }
`;

export const ContainerClimate = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerClimateDetails = styled.div``;

export const ContainerMaxMinTemp = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${pxToRem(10)} ${pxToRem(0)};
  width: ${pxToRem(100)};

  @media (max-width: 340px) {
    width: ${pxToRem(80)};
  }

  @media (min-width: 1024px) {
    width: ${pxToRem(200)};
  }
`;

export const ContainerButton = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-height: 600px) {
    padding: ${pxToRem(20)} 0;
  }
`;

export const FontAwesomeIconDetail = styled(_FontAwesomeIcon)`
  margin-left: ${pxToRem(5)};
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: ${pxToRem(16)};
  @media (min-width: 1024px) {
    font-size: ${pxToRem(24)};
  }
`;

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

export const IconsWeather = styled(_IconsWeather)``;
