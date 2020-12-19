import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ContainerJSON } from './ContainerJSON';
import { theme } from '../../../theme/theme';

const anyFunction = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <ContainerJSON
        market="Sweden"
        onSearch={anyFunction}
        provider={[]}
        providers={[
          {
            provider1: 'se-nordea-ob',
            displayName: 'Nordea'
          },
          {
            provider2: 'se-seb-ob',
            displayName: 'SEB'
          }
        ]}
        search=""
        searchNode={null}
        setProvider={anyFunction}
        setFilteredProviders={anyFunction}
      />
    </ThemeProvider>,
    div
  );
});
