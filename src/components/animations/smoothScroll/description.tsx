'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Description({ phrases }: { phrases: string[] }) {
  return (
    <div className="relative ml-[10vw] mt-[60vh] text-[3vw] uppercase text-white sm:mt-[60vh]">
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  );
}

interface AnimatedTextProps {
  children: React.ReactNode;
}
gsap.registerPlugin(ScrollTrigger);

function AnimatedText({ children }: AnimatedTextProps) {
  const text = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: '60vh bottom',
        end: 'bottom+=60vh bottom',
        onEnter: () => {
          gsap.to(text.current, {
            opacity: 1,
            left: 0,
            ease: 'power3.Out'
          });
        },
        onLeaveBack: () => {
          gsap.to(text.current, {
            opacity: 0,
            left: '-200px',
            ease: 'power3.Out'
          });
        }
      }
    });
  }, []);

  return (
    <p ref={text} className="relative m-0">
      {children}
    </p>
  );
}
