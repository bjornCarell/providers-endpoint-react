import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Pre } from './Pre';
import { theme } from '../../../theme/theme';

const data = {
  accessType: 'OPEN_BANKING',
  authenticationUserType: 'PERSONAL',
  authenticationFlow: 'REDIRECT',
  capabilities: ['CHECKING_ACCOUNTS'],
  credentialsType: 'THIRD_PARTY_APP',
  currency: 'DKK',
  displayName: 'BankNordik',
  fields: [],
  financialInstitutionId: 'bb1f3af4840d4920bab0fe9a39e0e263',
  financialInstitutionName: 'BankNordik',
  images: {
    icon: 'https://cdn.tink.se/provider-images/fo/fo-banknordik-password.png',
    banner: null
  },
  market: 'FO',
  multiFactor: true,
  name: 'fo-banknordik-ob',
  popular: false,
  status: 'ENABLED',
  transactional: true,
  type: 'BANK'
};

const stringJSON = JSON.stringify(data);

it('renders Pre without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Pre JSON={stringJSON} fontSize="1.8" display="block">
        {JSON}
      </Pre>
    </ThemeProvider>,
    div
  );
});

it('renders Pre with set styles', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Pre JSON={stringJSON} fontSize="1.6" display={'block'}>
          {JSON}
        </Pre>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '1.6rem');
  expect(tree).toHaveStyleRule('display', 'block');
});
