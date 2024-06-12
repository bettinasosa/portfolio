'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '@/components/animations/preLoader';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);
        console.log('loading', isLoading);
      })();
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
  );
}
