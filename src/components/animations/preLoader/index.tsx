'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { opacity, slideUp } from '@/components/animations/preLoader/anim';
import { clsx } from 'clsx';

const words = [
  { text: 'Hola', colour: 'primary' },
  { text: 'Hello', colour: 'secondary' },
  { text: 'Salut', colour: 'accent' },
  { text: 'Bonjour', colour: 'destructive' },
  { text: 'Ciao', colour: 'bg-purple-500' }
];

export default function PreLoader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const url = window?.location.href.split('/') ?? '/';
  const lastWord = url[url.length - 1];

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };
  console.log('lastWord', lastWord);
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-30 flex h-screen w-screen items-center justify-center bg-black text-white"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={clsx(
              'absolute z-50 flex items-center justify-center text-4xl',
              `text-${words[index].colour}`
            )}
          >
            <span
              className={clsx(
                'mr-3 block size-3 rounded-full',
                `bg-${words[index].colour}`
              )}
            ></span>
            {lastWord === '' ? words[index].text : lastWord}
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full fill-[#141516]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
