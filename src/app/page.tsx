'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import SlidingImages from '@/components/homePage/SlidingImages';
import BlurryCursor from '@/components/animations/cursor/blendCursor';
import Curve from '@/components/animations/curveTransition/Curve';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/homePage/hero';
import Index from '@/components/homePage/Description';
import ContactInfo from '@/components/homePage/ContactInfo';

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
    <div
      ref={scrollContainerRef}
      className="bg-background min-h-[500vh] overflow-x-hidden scroll-smooth"
    >
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
      <Index />
      <SlidingImages />
      <ContactInfo />
      <BlurryCursor isActive={false} text={'Go to projects'} />
      <Curve backgroundColor="primary" link={'/'} />
    </div>
  );
}
