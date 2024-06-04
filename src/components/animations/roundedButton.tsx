import React, { PropsWithChildren, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '@/components/animations/magnetic';
import { clsx } from 'clsx';

interface Props {
  backgroundColor?: string;
  className?: string;
}

export default function RoundedButton({
  children,
  backgroundColor = 'secondary',
  ...attributes
}: PropsWithChildren<Props>) {
  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current!.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current!.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-secondary px-4 py-6"
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        <p className="relative z-10 transition-colors duration-300 ease-linear hover:text-white">
          {children}
        </p>
        <div
          ref={circle}
          className={clsx(
            'absolute top-[100%] h-[150%] w-full rounded-full',
            `bg-${backgroundColor}`
          )}
        ></div>
      </div>
    </Magnetic>
  );
}
