'use client';

import React from 'react';

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
}

export default function ProjectBody({
  subtitle,
  introduction,
  myRole,
  paragraphs
}: ProjectBodyProps) {
  return (
    <section className="py-14 text-background mix-blend-difference sm:py-20">
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
        <div className="space-y-12 py-12">{/*  TODO: add slides here*/}</div>

        {paragraphs.map((paragraph, index) => (
          <div key={index} className="gris-cols-1 grid gap-10 sm:grid-cols-2">
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
