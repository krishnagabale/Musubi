import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 768;

const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobileView;
