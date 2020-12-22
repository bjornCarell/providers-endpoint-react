import { useState, useEffect } from 'react';
import { useRecognizeExplorer } from '../useRecognizeExplorer/useRecognizeExplorer';
import { getMarketCode } from '../../functions/getMarketCode/getMarketCode';

export const useProviders = market => {
  const isExplorer = useRecognizeExplorer();
  const [providersData, setProvidersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const code = getMarketCode(market);

    let ignore;
    let abortController;

    if (isExplorer) {
      ignore = false;
    } else {
      abortController = new AbortController();
    }

    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/providers/${code}`);
        const { providers } = await response.json();
        const data = await providers.providers;
        setProvidersData(data);
      } catch (err) {
        if (!isExplorer) {
          if (!abortController.signal.aborted) setError(err);
        } else if (isExplorer) {
          setError(err);
        }
      } finally {
        if (!isExplorer) {
          if (!abortController.signal.aborted) setLoading(false);
        } else if (isExplorer) {
          setLoading(false);
        }
      }
    };
    getData();

    return () => {
      if (!isExplorer) {
        abortController.abort();
      } else if (isExplorer) {
        // eslint-disable-next-line no-unused-vars
        ignore = true;
      }
    };
  }, [market]);

  return { providersData, error, loading };
};
