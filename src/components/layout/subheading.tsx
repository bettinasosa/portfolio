import React from 'react';

interface SubHeadingProps {
  title: string;
  description: string;
}

function Subheading({ title, description }: SubHeadingProps) {
  return (
    <section className="py-4 sm:py-2">
      <div className="mx-5 max-w-2xl px-2 sm:px-4 lg:max-w-6xl lg:px-6">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="text-primary-950/70 dark:text-primary-200/70 max-w-xl text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
