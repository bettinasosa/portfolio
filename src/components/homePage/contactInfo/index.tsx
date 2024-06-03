import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '@/components/animations/magnetic';

export default function ContactInfo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <div className="w-full max-w-[1800px] bg-gray-950 pt-[200px]">
        <div className="relative mx-[100px] border-b border-gray-600 pb-24">
          <span className="flex items-center">
            <div className="relative size-[100px] overflow-hidden rounded-full">
              <Image fill={true} alt={'image'} src={`/assets/profile.jpg`} />
            </div>
            <h2 className="m-0 ml-1 text-5xl font-light">Let's work</h2>
          </span>
          <h2 className="m-0 text-5xl font-light">together</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <div className="absolute flex size-[100px] cursor-pointer items-center justify-center rounded-full bg-[#455CE9] p-0 text-white">
              <p className="relative z-20 m-0 text-base font-light">
                Get in touch
              </p>
            </div>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="mx-48 mt-24 flex gap-5">
          <div className="relative flex cursor-pointer items-center justify-center rounded-3xl border border-gray-500 px-14 py-3">
            <p className="duration-400 relative z-10 transition-colors">
              bettinasosarohl@gmail.com
            </p>
          </div>
          <div className="relative flex cursor-pointer items-center justify-center rounded-3xl border border-gray-500 px-14 py-3">
            bettinasosarohl@gmail.co
          </div>
        </div>
        <div className="mt-48 flex justify-between p-5">
          <div className="flex items-end gap-2">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Version
              </h3>
              <p className="relative m-0 cursor-pointer p-1">2024 © Edition</p>
            </span>
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Version
              </h3>
              <p className="relative m-0 cursor-pointer p-1">11:49 PM GMT+2</p>
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                socials
              </h3>
            </span>
            <Magnetic>
              <p className="relative m-0 cursor-pointer p-1">Instagram</p>
            </Magnetic>
            <Magnetic>
              <p className="relative m-0 cursor-pointer p-1">Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p className="relative m-0 cursor-pointer p-1">Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
