import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/free-mode';
import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';
import Tilt from '../../util/Tilt.jsx';

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
      slidesPerView={3.5}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode]}
      className="mt-10 content-center items-center justify-center overflow-visible"
    >
      {slides.map((item: string) => (
        <SwiperSlide key={item}>
          <Tilt
            className={
              'shadow-3xl z-10 m-10 overflow-hidden rounded-3xl bg-cover'
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
