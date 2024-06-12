import Picture1 from '../../../../public/assets/m31/packaging.png';
import Picture2 from '../../../../public/static/assets/astra/astra.png';
import Picture3 from '../../../../public/static/assets/m31/app.png';
import Picture4 from '../../../../public/static/assets/m31/controller.jpg';
import Picture5 from '../../../../public/static/assets/m31/research.png';
import Picture6 from '../../../../public/static/assets/m31/specs.png';
import Picture7 from '../../../../public/static/assets/m31/controller.png';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Picture = {
  src: StaticImageData;
  scale: MotionValue<number>;
};

const imageContainerStyles = {
  default: 'absolute object-cover',
  0: 'w-[25vw] h-[25vh]',
  1: 'top-[3vh] left-[37vw] w-[35vw] h-[30vh]',
  2: 'top-[17.5vh] left-[15vw] w-[20vw] h-[45vh]', ///TALL
  3: 'right-[10vw] bottom-[37.5vh] w-[25vw] h-[25vh]',

  4: 'bottom-[10vh] left-[45vw] w-[20vw] h-[25vh]', //SQUARED
  5: 'bottom-[10vh] left-[12.5vw] w-[30vw] h-[25vh]', // wide
  6: 'bottom-[20vh] right-[15vw] w-[15vw] h-[15vh]' //SMALL
};

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: Picture[] = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 }
  ];

  return (
    <div ref={container} className="relative h-[300vh] overflow-hidden">
      <div className="sticky top-0 h-screen overflow-hidden bg-blue-600">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                className={classNames(
                  imageContainerStyles.default,
                  // @ts-ignore
                  imageContainerStyles[index]
                )}
              >
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
