import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimText() {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const text = 'Creativity is my craft';

  return (
    <div className="overflow-hidden">
      <motion.div
        className="inline-block whitespace-nowrap"
        style={{ x: translateX, y: translateY, rotate }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
