import { providerStatus } from './providerStatus';

it('should return first char from input', () => {
  const input = 'ENABLED';
  const output = 'E';

  expect(providerStatus(input)).toBe(output);
});

it('should return first char of each word when seperated with underscore', () => {
  const input = 'TEMPORARLY_DISABLED';
  const output = 'TD';

  expect(providerStatus(input)).toBe(output);
});

it('should always return upper case output', () => {
  const input = 'status_Of_provider';
  const output = 'SOP';

  expect(providerStatus(input)).toBe(output);
});
