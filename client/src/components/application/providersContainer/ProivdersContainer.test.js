import React from 'react';
import ReactDom from 'react-dom';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { ProvidersContainer } from './ProvidersContainer';
import { theme } from '../../../theme/theme';

it('renders ProvidersContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <ProvidersContainer />
    </ThemeProvider>,
    div
  );
});
