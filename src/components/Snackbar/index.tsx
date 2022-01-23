import React, { useEffect, useState } from 'react';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faQuestionCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper, Alert } from './styles';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

type Props = {
  message: string;
  type: TypeOptions;
  id: string;
};

const Snackbar: React.FC<Props> = ({ message, type, id }) => {
  const [show, setShow] = useState(true);
  const toastContainerElement: HTMLElement | null =
    document.getElementById('toastContainer');

  const handleClose = (): void => {
    setShow(false);
  };

  useEffect(() => {
    setShow(true);
    setTimeout(handleClose, 4000);

    if (toastContainerElement) {
      toastContainerElement.style.display = 'block';
    }
  }, [toastContainerElement]);

  const icon =
    type === 'info'
      ? faQuestionCircle
      : type === 'success'
      ? faCheckCircle
      : type === 'error'
      ? faExclamationCircle
      : faExclamationTriangle;
  return (
    <Wrapper id={id} key={id} show={show} type={type}>
      <FontAwesomeIcon icon={icon} color="#fff" />
      <Alert>{message}</Alert>
    </Wrapper>
  );
};

export const SnackbarProvider: React.FC = () => <div id="toastContainer" />;

export default Snackbar;
