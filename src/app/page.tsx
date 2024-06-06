'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import SlidingImages from '@/components/home/SlidingImages';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import Curve from '@/components/animations/curveTransition/Curve';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';
import Description from '@/components/home/Description/description';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'art/draw1.png'
  },
  {
    color: '#d6d7dc',
    src: 'bottles/stack2.png'
  },
  {
    color: '#e3e3e3',
    src: 'm31/specs.png'
  },
  {
    color: '#21242b',
    src: 'm31/controller.jpg'
  }
];
const slider2 = [
  {
    color: '#d4e3ec',
    src: 'm31/app.png'
  },
  {
    color: '#e5e0e1',
    src: 'catapult-trading/dashboard.png'
  },
  {
    color: '#d7d4cf',
    src: 'm31/app.png'
  },
  {
    color: '#e1dad6',
    src: 'vcp/VCP.png'
  }
];

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className=" overflow-x-hidden">
      <LetterCollision />
      {showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-8 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold"
            onClick={scrollToHero}
          >
            <p>Scroll</p>

            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      {/*<TextParallax />*/}
      <Description />
      <SlidingImages slider1={slider1} slider2={slider2} />
      <ContrastCursor isActive={false} text={'Go to work'} />
      <Curve backgroundColor="primary" link={'/'} />
    </div>
  );
}
