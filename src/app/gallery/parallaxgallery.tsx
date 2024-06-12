'use client';
import React, { useRef } from 'react';
import ImgTilt from '@/app/gallery/imgTilt';
import gsap from 'gsap';
import Image from 'next/image';

export default function ParallaxGallery() {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

  let requestAnimationFrameId: number | null = null;

  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: { movementX: number; movementY: number }) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;
    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId!);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      className="relative h-[125vh] w-screen bg-foreground"
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div className="pt-24">
        <div ref={plane1} className="absolute h-full w-full brightness-[80%]">
          <div className="absolute left-[3%] top-[46%] min-h-[300px] min-w-[150px] ">
            <Image
              src={'/images/dresses/dress1.jpg'}
              alt={'dress'}
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute left-[25%] top-[2%] min-h-[300px] min-w-[150px]">
            <Image
              alt={'dress collection 3'}
              fill
              objectFit="cover"
              src={'/images/dresses/dress3.jpg'}
            />
          </div>
        </div>
        <div ref={plane2} className="absolute h-full w-full brightness-[85%]">
          <div className="absolute left-[1%] top-[1%] min-h-[300px] min-w-[200px]">
            <Image
              src={'/images/dresses/dress4.jpg'}
              alt={'dress collection 4'}
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute left-[82%] top-[5%] min-h-[300px] min-w-[220px]">
            <Image
              alt={'cheese'}
              src={'/images/posters/cheesew.jpg'}
              fill
              objectFit={'cover'}
            />
          </div>
          <div className="absolute left-[70%] top-[40%] min-h-[300px] min-w-[220px]">
            <Image
              alt="coffee poster"
              fill
              src="/images/posters/coffee.jpg"
              objectFit="cover"
            />
          </div>
        </div>
        <div ref={plane3} className="absolute h-full w-full">
          <ImgTilt
            className="absolute left-[65%] top-[2.5%] z-10 max-w-[200px]"
            src={'/images/posters/teacoffee.jpg'}
          />
          <ImgTilt
            className="absolute left-[15%] top-[35%] z-10 max-w-[220px]"
            src={'/images/dresses/dress2.jpg'}
          />
          <ImgTilt
            className="absolute left-[55%] top-[30%] z-10 max-w-[200px]"
            src={'/images/posters/talksposter.jpg'}
          />
          <ImgTilt
            className="absolute left-[60%] top-[70%] z-10 max-w-[150px]"
            src={'/images/posters/sustainability.jpg'}
          />
          <div className="absolute left-[30%] top-[65%] min-h-[250px] min-w-[200px]">
            <Image
              src="/images/dresses/dress.jpg"
              alt="dress"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
