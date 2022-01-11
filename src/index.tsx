import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './stores';
import { GlobalStyle } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={store}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
