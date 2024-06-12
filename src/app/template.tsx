'use client';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform
} from 'framer-motion';
import ContactInfo from '@/components/home/ContactInfo';
import { isMobile } from '@/components/util';
import { clsx } from 'clsx';
import PreLoader from '@/components/animations/preLoader';

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const input = isMobile() ? 0.9 : 1.2;
  const height = useTransform(scrollYProgress, [0, input], [50, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const url = window.location.href.split('/');
  const lastWord = url[url.length - 1];
  const darkModeScreens = ['gallery', 'contact', 'm31'];

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 800);
      console.log('loading', isLoading);
    })();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div
        ref={container}
        className={clsx(
          'relative z-10',
          darkModeScreens.includes(lastWord) ? 'bg-foreground' : 'bg-background'
        )}
      >
        <AnimatePresence mode="wait">
          {isLoading && <PreLoader />}
        </AnimatePresence>
        {children}
        <motion.div style={{ height }} className="relative">
          <div
            className={clsx(
              'absolute left-[-10%] z-10 h-[1050%] w-[120%] rounded-b-[100%] shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)]',
              darkModeScreens.includes(lastWord)
                ? 'bg-foreground'
                : 'bg-background'
            )}
          ></div>
        </motion.div>
      </div>
      <ContactInfo />
    </div>
  );
}
