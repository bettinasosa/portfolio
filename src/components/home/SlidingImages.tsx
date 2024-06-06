import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import RoundedButton from '@/components/animations/roundedButton';
import Link from 'next/link';

type Slider = {
  color: string;
  src: string;
};
type Props = {
  slider1: Slider[];
  slider2: Slider[];
};

export default function SlidingImages({ slider1, slider2 }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="relative z-10 mt-[200px] flex flex-col gap-[3vw] bg-background"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[300vw] gap-4 sm:w-[120vw] sm:gap-12"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="flex h-60 w-1/2 items-center justify-center sm:h-80 sm:w-1/4"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative h-full w-full  sm:h-4/5 sm:w-4/5">
              <Image
                alt="image"
                src={`/assets/${project.src}`}
                fill
                objectFit={'cover'}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex  w-[300vw] gap-6 sm:w-[120vw] sm:gap-12"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="flex h-60 w-3/4 items-center justify-center sm:h-80 sm:w-1/4"
            style={{ backgroundColor: project.color }}
          >
            <div
              key={index}
              className="relative h-full w-full sm:h-[90%] sm:w-[90%]"
            >
              <Image
                fill
                alt="image"
                src={`/assets/${project.src}`}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex w-full justify-center">
        <Link href={'/projects'}>
          <RoundedButton>View Projects</RoundedButton>
        </Link>
      </div>
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-10 h-[3050%] w-[120%] rounded-b-[100%] bg-background shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
