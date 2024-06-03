'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import BlurryCursor from '@/components/cursor/blendCursor';
import Description from '@/components/homePage/description';
import SlidingImages from '@/components/homePage/slidingImages';
import ContactInfo from '@/components/homePage/contactInfo';
import Hero from '@/components/homePage/hero';
import { LetterCollision } from '@/components/scrollAnimation/scrollText';

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="bg-background min-h-[500vh] overflow-x-hidden scroll-smooth"
    >
      <LetterCollision />
      {showScrollButton && (
        <div
          className="fixed bottom-8 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold"
          onClick={scrollToHero}
        >
          <p>Scroll</p> <ArrowDownRight strokeWidth={3} className="size-6" />
        </div>
      )}
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      {/*<TextParallax />*/}
      <Description />
      <SlidingImages />
      <ContactInfo />
      <BlurryCursor isActive={false} text={'Go to projectPage'} />
    </div>
  );
}
