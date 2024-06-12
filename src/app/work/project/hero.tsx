'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="relative h-screen bg-black">
      {isImage ? (
        <img
          className="mx-auto h-auto w-full"
          width="300"
          height="300"
          src={media}
          alt="project image"
        />
      ) : (
        <iframe
          src={`${media}?autoplay=1&mute=${
            isMuted ? '1' : '0'
          }&controls=0&loop=1&playlist=${media.split('/').pop()}`}
          className="aspect-video h-full w-full"
          allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-foreground"></div>
      <Button
        className="absolute bottom-32 right-6 z-10 sm:bottom-16"
        onClick={toggleMute}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </Button>
      <div className="absolute bottom-4 left-12 flex w-full sm:bottom-16">
        <div className="flex max-w-xs flex-col gap-4 sm:max-w-4xl sm:gap-6">
          <h1 className="text-2xl font-medium tracking-tight text-background mix-blend-difference sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-xs text-background mix-blend-difference sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
