import styled from 'styled-components';

interface Snackbar {
  show: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

export const Wrapper = styled.div<Snackbar>`
  width: 250px;
  margin-top: 16px;
  margin-left: 16px;
  position: absolute;
  color: #fff;
  background-color: #f44336;
  display: flex;
  padding: 6px 6px;
  border-radius: 4px;
  ${(props) =>
    props.show
      ? {
          animationName: 'slideInLeft',
        }
      : {
          animationName: 'slideOutLeft',
        }}

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

  @media (max-width: 500px) {
    width: 190px;
  }
`;

export const Alert = styled.p`
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 400;
`;
