import styled from 'styled-components';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faQuestionCircle,
  faCheckCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Snackbar {
  show?: boolean;
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
  background-color: ${({ type }) => {
    switch (type) {
      case 'info':
        return '#0288D1';
      case 'success':
        return '#2E7D32';
      case 'error':
        return '#D32F2F';
      case 'warning':
      default:
        return '#ED6C02';
    }
  }};
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

export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs(({ type }) => {
  const icon = (): IconDefinition => {
    switch (type) {
      case 'info':
        return faQuestionCircle;
      case 'success':
        return faCheckCircle;
      case 'error':
        return faExclamationCircle;
      case 'warning':
      default:
        return faExclamationTriangle;
    }
  };
  return {
    icon: icon(),
  };
})<Snackbar>``;
