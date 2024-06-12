'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '@/components/animations/magnetic';
import RoundedButton from '@/components/animations/roundedButton';
import Link from 'next/link';

export default function ContactInfo() {
  const [timeNow, setTimeNow] = useState(
    new Date().getHours() + ':' + new Date().getMinutes()
  );
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const animatedUnderlineStyle =
    'relative after:absolute after:left-1/2 after:mt-0.5 after:block after:h-px after:w-0' +
    ' after:-translate-x-1/2 after:transform after:bg-white after:duration-200 ' +
    "after:ease-linear after:content-[''] hover:after:w-full";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeNow]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center bg-foreground p-6 pt-32 text-white"
    >
      <div className="w-full  bg-foreground pt-[150px] sm:max-w-[1800px]">
        <div className="relative mx-[100px] border-b border-gray-600 pb-12">
          <span className="flex items-center">
            <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
              <Image
                fill={true}
                objectFit="cover"
                alt={'profile'}
                src={`/assets/profile.jpg`}
              />
            </div>
            <h2 className="ml-3 font-medium sm:text-[90px]">Let&apos;s work</h2>
          </span>
          <h2 className="ml-1 font-medium sm:text-[90px]">together</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <RoundedButton
              backgroundColor="secondary"
              className="absolute flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full bg-primary p-0 text-white"
            >
              <Link href={'/contact'}>Get in touch</Link>
            </RoundedButton>
          </motion.div>
        </div>
        <div className="mt-6 flex gap-5 sm:mx-[100px]">
          <RoundedButton>bettinasosarohl@gmail.com</RoundedButton>
        </div>
        <div className="mt-48 flex justify-between p-5 sm:mx-[100px]">
          <div className="flex items-end gap-2">
            <span className="flex flex-col gap-3">
              <p className="max-w-sm text-base">
                AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder |
                Passionate about using technology to make the world a better
                place.
              </p>
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Version
              </h3>
              <p className="relative m-0 cursor-pointer p-1">2024 © Edition</p>
            </span>
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Timezone
              </h3>
              <p className="relative m-0 cursor-pointer p-1">
                {timeNow} UK (GMT+1)
              </p>
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default text-base font-light text-gray-500">
                Socials
              </h3>
              <Magnetic>
                <Link
                  href="https://twitter.com/bettysrohl"
                  className={animatedUnderlineStyle}
                >
                  Twitter
                </Link>
              </Magnetic>
            </span>
            <Magnetic>
              <Link
                href="https://github.com/bettinasosa"
                className={animatedUnderlineStyle}
              >
                Github
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="https://github.com/bettinasosa"
                className={animatedUnderlineStyle}
              >
                Linkedin
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
