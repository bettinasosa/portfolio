'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  location?: string;
}

/**
 * Photos widget showing digital nomad travel photos
 * Inspired by Marco.fyi about page
 */
export default function PhotosWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add your digital nomad/travel photos here
  // Replace these with your actual travel photos (suggested: add to /public/images/travel/)
  const photos: Photo[] = [
    {
      src: '/images/gallery/walletcon.png',
      alt: 'Travel photo 1',
      location: 'Conference travels'
    },
    {
      src: '/images/gallery/walletconnect.png',
      alt: 'Travel photo 2',
      location: 'Remote work setup'
    },
    {
      src: '/images/gallery/reown.png',
      alt: 'Travel photo 3',
      location: 'Digital nomad life'
    }
    // Add more photos here! Example:
    // {
    //   src: '/images/travel/paris.jpg',
    //   alt: 'Paris workspace',
    //   location: 'Paris, France'
    // },
  ];

  const currentPhoto = photos[currentIndex];

  // Auto-rotate photos
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Photos icon badge */}
      <div className="absolute right-4 top-4 z-10">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-blue-500"
          fill="currentColor"
        >
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>

      {/* Photo display */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 400px) 100vw, 300px"
          priority={currentIndex === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Location overlay */}
        {currentPhoto.location && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm font-medium text-white">
              {currentPhoto.location}
            </p>
          </div>
        )}

        {/* Photo indicators */}
        {photos.length > 1 && (
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Digital nomad label */}
      <div className="p-5">
        <p className="text-sm font-medium text-foreground">Digital Nomad</p>
        <p className="mt-1 text-xs text-foreground/60">
          Living and working from different locations around the world
        </p>
      </div>
    </div>
  );
}

