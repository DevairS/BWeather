import React, { FC } from 'react';
import { IconBuilders } from '~/assets/svg';
import { Container, Image } from './styles';

const Navbar: FC = () => {
  return (
    <Container>
      <Image src={IconBuilders} alt="buildersIcon" />
    </Container>
  );
};

export default Navbar;
