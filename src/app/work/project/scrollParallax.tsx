'use client';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Intro({ images }: { images: string[] }) {
  const background = useRef<HTMLDivElement>(null);
  const introImage = useRef<HTMLDivElement>(null);
  const homeHeader = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(background.current, {
            scale: 0.8 + 0.2 * progress,
            ease: 'power2.out'
          });
        }
      }
    });

    gsap.set(background.current, {
      scale: 0.8 // Set the initial scale of the background image
    });

    timeline.to(
      introImage.current,
      {
        height: 0,
        top: '-100%',
        ease: 'power2.out'
      },
      0
    );
  }, []);

  return (
    <div ref={homeHeader} className="relative flex w-full justify-center">
      <div
        className="absolute h-[140vh] w-full brightness-[60%]"
        ref={background}
      >
        <div className="w-full rounded-3xl">
          <iframe
            src="https://player.vimeo.com/video/955515979?badge=0&controls=0&loop=1&autoplay=1&&player_id=0&app_id=58479"
            title="AxoWear"
            className="aspect-video h-full w-full rounded-3xl"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write "
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="relative mt-[35vh] flex justify-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="absolute h-[475px] w-[350px] brightness-[70%]"
        >
          <Image
            src={images[0]}
            alt="intro image"
            fill={true}
            priority={true}
            className="object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="z-[3] whitespace-nowrap text-center text-[7vw] text-white"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  );
}
