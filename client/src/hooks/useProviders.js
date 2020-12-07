/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { getMarketCode } from '../functions/getMarketCode/getMarketCode';

export const useProviders = market => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const code = getMarketCode(market);

    const getData = async () => {
      const response = await fetch(`/providers/${code}`);
      const result = await response.json();

      if (response.status !== 200) throw Error(result.message);

      const { providers } = result;
      return providers;
    };

    getData()
      .then(res => setData(res.providers))
      .catch(err => console.log(err));
  }, [market]);

  return data;
};
