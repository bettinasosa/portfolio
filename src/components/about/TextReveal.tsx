'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  stagger?: number;
  scrub?: boolean;
  highlightWords?: string[];
}

/**
 * Animated text reveal component with per-word or per-character animations.
 * Perfect for hero headlines and impactful statements.
 */
export default function TextReveal({
  text,
  className = '',
  as: Tag = 'p',
  stagger = 0.04,
  scrub = true,
  highlightWords = []
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const words = wordsRef.current;
    if (!words.length || !container) return;

    const ctx = gsap.context(() => {
      if (scrub) {
        gsap.fromTo(
          words,
          {
            opacity: 0.1,
            y: 24,
            rotateX: -40,
            filter: 'blur(4px)'
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            ease: 'none',
            stagger,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.8
            }
          }
        );
      } else {
        gsap.fromTo(
          words,
          {
            opacity: 0,
            y: 32,
            rotateX: -20
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: 'power4.out',
            stagger,
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [stagger, scrub]);

  const words = text.split(' ');

  return (
    <div ref={containerRef} style={{ perspective: '1000px' }}>
      <Tag className={clsx('flex flex-wrap', className)}>
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) wordsRef.current[i] = el;
            }}
            className={clsx(
              'mr-[0.25em] inline-block',
              highlightWords.includes(word.toLowerCase().replace(/[.,!?]$/, ''))
                ? 'font-bold text-primary'
                : ''
            )}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
