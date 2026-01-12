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
  stagger = 0.02,
  scrub = true,
  highlightWords = []
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const words = wordsRef.current;
    if (!words.length) return;

    if (scrub) {
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5
          }
        }
      );
    } else {
      gsap.fromTo(
        words,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [stagger, scrub]);

  const words = text.split(' ');

  return (
    <div ref={containerRef}>
      <Tag className={clsx('flex flex-wrap', className)}>
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) wordsRef.current[i] = el;
            }}
            className={clsx(
              'mr-[0.25em] inline-block',
              highlightWords.includes(word.toLowerCase()) &&
                'font-bold text-primary'
            )}
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
