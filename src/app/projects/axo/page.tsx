'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';
import TextGradient from '@/components/animations/textAnimations/textGradient';

export default function AstraProject() {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const researchImages = [
    '/images/axo/astronaut.png',
    '/images/axo/prototype.png',
    '/images/axo/concept.png',
    '/images/axo/poster1.png',
    '/images/axo/poster2.png',
    '/images/axo/poster3.png',
    '/images/axo/poster4.png'
  ];
  ``;
  const phrase =
    'Fashion is one of the most polluting industries on earth, with shoes' +
    ' having the highest impact. We have to rethink this industry.' +
    ' This project aims to achieve the unprecedented level of' +
    ' CIRCULARITY necessary to clothe a world FROM the GROUND UP.';

  const description = 'Pioneering Sustainable Footwear';
  const heroText =
    'Discover Axowear, the first fully circular, modular, and monomaterial shoe ' +
    'designed for the resource-scarce Martian environment. By harnessing cutting-edge' +
    ' generative design techniques and sustainable potato-based biomaterials, Axowear' +
    ' represents a groundbreaking step towards a more sustainable future for ' +
    'fashion on Earth and beyond.';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ProjectHero
        description={heroText}
        media={'https://player.vimeo.com/video/955515979'}
        isImage={false}
        title={'AXOwear'}
      />
      <div className="h-[20vh] w-full bg-gradient-to-b from-foreground to-background opacity-60"></div>
      <TextGradient phrase={phrase} colour={'destructive'} />
      {researchImages.map((asset, index) => (
        <Image
          key={index}
          src={asset}
          alt="Project specs"
          width={700}
          height={500}
          quality={100}
          layout="responsive"
        />
      ))}
    </div>
  );
}
