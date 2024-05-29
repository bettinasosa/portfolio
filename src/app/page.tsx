'use client';
import { LetterCollision } from '@/components/scrollAnimation/scrollText';
import { Hero } from '@/components/home/hero';
import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Element, scroller } from 'react-scroll';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
      scroller.scrollTo('hero', {
        duration: 800,
        smooth: 'easeInOutQuart',
        offset: -100 // Adjust the offset as needed
      });
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background h-[200vh] scroll-smooth pt-10">
      <LetterCollision />
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 flex items-center space-x-2 text-3xl font-semibold">
          <p>Scroll</p> <ArrowDownRight strokeWidth={3} className="size-6" />
        </div>
      )}
      <Element name="hero">
        <Hero />
      </Element>
    </div>
  );
}
