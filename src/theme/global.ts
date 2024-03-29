import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  #root {
    width: 100vw;
    min-height: 100vh;
  }
  input, button {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
  }
  p {
    color: #fff;
  }
`;
