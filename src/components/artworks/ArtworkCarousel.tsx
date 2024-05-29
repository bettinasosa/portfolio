import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import './styles.css';

import { FreeMode } from 'swiper/modules';
import Tilt from '@/components/artworks/Tilt';

export default function ArtworkCarousel(props: { slides: string[] }) {
  const { slides } = props;
  const options = {
    scale: 1.4,
    speed: 800,
    max: 30,
    glare: true
  };
  return (
    <Swiper
      direction={'horizontal'}
      spaceBetween={30}
      slidesPerView={'auto'}
      freeMode={true}
      modules={[FreeMode]}
    >
      {slides.map((item: string) => (
        <SwiperSlide key={item}>
          <Tilt
            className={
              'shadow-3xl z-10 m-2 overflow-hidden rounded-3xl bg-cover sm:m-10'
            }
            input={''}
            options={options}
            bgImage={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
