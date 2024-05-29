'use client';

import React from 'react';
import Tilt from '@/components/artworks/Tilt';
import ProjectSwiper, { Slide } from '@/components/swiper/ProjectSwiper';

interface Paragraph {
  title: string;
  text: string;
  images: string[];
}

interface ProjectBodyProps {
  subtitle: string;
  introduction: string;
  myRole: string;
  video: string;
  paragraphs: Paragraph[];
  slides: Slide[];
}

export default function ProjectBody({
  subtitle,
  introduction,
  myRole,
  paragraphs,
  slides
}: ProjectBodyProps) {
  const options = {
    scale: 1.4,
    speed: 800,
    max: 30,
    glare: true
  };

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl space-y-6 px-8 sm:px-12 lg:max-w-7xl lg:px-16">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          {subtitle}
        </h2>
        <div className="space-y-12">
          <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            {introduction}
          </p>
          <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            {myRole}
          </p>
        </div>
        <div className="space-y-12 py-12">
          <ProjectSwiper slides={slides} />
        </div>

        {paragraphs.map((paragraph, index) => (
          <div key={index} className="gris-cols-1 grid gap-10 sm:grid-cols-2">
            <Tilt
              className="shadow-3xl z-10 m-10 overflow-hidden rounded-3xl bg-cover"
              input=""
              options={options}
              bgImage={paragraph.images[0]}
            />
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl font-medium tracking-tight">
                {paragraph.title}
              </h3>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {paragraph.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
