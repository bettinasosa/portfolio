'use client';
import { LetterCollision } from '@/components/scrollAnimation/scrollText';
import Hero from '@/app/home/hero';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import Cta from '@/app/home/cta';
import ProjectsSection from '@/app/home/projects';
import { AboutSection } from '@/app/home/aboutSection';
import TextParallax from '@/components/scrollAnimation/textParallax';
import BlurryCursor from '@/components/cursor/blendCursor';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [isActive, setIsActive] = useState(true);
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
      className="bg-background h-[480vh] scroll-smooth pt-10"
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
      <div
        id="hero"
        ref={heroRef}
        className="bg-gray-800 snap-start text-white"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Hero />
      </div>
      <TextParallax />
      <ProjectsSection />
      <AboutSection />
      <Cta />
      <BlurryCursor isActive={isActive} />
    </div>
  );
}
