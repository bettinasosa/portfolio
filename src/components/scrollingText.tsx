'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export type ScrollingTextProps = {
  phrases: string[];
  direction: 'up' | 'down';
};

export default function ScrollingText({
  phrases,
  direction
}: ScrollingTextProps): JSX.Element {
  const containerRef = useRef(null);
  const firstSet = useRef(null);
  const secondSet = useRef(null);

  let yPercent = 0;

  useEffect(() => {
    gsap.set(secondSet.current, {
      top: direction == 'up' ? '100%' : 0
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (direction == 'up') {
      if (yPercent >= 0) {
        yPercent = -100;
        appendPhrases();
      }
    } else {
      if (yPercent <= -100) {
        yPercent = 0;
        appendPhrases();
      }
    }

    gsap.set(firstSet.current, { yPercent: yPercent });
    gsap.set(secondSet.current, { yPercent: yPercent });

    requestAnimationFrame(animate);

    yPercent += direction == 'up' ? 0.5 : -0.5;
  };

  const appendPhrases = () => {
    phrases.forEach((phrase) => {
      const phraseElement = document.createElement('p');
      phraseElement.textContent = phrase;
      if (containerRef.current !== null)
        containerRef.current.appendChild(phraseElement);
    });
  };

  return (
    <div className="h-screen overflow-hidden">
      <div ref={containerRef}>
        <div ref={firstSet} className="flex flex-col space-y-2">
          {phrases.map((phrase, index) => (
            <p key={index}>{phrase}</p>
          ))}
        </div>
        <div ref={secondSet} className="flex flex-col flex-nowrap space-y-2">
          {phrases.map((phrase, index) => (
            <p className="overflow-hidden" key={index}>
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
