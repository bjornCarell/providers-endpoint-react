import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { FlexContainer } from './FlexStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <FlexContainer />
    </ThemeProvider>,
    div
  );
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <FlexContainer contentCenter alignCenter />
    </ThemeProvider>,
    div
  );
});
