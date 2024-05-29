import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

interface SwiperComponentProps {
  slides: string[];
}

export function SwiperComponent({ slides }: SwiperComponentProps) {
  useEffect(() => {
    new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
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
      grabCursor: true,
      centeredSlides: true,
      effect: 'coverflow',
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
      style={{
        '--swiper-navigation-color': '#64748b',
        '--swiper-pagination-color': '#64748b'
      }}
      className="swiper mySwiper"
    >
      <div className="swiper-wrapper max-h-3xl">
        {slides.map((slide, index) => (
          <img
            key={index}
            className="swiper-slide mx-auto h-auto w-full rounded-3xl"
            width="100"
            height="100"
            src={slide}
            alt="Secondary image"
          />
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
