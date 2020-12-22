import { renderHook } from '@testing-library/react-hooks';
import { useProviders } from './useProviders';

it('renders useProviders Hook', () => {
  const { result } = renderHook(({ market }) => useProviders(market), {
    initialProps: {
      market: 'Sweden'
    }
  });
  expect(result.current.providersData).toEqual([]);
  expect(result.current.loading).toBe(true);
  expect(result.current.error).toEqual({});
});
