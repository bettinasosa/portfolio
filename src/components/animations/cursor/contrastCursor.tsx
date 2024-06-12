'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { clsx } from 'clsx';
import { isMobile } from '@/components/util';

type BlurCursorProps = {
  isActive?: boolean;
  text?: string;
};

export default function ContrastCursor({ isActive, text }: BlurCursorProps) {
  const [isClicked, setIsClicked] = useState(false);

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

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isActive]);

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <motion.div
      className={clsx(
        'pointer-events-none fixed left-0 top-0 z-50 mix-blend-multiply shadow-md',
        isActive
          ? 'w-400 bg-destructive bg-opacity-50 p-4 text-6xl font-bold text-white'
          : 'h-10 w-10 rounded-full',
        isClicked ? 'bg-primary' : 'bg-primary'
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
