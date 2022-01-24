import styled from 'styled-components';

interface Snackbar {
  show: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

export const Wrapper = styled.div<Snackbar>`
  display: flex;
  align-items: center;
  width: 250px;
  margin-top: 16px;
  margin-left: 16px;
  position: absolute;
  color: #fff;
  background-color: ${(props) =>
    props.type === 'error'
      ? '#D32F2F'
      : props.type === 'success'
      ? '#2E7D32'
      : props.type === 'info'
      ? '#0288D1'
      : '#ED6C02'};
  padding: 6px 6px;
  border-radius: 4px;
  animation-name: ${(props) => (props.show ? 'slideInLeft' : 'slideOutLeft')};
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      visibility: hidden;
      transform: translateX(-100%);
    }
  }

  @media (max-width: 600px) {
    width: 140px;
  }
`;

export const Alert = styled.p`
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 0.5rem;
    padding: 2px 8px;
  }
`;
