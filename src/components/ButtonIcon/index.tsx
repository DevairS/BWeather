import { FC, MouseEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Text } from './styles';

type Props = {
  type: 'button' | 'submit' | 'reset';
  icon: IconDefinition;
  colorIcon?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const ButtonIcon: FC<Props> = ({
  type,
  icon,
  colorIcon,
  onClick,
  children,
  className,
}) => {
  return (
    <Button className={className} type={type} onClick={onClick}>
      <Text>{children}</Text>
      <FontAwesomeIcon icon={icon} color={colorIcon} />
    </Button>
  );
};

export default ButtonIcon;
