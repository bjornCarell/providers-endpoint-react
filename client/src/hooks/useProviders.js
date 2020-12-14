/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { getMarketCode } from '../functions/getMarketCode/getMarketCode';

export const useProviders = market => {
  const [providersData, setProvidersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const code = getMarketCode(market);
    let ignore = false;

    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/providers/${code}`);
        const { providers } = await response.json();
        const data = await providers.providers;
        setProvidersData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      // eslint-disable-next-line no-unused-vars
      ignore = true;
    };
  }, [market]);

  return { providersData, error, loading };
};
