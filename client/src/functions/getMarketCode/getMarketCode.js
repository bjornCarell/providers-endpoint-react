/* eslint-disable no-shadow */
import { compose } from '../compose/compose';
import { markets } from '../../markets/markets';
import { caseInsensitive } from '../caseInsensitive/caseInsensitive';

const market = name =>
  markets.filter(
    market => caseInsensitive(market.name) === caseInsensitive(name)
  );

const code = market => {
  const [{ code }] = market;
  return code;
};

export const getMarketCode = compose(code, market);
