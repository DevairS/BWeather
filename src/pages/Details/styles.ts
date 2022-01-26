import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as _Navbar } from '~/components';
import { radius, shadow } from '~/theme';
import { pxToRem } from '~/utils';

const { largeRadius } = radius;

export const Navbar = styled(_Navbar)``;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  background-color: #ffffff5c;
  margin: ${pxToRem(24)} ${pxToRem(24)} 0 ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border-radius: ${largeRadius};
  justify-content: center;
  ${shadow};

  @media (min-width: 1080px) {
    margin: ${pxToRem(20)} 10%};
  }

  @media(min-width: 1600px){
    margin: ${pxToRem(20)} 20%};
  }

`;

export const TextTitle = styled.p`
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: ${pxToRem(10)};
`;

export const Link = styled(_Link)`
  color: #fff;
  text-decoration: none;
`;

export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs({
  icon: faAngleDoubleLeft,
  size: 'lg',
  color: '#FFCC00',
})`
  margin-right: ${pxToRem(5)};
`;
