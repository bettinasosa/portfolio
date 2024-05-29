import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface Slide {
  image: string;
  name: string;
  description: string;
  link: string;
}

interface ProjectSwiperProps {
  slides: Slide[];
}

export default function ProjectSwiper({ slides }: ProjectSwiperProps) {
  useEffect(() => {
    new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1.5,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      keyboard: {
        enabled: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }, []);

  return (
    <div
      className={cn(
        'swiper mySwiper',
        '--swiper-navigation-color: #64748b; --swiper-pagination-color: #64748b'
      )}
    >
      <div className="swiper-wrapper">
        {slides.map((item: Slide) => (
          <div key={item.name} className="swiper-slide">
            <div className="h-full rounded-3xl p-8 lg:grid lg:grid-cols-2 lg:space-x-14">
              <img
                className="mx-auto h-auto w-full max-w-xl rounded-3xl hover:transform"
                width="300"
                height="300"
                src={item.image}
                alt="project image"
              />
              <div className="grid grid-rows-4">
                <div className="row-span-4">
                  <h2 className="text-xl font-medium">{item.name}</h2>
                  <p className="mt-6 text-primary-950/70 dark:text-primary-200/70">
                    {item.description}
                  </p>
                </div>
                <div className="max-w-xs pt-4">
                  <Link
                    className={buttonVariants({ variant: 'default' })}
                    href={item.link}
                  >
                    View project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
