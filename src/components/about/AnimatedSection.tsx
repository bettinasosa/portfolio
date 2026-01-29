'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | 'fade-up'
    | 'fade-left'
    | 'fade-right'
    | 'scale'
    | 'parallax'
    | 'clip-reveal'
    | 'blur-in';
  delay?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Animated section wrapper with ScrollTrigger-based entrance animations.
 * Use for creating scroll-driven reveal effects throughout the page.
 */
export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 1.2,
  stagger = 0
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const animations: Record<string, gsap.TweenVars> = {
        'fade-up': { y: 60, opacity: 0 },
        'fade-left': { x: -60, opacity: 0 },
        'fade-right': { x: 60, opacity: 0 },
        scale: { scale: 0.92, opacity: 0 },
        parallax: { y: 80, opacity: 0 },
        'clip-reveal': {
          clipPath: 'inset(100% 0 0 0)',
          opacity: 0,
          y: 20
        },
        'blur-in': {
          filter: 'blur(10px)',
          opacity: 0,
          y: 30
        }
      };

      const toStates: Record<string, gsap.TweenVars> = {
        'fade-up': { y: 0, opacity: 1 },
        'fade-left': { x: 0, opacity: 1 },
        'fade-right': { x: 0, opacity: 1 },
        scale: { scale: 1, opacity: 1 },
        parallax: { y: 0, opacity: 1 },
        'clip-reveal': {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          y: 0
        },
        'blur-in': {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0
        }
      };

      const initial = animations[animation];
      const target = toStates[animation];

      gsap.set(el, initial);

      gsap.to(el, {
        ...target,
        duration,
        delay,
        ease: 'power4.out',
        stagger: stagger > 0 ? { each: stagger } : undefined,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }, el);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
