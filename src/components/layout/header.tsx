'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Menu from '../nav';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isMobile } from '@/components/util';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out'
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out'
          });
        }
      }
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className="absolute top-0 z-10 box-border flex w-full items-center p-4 font-light text-black lg:p-8"
      >
        <div className="flex lg:pr-56">
          <Link href={'/'} className="group z-20 flex items-center space-x-2">
            <img className="h-8 w-auto" src="/assets/logo.jpg" alt="Bettina" />
            {!isMobile() && (
              <>
                <p className="hover:rotate-[360deg]">©</p>
                <div className="relative flex overflow-hidden">
                  <div className="ease-custom-cubic transition-transform duration-500 group-hover:translate-x-[-100%]">
                    created by
                  </div>
                  <div className="ease-custom-cubic px-1 transition-transform duration-500 group-hover:translate-x-[-65px]">
                    Bettina
                  </div>

                  <div
                    className="ease-custom-cubic
              translate-x-full transition-transform duration-500 group-hover:translate-x-[-65px]"
                  >
                    Sosa
                  </div>
                </div>
              </>
            )}
          </Link>
        </div>
        {!isMobile() ? (
          <div className="flex flex-1 items-center justify-between font-semibold">
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Link href={'/about'}>About</Link>
                <Link href="/projects">Work</Link>
              </div>
            </div>
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Link href={'/gallery'}>Gallery</Link>
                <Link href={'/blog'}>Blog</Link>
              </div>
            </div>
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex">
                <Link href={'/contact'}>Contact</Link>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ) : (
          <Menu />
        )}
      </div>
      {!isMobile() && (
        <div ref={button} className="fixed right-0 z-40 scale-0 transform">
          <Menu />
        </div>
      )}
    </>
  );
}
