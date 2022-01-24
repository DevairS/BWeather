import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  faSync,
  faMapMarkerAlt,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as _Navbar, ButtonIcon as _ButtonIcon } from '~/components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

interface Wallpaper {
  wallpaperPath: string;
}

export const Navbar = styled(_Navbar)``;

export const Container = styled.div<Wallpaper>`
  width: 100%;
  background-image: ${(props) => `url(${props.wallpaperPath})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
`;

export const ContainerLocation = styled.div`
  justify-content: center;
  align-items: center;
  margin: ${pxToRem(20)} 5%};
  padding: ${pxToRem(8)};
  border-radius: ${mediumRadius};
  background-color: #ffffff5c;
  letter-spacing: ${pxToRem(3)};
  ${shadow};

  @media (min-width: 768px) {
    margin: ${pxToRem(20)} 10%;
  }

  @media (min-width: 1080px) {
    margin: ${pxToRem(20)} 20%;
  }
`;

export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs({
  icon: faMapMarkerAlt,
  size: 'lg',
  color: '#FFCC00',
})`
  position: absolute;
  margin-left: ${pxToRem(150)};
`;

export const TextLocation = styled.p`
  text-transform: uppercase;
  font-size: ${pxToRem(24)};
`;

export const ContainerTemp = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${pxToRem(5)} 0};

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const TextTemp = styled.p`
  font-size: ${pxToRem(100)};

  @media (min-width: 768px) {
    font-size: ${pxToRem(180)};
  }
`;

export const TextCelsius = styled.p`
  position: absolute;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(48)};
  text-transform: uppercase;
  margin-left: ${pxToRem(160)};

  @media (min-width: 768px) {
    margin-left: ${pxToRem(250)};
    margin-bottom: ${pxToRem(78)};
    font-size: ${pxToRem(48)};
  }
  @media (min-width: 1080px) {
    margin-left: ${pxToRem(280)};
    font-size: ${pxToRem(64)};
  }
`;

export const ContainerClimate = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FontAwesomeIconDetail = styled(_FontAwesomeIcon).attrs({
  size: 'lg',
  color: '#FFCC00',
  icon: faAngleDoubleRight,
})`
  margin-left: ${pxToRem(5)};
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: ${pxToRem(14)};
  @media (min-width: 768px) {
    font-size: ${pxToRem(24)};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Link = styled(_Link)`
  color: #fff;
  text-decoration: none;
`;

export const ButtonIcon = styled(_ButtonIcon).attrs({
  type: 'button',
  icon: faSync,
  colorIcon: '#FFCC00',
})`
  margin: ${pxToRem(8)} 0;
`;
