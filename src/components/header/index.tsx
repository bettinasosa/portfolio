'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/header/nav/nav';
import MenuButton from '@/components/custom/menuButton';
import { cn } from '@/lib/utils';

const menu = {
  open: {
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed top-0 z-20 w-screen pt-4 lg:pt-8">
      <div className="bg-background absolute inset-0 z-10 -ml-10 h-20 w-screen opacity-90"></div>
      <div className="fixed z-20 flex space-x-4">
        <img className="size-8 w-auto" src="/assets/logo.jpg" alt="Bettina" />
        <div className="flex w-fit flex-col space-y-2 text-sm font-normal">
          <Link href={'/'}>Bettina Sosa</Link>
          <div className="border-black h-px w-full border"></div>
        </div>
      </div>
      <div className="fixed right-[20px] top-[20px] z-20 lg:right-[30px] lg:top-[30px]">
        <motion.div
          className={cn('bg-secondary relative rounded-3xl border', {
            'right-[-15px] top-[-15px] h-[640px] w-[350px] sm:h-[650px] sm:w-[480px] lg:right-[-25px] lg:top-[-25px]':
              isActive,
            'right-0 top-0 h-[40px] w-[100px]': !isActive
          })}
          variants={menu}
          animate={isActive ? 'open' : 'closed'}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <MenuButton
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </div>
  );
}
