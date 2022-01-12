import React from 'react';
import { IconBuilders } from '~/assets/svg';
import { Container, Image } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Image src={IconBuilders} alt="buildersIcon" />
    </Container>
  );
};

export default Navbar;
