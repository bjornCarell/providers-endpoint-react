import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './global-styles/GlobalStyles';
import { Providers } from './pages/Providers';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Providers />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
