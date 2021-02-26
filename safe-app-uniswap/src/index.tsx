import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Loader, Title } from '@gnosis.pm/safe-react-components';
import SafeProvider from '@gnosis.pm/safe-apps-react-sdk';

import GlobalStyle from './GlobalStyle';
import App from './components/Root';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SafeProvider>
        <App />
      </SafeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
