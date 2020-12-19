import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from './Sidebar';
import { theme } from '../../../theme/theme';
import { markets } from '../../../markets/markets';

const anyFunction = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Sidebar
        filteredProviders={[
          { name: 'se-nordea-ob', displayName: 'Nordea' },
          { name: 'se-seb-ob', displayName: 'SEB' }
        ]}
        market="Sweden"
        markets={markets}
        onChangeMarket={anyFunction}
        onClickProvider={anyFunction}
        onSearch={anyFunction}
        search={''}
        setSearch={anyFunction}
        searchNode={null}
        showAllProviders={anyFunction}
      />
    </ThemeProvider>,
    div
  );
});
