import { caseInsensitive } from './caseInsensitive';

it('should make string input case insensitive', () => {
  const input = 'Denmark';
  const output = 'denmark';

  expect(caseInsensitive(input)).toBe(output);
});

it('should convert Number input to string', () => {
  const input = 1987;
  const output = '1987';

  expect(caseInsensitive(input)).toBe(output);
});

it('should convert undefined input to string', () => {
  const input = undefined;
  const output = 'undefined';

  expect(caseInsensitive(input)).toBe(output);
});
