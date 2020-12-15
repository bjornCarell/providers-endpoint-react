import { delay } from './delay';

jest.useFakeTimers();

const callback = x => x * 2;
const x = 5;
const time = 200;

beforeEach(() => delay(callback, x, time));

it('should wait 200ms before executing', () => {
  expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('setTimeOut should be called with a callback function', () => {
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), time);
});
