'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { clsx } from 'clsx';

interface HeroSectionProps {
  description: string;
  title: string;
  isImage: boolean;
  media: string;
  bgColour?: string;
}

export default function ProjectHero({
  description,
  title,
  isImage,
  media,
  bgColour
}: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div
      className={clsx(
        'relative',
        isImage ? 'h-[60vh] lg:h-screen' : 'h-screen',
        bgColour ? `bg-${bgColour}` : 'bg-black'
      )}
    >
      {isImage ? (
        <div className="flex w-full justify-center">
          <Image
            className="h-auto w-[80vw] pt-12 "
            width="300"
            height="300"
            src={media}
            quality={100}
            alt="project image"
          />
        </div>
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
      {!isImage && (
        <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-foreground"></div>
      )}
      {!isImage && (
        <Button
          className="absolute bottom-32 right-6 z-10 rounded sm:bottom-16"
          onClick={toggleMute}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </Button>
      )}
      <div
        className={clsx(
          'absolute left-12 flex w-full',
          isImage ? 'bottom-12' : 'bottom-4 left-12 sm:bottom-16'
        )}
      >
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
