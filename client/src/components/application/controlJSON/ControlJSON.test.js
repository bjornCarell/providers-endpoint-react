import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ControlJSON } from './ControlJSON';
import { theme } from '../../../theme/theme';

const anyFunction = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <ControlJSON
        onChangeFontSize={anyFunction}
        onChangeSpace={anyFunction}
        onKeyDown={anyFunction}
        onSearch={anyFunction}
        search="Nordea"
        searchNode={null}
      />
    </ThemeProvider>,
    div
  );
});
