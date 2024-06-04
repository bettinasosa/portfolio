'use client';
import { AnimatePresence } from 'framer-motion';
import React, { PropsWithChildren, useEffect } from 'react';
import PreLoader from '@/components/animations/preLoader';

export default function Animations({ children }: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
      console.log('loading', isLoading);
    })();
  }, []);

  return (
    <div className="main">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {children}
    </div>
  );
}
