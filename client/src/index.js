import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './global-styles/GlobalStyles';
import { ProvidersPage } from './pages/ProvidersPage';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProvidersPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
