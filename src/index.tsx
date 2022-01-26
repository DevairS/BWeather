import { StrictMode } from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { Firebase } from '~/services';
import { SnackbarProvider } from './components/Snackbar';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './stores';
import { GlobalStyle } from './theme';

const firebase = new Firebase();
firebase.initializeFirebase();
ReactDOM.render(
  <StrictMode>
    <Provider rootStore={store}>
      <GlobalStyle />
      <SnackbarProvider />
      <Routes />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
