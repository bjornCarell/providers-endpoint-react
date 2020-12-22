import { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

export const useRecognizeExplorer = () => {
  const [isExplorer, setIsExplorer] = useState(false);

  const parser = new UAParser();
  const { name } = parser.getBrowser();

  useEffect(() => {
    if (name.toLowerCase() === 'ie') setIsExplorer(true);
    else setIsExplorer(false);
  }, []);

  return isExplorer;
};
