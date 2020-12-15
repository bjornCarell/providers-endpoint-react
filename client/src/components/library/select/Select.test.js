import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { Select } from './Select';
import { markets } from '../../../markets/markets';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Select dataType="markets" data={markets} />
    </ThemeProvider>,
    div
  );
});
