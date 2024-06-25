import React, { PropsWithChildren, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }: PropsWithChildren<any>) {
  const magnetic = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });

    magnetic.current!.addEventListener(
      'mousemove',
      (e: { clientX: number; clientY: number }) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.4);
        yTo(y * 0.4);
      }
    );
    magnetic.current!.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
