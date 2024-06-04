'use client';

import { AnimatePresence } from 'framer-motion';
import PreLoader from '../components/animations/preLoader';
import React, { useEffect, useState } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
      console.log('loading', isLoading);
    })();
  }, []);
  return (
    <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
  );
}
