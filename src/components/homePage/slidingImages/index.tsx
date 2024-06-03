import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'art/draw1.png'
  },
  {
    color: '#d6d7dc',
    src: 'astra/astra.png'
  },
  {
    color: '#e3e3e3',
    src: 'bottles/block.png'
  },
  {
    color: '#21242b',
    src: 'dresses/dress.jpg'
  }
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'm31/app.png'
  },
  {
    color: '#e5e0e1',
    src: 'posters/coffee.jpg'
  },
  {
    color: '#d7d4cf',
    src: 'posters/cheese-w.jpg'
  },
  {
    color: '#e1dad6',
    src: 'vcp/VCP.png'
  }
];

export default function SlidingImages() {
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
      className="relative z-10 mt-[200px] flex flex-col gap-[3vw] bg-white"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[120vw] gap-12"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="flex h-80 w-1/4 items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative h-4/5 w-4/5">
              <Image
                alt="image"
                src={`/assets/${project.src}`}
                fill
                // objectFit={'cover'}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex w-[120vw] gap-12"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="flex h-80 w-1/4 items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div key={index} className="relative h-4/5 w-4/5">
              <Image fill alt="image" src={`/assets/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-10 h-[3050%] w-[120%] rounded-b-[100%] bg-white shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
