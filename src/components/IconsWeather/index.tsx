import React, { FC, useState } from 'react';
import { validationIcon } from '~/utils';
import { Container, Image } from './styles';

type Props = {
  icon?: Icon.Name;
};

const IconsWeather: FC<Props> = ({ icon }) => {
  const [iconValid, setIconValid] = useState(icon);
  const isValid = validationIcon(icon);
  if (!isValid) {
    setIconValid('01d');
  }

  return (
    <Container>
      <Image src={`/icons/${iconValid}.svg`} />
    </Container>
  );
};

export default IconsWeather;
