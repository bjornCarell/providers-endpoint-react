import { useState, useEffect } from 'react';

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState({ top: 0 });

  useEffect(() => {
    const handleScrollTop = () => setScrollTop({ top: window.scrollY });

    document.addEventListener('scroll', handleScrollTop);

    return () => {
      document.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  return scrollTop;
};
