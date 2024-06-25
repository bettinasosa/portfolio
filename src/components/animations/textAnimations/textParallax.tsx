'use client';
import Image from 'next/image';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

type SlideProps = {
  left: string;
  src: string;
  direction: string;
  progress: MotionValue<number>;
};

const Slide = (props: SlideProps) => {
  const direction = props.direction == 'left' ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className={'flex items-center gap-5 px-5'}>
      <p className="text-[7.5vw]">Abstract thinker Software engineer</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <Image
          style={{ objectFit: 'cover' }}
          src={src}
          alt="image"
          fill
          sizes={'6'}
        />
      </span>
    </div>
  );
};

export default function TextParallax() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start end', 'end start']
  });

  useEffect(() => {
    if (!container.current) return;
    const lenis = new Lenis({
      wrapper: container.current,
      // @ts-ignore
      content: container.current.firstElementChild
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <div />
      <div ref={container}>
        <Slide
          src={'/images/posters/sustainability.jpg'}
          direction={'left'}
          left={'-40%'}
          progress={scrollYProgress}
        />

        <Slide
          src={'/images/posters/coffee.jpg'}
          direction={'right'}
          left={'-25%'}
          progress={scrollYProgress}
        />

        <Slide
          src={'/images/posters/talksposter.jpg'}
          direction={'left'}
          left={'-75%'}
          progress={scrollYProgress}
        />
      </div>
    </main>
  );
}
