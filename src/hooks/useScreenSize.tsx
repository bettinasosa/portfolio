import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight
  });

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight
      });
    };

    window?.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}
