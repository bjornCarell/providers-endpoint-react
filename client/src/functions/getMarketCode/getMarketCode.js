/* eslint-disable no-shadow */
import { compose } from '../compose/compose';
import { markets } from '../../markets/markets';

const market = name => markets.filter(market => market.name === name);

const code = market => {
  const [{ code }] = market;
  return code;
};

export const getMarketCode = compose(code, market);
