'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { clsx } from 'clsx';

type BlurCursorProps = {
  isActive: boolean;
  text?: string;
};

export default function BlurryCursor({ isActive, text }: BlurCursorProps) {
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== 'undefined' && isMobile()) return null;

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  return (
    <motion.div
      className={clsx(
        'pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference shadow-md',
        isActive
          ? ' w-400 bg-secondary bg-opacity-50 p-4 text-6xl font-bold text-white'
          : 'h-10 w-10 rounded-full bg-white'
      )}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring
      }}
    >
      {isActive && text}
    </motion.div>
  );
}
