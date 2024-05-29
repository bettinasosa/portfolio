import React from 'react';

interface HeroSectionProps {
  description: string;
  title: string;
  isImage: boolean;
  media: string;
}

export default function ProjectHero({
  description,
  title,
  isImage,
  media
}: HeroSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
                {description}
              </p>
            </div>
          </div>

          <div className="w-full rounded-3xl">
            {isImage ? (
              <img
                className="mx-auto h-auto w-full max-w-xl rounded-3xl"
                width="300"
                height="300"
                src={media}
                alt="project image"
              />
            ) : (
              <iframe
                src={media}
                className="aspect-video h-full w-full rounded-3xl"
                allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
