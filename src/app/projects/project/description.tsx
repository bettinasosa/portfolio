'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrases = [
  'Los Flamencos National Reserve',
  'is a nature reserve located',
  'in the commune of San Pedro de Atacama',
  'The reserve covers a total area',
  'of 740 square kilometres (290 sq mi)'
];

export default function Description() {
  return (
    <div className="relative ml-[10vw] mt-[30vw] text-[3vw] uppercase text-white">
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
        start: '0px bottom',
        end: 'bottom+=400px bottom',
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
