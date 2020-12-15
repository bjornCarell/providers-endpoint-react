import { compose } from './compose';

it('should compose two functions and return expected value', () => {
  const f = x => x * 3;
  const g = x => x + 2;
  const x = 5;
  const composing = compose(f, g);
  const output = 21;

  expect(composing(x)).toBe(output);
});
