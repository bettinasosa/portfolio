import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const creativity = 'Creativity ';
const is = 'is ';
const my = 'my ';
const craft = 'craft';
const sentence3 = 'abstract thinking is my passion';

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter xs:leading-none xs:text-[90px] text-6xl font-semibold md:text-[120px] lg:text-[150px] xl:text-[210px] "
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="scroll-smooth">
      <div className="-mt-28 mb-24 flex h-screen flex-col justify-end">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={creativity} />
          <div className="xs:w-4 w-2 sm:w-10"></div>
          <LetterDisplay word={is} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={my} />
          <div className="xs:w-4 w-2 sm:w-10"></div>
          <LetterDisplay word={craft} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
