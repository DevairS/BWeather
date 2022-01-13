import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Text } from './styles';

type Props = {
  type: 'button' | 'submit' | 'reset';
  message: string;
  icon: IconDefinition;
  colorIcon?: string;
};
const ButtonIcon: React.FC<Props> = ({ type, message, icon, colorIcon }) => {
  return (
    <Button type={type}>
      <Text>{message}</Text>
      <FontAwesomeIcon icon={icon} color={colorIcon} />
    </Button>
  );
};

export default ButtonIcon;
