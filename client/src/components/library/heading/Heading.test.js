import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { Heading } from './Heading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Heading />
    </ThemeProvider>,
    div
  );
});
