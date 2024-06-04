'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { curve, text, translate } from './anim';

const anim = (variants: {}) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit'
  };
};

type Props = {
  backgroundColor: string;
  link: string;
};

export default function Curve({
  children,
  backgroundColor,
  link
}: PropsWithChildren<Props>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      className="h-[calc(100vh + 600px)] pointer-events-none fixed left-0 top-0 h-full w-screen"
      style={{ backgroundColor }}
    >
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="bg-foreground transition-opacity duration-100 ease-linear"
      />
      <motion.p
        className="absolute left-[50%] top-[40%] z-30 translate-x-[-50%] transform align-middle text-5xl text-background"
        {...anim(text)}
      >
        {link}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
