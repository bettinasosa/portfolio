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
      className="relative flex min-h-screen flex-col items-center justify-between bg-foreground p-6 pt-32 text-white sm:justify-center"
    >
      <div className="w-full bg-foreground pt-[150px] sm:max-w-[1800px]">
        <div className="relative border-b border-gray-600 pb-12 sm:mx-[100px]">
          <span className="flex items-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-[100px] sm:w-[100px]">
              <Image
                fill
                alt={'profile'}
                src={`/images/profile2.jpg`}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="ml-3 text-xl font-medium sm:text-[5vh]">
              Let&apos;s work together!
            </h2>
          </span>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-200px)] top-[calc(100%+65px)] sm:left-[calc(100%-400px)] sm:top-[calc(100%-75px)]"
          >
            <RoundedButton
              backgroundColor="secondary"
              className=" absolute h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-primary p-0 text-white sm:h-[200px] sm:w-[200px]"
            >
              <Link href={'/contact'}>Get in touch</Link>
            </RoundedButton>
          </motion.div>
        </div>
        <div className="mt-6 flex gap-5 sm:mx-[100px]">
          <RoundedButton>bettinasosarohl@gmail.com</RoundedButton>
        </div>

        <div className="mt-20 flex flex-col justify-between p-5 2xs:mt-52 sm:mx-[100px] sm:mt-48 sm:flex-row">
          <p className="min-w-screen mb-5 text-base sm:max-w-xs">
            AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder |
            Passionate about using technology to make the world a better place.
          </p>
          <div className="flex items-end gap-2">
            <span className="flex flex-col gap-3">
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
