import { getMarketCode } from './getMarketCode';

it('should return market code from markets data obj when given market name', () => {
  const input = 'Germany';
  const output = 'DE';

  expect(getMarketCode(input)).toBe(output);
});

it('should be case insensitive for the input given', () => {
  const input = 'germany';
  const output = 'DE';

  expect(getMarketCode(input)).toBe(output);
});
