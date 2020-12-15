import { getProviderByName } from './getProviderByName';

const providers = [
  {
    market: 'SE',
    multiFactor: false,
    name: 'se-nordea-ob',
    passwordHelpText:
      'You will be redirected to your bank to complete the authentication.',
    popular: true,
    status: 'ENABLED',
    transactional: true,
    type: 'BANK'
  },
  {
    market: 'SE',
    multiFactor: true,
    name: 'nordea-password',
    passwordHelpText:
      'To connect your bank you need to authenticate with Mobile BankID the first time. After that, the provided code will be used to identify you.',
    popular: true,
    status: 'ENABLED',
    transactional: true,
    type: 'BANK'
  }
];

it('should return single provider instance given name as input', () => {
  const input = 'se-nordea-ob';
  const output = [providers[0]];
  const f = getProviderByName(providers);

  expect(f(input)).toEqual(output);
});

it('should be case insensitive for the input given', () => {
  const input = 'SE-Nordea-Ob';
  const output = [providers[0]];
  const f = getProviderByName(providers);

  expect(f(input)).toEqual(output);
});
