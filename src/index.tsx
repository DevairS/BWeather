import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './stores';
import { GlobalStyle } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
