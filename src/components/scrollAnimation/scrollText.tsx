import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const creativity = 'Creativity ';
const is = 'is ';
const my = 'my ';
const craft = 'craft';
const sentence3 = 'abstract thinking is my passion';

type LetterBounds = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type LetterPositions = {
  x: number;
  y: number;
  rotation: number;
  speed: number;
};

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.5 + randomDecimal * (1 - 0.6);
}

const creativityPositions: LetterPositions[] = [
  { x: 8, y: 100, rotation: -3, speed: 0.3 }, // C
  { x: 5, y: 200, rotation: 2, speed: 0.3 }, // r
  { x: 21, y: 150, rotation: -10, speed: 0.1 }, // e
  { x: 16, y: 258, rotation: 40, speed: 0.5 }, // a
  { x: 15, y: 96, rotation: -20, speed: 0.3 }, // t
  { x: 10, y: 412, rotation: 30, speed: 0.2 }, // i
  { x: 33, y: 353, rotation: -15, speed: 0.1 }, // v
  { x: 9, y: 368, rotation: 25, speed: 0.4 }, // i
  { x: 11, y: 128, rotation: -35, speed: 0.2 }, // t
  { x: 25, y: 300, rotation: 15, speed: 0.4 } // y
];

function getLetterBounds(letter: Element): LetterBounds {
  const letterBounds = letter.getBoundingClientRect();
  return {
    top: letterBounds.top,
    left: letterBounds.left,
    right: letterBounds.right,
    bottom: letterBounds.bottom
  };
}

function isRectanglesColliding(
  rect1: LetterBounds,
  rect2: LetterBounds
): boolean {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        start: 0,
        end: 'max',
        invalidateOnRefresh: true,
        scrub: 0
      },
      rotation: creativityPositions[index]?.rotation ?? 10
    });
  });
};

function handleCollisions(containerRef: MutableRefObject<any>) {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  if (letterElements) {
    const letterBoxes: { [key: string]: LetterBounds } = {};

    letterElements.forEach((letter: Element) => {
      letterBoxes[letter.textContent || ''] = getLetterBounds(letter);
    });

    letterElements.forEach((letter: Element) => {
      const letterBox = letterBoxes[letter.textContent || ''];

      if (!letterBox) return;

      Object.entries(letterBoxes).forEach(([otherLetter, otherBox]) => {
        if (otherLetter === letter.textContent) return;

        if (isRectanglesColliding(letterBox, otherBox)) {
          const dx = otherBox.left - letterBox.left;
          const dy = otherBox.top - letterBox.top;
          const angle = Math.atan2(dy, dx);
          const newX = Math.cos(angle) * 10;
          const newY = Math.sin(angle) * 10;

          gsap.to(letter, {
            duration: 0.8,
            x: `+=${newX}`,
            y: `+=${newY}`,
            rotation: `+=${angle * (3 / Math.PI)}`
          });
        }
      });
    });
  }
}

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
    animateLettersOnScroll(containerRef);

    // const collisionInterval = setInterval(() => {
    //   handleCollisions(containerRef);
    // }, 100);

    // return () => {
    //   clearInterval(collisionInterval);
    // };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-16 flex flex-col justify-end lg:mt-80 lg:h-screen xl:mt-[55vh] 2xl:mt-[25vh]"
    >
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
      <div className="xs:top-96 absolute top-80 flex flex-wrap md:relative md:top-10 md:-mb-96 lg:top-0 lg:mb-0 lg:pt-24">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
