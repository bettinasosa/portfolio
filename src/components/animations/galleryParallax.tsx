'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const images = [
  'dresses/dress1.jpg',
  'dresses/dress2.jpg',
  'dresses/dress3.jpg',
  'dresses/dress4.jpg',
  'art/draw1.png',
  'art/draw2.png',
  'posters/poster.jpg',
  'posters/cheesew.jpg',
  'posters/coffee.jpg',
  'posters/teacoffee.jpg',
  'posters/sustainability.jpg',
  'posters/talksposter.jpg'
];

export default function ArtParallax() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  return (
    <main className="min-h-screen">
      <div className="h-[175vh] overflow-hidden bg-background">
        <div className="relative top-[-12.5vh] flex h-[200vh] gap-8 p-8">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
    </main>
  );
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative flex h-full w-1/4 min-w-[250px] flex-col gap-8 whitespace-nowrap"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-1/3 w-full overflow-hidden rounded-[1vw]"
        >
          <Image src={`/images/${src}`} alt="image" fill />{' '}
        </div>
      ))}
    </motion.div>
  );
};
