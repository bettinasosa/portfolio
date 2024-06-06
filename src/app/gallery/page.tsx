'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxGallery from '@/app/gallery/parallaxgallery';

export default function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="bg-background">
      {/*<PageScrollParallax />*/}
      <ParallaxGallery />
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-10 h-[3050%] w-[120%] rounded-b-[100%] bg-foreground shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
