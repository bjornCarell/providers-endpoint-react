import { renderHook } from '@testing-library/react-hooks';
import UAParser from 'ua-parser-js';
import { useBrowser } from './useBrowser';

it('should recognize current browser', () => {
  const { result } = renderHook(() => useBrowser());
  const parser = new UAParser();
  const { name } = parser.getBrowser();

  expect(result.current).toBe(name);
});
