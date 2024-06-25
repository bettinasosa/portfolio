import { motion } from 'framer-motion';
import React, { JSX, PropsWithChildren, useState } from 'react';
import { disperse } from '@/app/contact/textDisperse/anim';

type Props = {
  setBackground: (isActive: boolean) => void;
  onClick?: () => void;
};

export default function TextDisperse({
  children,
  setBackground,
  onClick
}: PropsWithChildren<Props>) {
  const [isAnimated, setIsAnimated] = useState(false);
  const getChars = (element: React.ReactNode) => {
    let chars: JSX.Element[] = [];
    const word = (element as JSX.Element)!.props.children;
    word.split('').forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setBackground(true);
    setIsAnimated(true);
  };

  const manageMouseLeave = () => {
    setBackground(false);
    setIsAnimated(false);
  };

  return (
    <div
      onClick={onClick}
      className="inline-flex text-[8.6vw] uppercase sm:text-[5.6vw]"
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
    >
      {getChars(children)}
    </div>
  );
}
