'use client';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import TextFormatter from '@/components/util/textFormatter';

interface ImageProps {
  src: StaticImageData;
  y: MotionValue<number> | number;
}

interface Props {
  staticImgs: StaticImageData[];
  word: string;
  title: string;
  body: string;
}
export default function PageScrollParallax({
  staticImgs,
  word,
  title,
  body
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -350]);

  const images: ImageProps[] = [
    { src: staticImgs[0], y: 0 },
    { src: staticImgs[1], y: lg },
    { src: staticImgs[2], y: md }
  ];

  return (
    <div ref={container} className="mb-[16vh] mt-[6vh] min-h-screen">
      <div className="ml-[10vw]">
        <motion.h1
          className="mt-[24px] text-[3vw] uppercase leading-[5vw] text-background mix-blend-difference"
          style={{ y: sm }}
        >
          {title}
        </motion.h1>
        <div className="mb-12 max-w-6xl text-background mix-blend-difference">
          <TextFormatter text={body} />
        </div>
        <div>
          <p className="mt-12 text-[2vw] uppercase text-primary">
            {word.split('').map((letter, i) => (
              <motion.span
                key={`l_${i}`}
                className="relative"
                style={{
                  top:
                    scrollYProgress.get() *
                    (Math.floor(Math.random() * -75) - 25)
                }}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <div className="relative mt-[5vh] flex justify-center">
        {images.map(({ src, y }, i) => (
          <motion.div
            key={`i_${i}`}
            className={`absolute ${
              i === 0
                ? 'z-10 w-[90vh]'
                : i === 1
                ? 'left-[65vw] top-[15vh] z-20 w-[50vh] shadow-xl'
                : 'left-[4.5vw] top-[60vh] z-30 w-[50vh] shadow-2xl'
            }`}
            style={{ y }}
          >
            <Image
              src={src}
              placeholder="blur"
              layout="responsive"
              alt="image"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
