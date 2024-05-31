'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextScramble() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrambleText = (
      text: string,
      container: HTMLElement,
      scrambleDuration: number
    ) => {
      const characters = text.split('');
      const timeline = gsap.timeline();

      characters.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.textContent = char;
        charElement.style.display = 'inline-block';
        container.appendChild(charElement);

        timeline.to(
          charElement,
          {
            y: `${Math.random() * -200}%`,
            opacity: 0,
            scale: Math.random() * 2 + 1,
            rotation: Math.random() * 360,
            duration: scrambleDuration,
            ease: 'power2.inOut',
            delay: index * 0.02
          },
          0
        );
      });
    };

    const textElement = textRef.current;
    if (textElement) {
      const text = textElement.textContent?.trim() || '';
      textElement.textContent = '';

      const scrambleDuration = 1; // Adjust this value to control the scrambling duration

      scrambleText(text, textElement, scrambleDuration);

      ScrollTrigger.create({
        trigger: textElement,
        start: 'top 50%',
        onEnter: () => {
          gsap.to(textElement.children, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: scrambleDuration,
            ease: 'power2.inOut',
            stagger: 0.02,
            onComplete: () => {
              // Add collision detection and movement here
              const chars = textElement.children;
              for (let i = 0; i < chars.length; i++) {
                const char = chars[i];
                const nextChar = chars[i + 1];
                if (nextChar) {
                  const collision = detectCollision(
                    char as HTMLElement,
                    nextChar as HTMLElement
                  );
                  if (collision) {
                    const direction = Math.random() < 0.5 ? -1 : 1;
                    gsap.to(char, {
                      x: `${direction * 50}%`,
                      duration: 0.5,
                      ease: 'power2.inOut'
                    });
                  }
                }
              }
            }
          });
        },
        onLeaveBack: () => {
          gsap.to(textElement.children, {
            y: (index: number) => `${Math.random() * -200}%`,
            opacity: 0,
            scale: (index: number) => Math.random() * 2 + 1,
            rotation: (index: number) => Math.random() * 360,
            duration: scrambleDuration,
            ease: 'power2.inOut',
            stagger: 0.02
          });
        }
      });
    }

    const detectCollision = (el1: HTMLElement, el2: HTMLElement) => {
      const rect1 = el1.getBoundingClientRect();
      const rect2 = el2.getBoundingClientRect();
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    };
  }, []);

  return (
    <div>
      <div ref={textRef} className="text-scramble">
        Creativity is My craft
      </div>
    </div>
  );
}
