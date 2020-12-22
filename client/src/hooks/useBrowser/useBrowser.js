import { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

export const useBrowser = () => {
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    const parser = new UAParser();
    const { name } = parser.getBrowser();
    setBrowser(name);
  }, []);

  return browser;
};
