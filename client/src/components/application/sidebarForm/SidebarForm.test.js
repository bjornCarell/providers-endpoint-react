import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { markets } from '../../../markets/markets';
import { SidebarForm } from './SidebarForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const anyFunction = jest.fn();
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <SidebarForm
        makeResetButtonActive={false}
        markets={markets}
        onChangeMarket={anyFunction}
        reset={anyFunction}
        notAllProvidersShown={false}
      />
    </ThemeProvider>,
    div
  );
});
