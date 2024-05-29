import React from 'react';

interface ProjectHeadingProps {
  title: string;
  description: string;
}

export default function ProjectHeading({
  title,
  description
}: ProjectHeadingProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}