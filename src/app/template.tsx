'use client';
import React, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactInfo from '@/components/home/ContactInfo';
import { isMobile } from '@/components/util';

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const input = isMobile() ? 0.9 : 1.2;
  const height = useTransform(scrollYProgress, [0, input], [50, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div ref={container} className="relative z-10 bg-background">
        {children}
        <motion.div style={{ height }} className="relative">
          <div className="absolute left-[-10%] z-10 h-[1050%] w-[120%] rounded-b-[100%] bg-background shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)]"></div>
        </motion.div>
      </div>
      <ContactInfo />
    </div>
  );
}
