import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from '@/components/homePage/descriptionAnim';

export default function Description() {
  const phrase1 =
    'A software engineer with a passion for innovation and\n' +
    'cutting-edge technology.\n\n ';

  const phrase2 =
    'Particularly interested in the intersection of art, design, and ' +
    'software. I believe that these disciplines can be combined to ' +
    'create truly transformative experiences.';
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="relative mt-[200px] flex justify-center gap-12 p-20 "
    >
      <div className="space-y-4">
        <p className="m-0 gap-2 text-4xl leading-snug">
          {phrase1.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 text-4xl leading-snug">
          {phrase2.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 pb-3 text-lg font-light"
        >
          Currently the founding full stack software engineer @Catapult a DeFi
          startup.
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 text-lg font-light"
        >
          My projects have received multiple awards in the past, and I am always
          looking for new and innovative ways to use my skills to make a
          positive impact on the world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <div className="ml-16 mt-16 flex h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-white">
            <p className="relative z-10 m-0 text-base font-light">About me</p>
          </div>
        </div>
      </div>
    </div>
  );
}
