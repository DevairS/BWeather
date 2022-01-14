import React, { FC, MouseEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Text } from './styles';

type Props = {
  type: 'button' | 'submit' | 'reset';
  message: string;
  icon: IconDefinition;
  colorIcon?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ButtonIcon: FC<Props> = ({ type, message, icon, colorIcon, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      <Text>{message}</Text>
      <FontAwesomeIcon icon={icon} color={colorIcon} />
    </Button>
  );
};

export default ButtonIcon;
