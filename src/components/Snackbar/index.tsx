import React, { useEffect, useState } from 'react';
import { Wrapper, Alert } from './styles';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

type Props = {
  message: string;
  type?: TypeOptions;
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

  return (
    <Wrapper id={id} key={id} show={show} type={type}>
      <Alert>{message}</Alert>
    </Wrapper>
  );
};

export const SnackbarProvider: React.FC = () => <div id="toastContainer" />;

export default Snackbar;
