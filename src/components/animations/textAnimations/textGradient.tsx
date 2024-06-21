'use client';
import { JSX, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);
export default function TextGradient({
  phrase,
  colour
}: {
  phrase: string;
  colour: string;
}) {
  let refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: '-160%',
        end: `+=${window.innerHeight / 1.5}`
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1
    });
  };

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p
          className="m-0 mr-4 inline-block whitespace-nowrap p-0 text-[24px] font-semibold sm:text-[50px]"
          key={word + '_' + i}
        >
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-40"
          key={letter + '_' + i}
          ref={(el: HTMLSpanElement) => {
            refs.current?.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      className={clsx(
        'align-end mb-[20vh] flex h-[50vh] justify-center sm:pt-[10vh]',
        colour ? `text-${colour}` : 'text-background mix-blend-difference'
      )}
    >
      <div ref={body} className="flex w-[90%] flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
