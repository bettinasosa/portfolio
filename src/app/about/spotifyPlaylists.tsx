'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollDots } from '@/hooks/useScrollDots';

gsap.registerPlugin(ScrollTrigger);

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  firstTrack: string;
  firstTrackArtist: string;
  url: string;
}

interface SpotifyPlaylistsProps {
  playlists: SpotifyPlaylist[];
}

/**
 * Spotify playlists section with card animations.
 * Displays user's top working playlists with hover effects.
 */
const SpotifyPlaylists: React.FC<SpotifyPlaylistsProps> = ({ playlists }) => {
  const DOT_COUNT = 3;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeDot, showDots } = useScrollDots(scrollRef, {
    dotCount: DOT_COUNT,
    axis: 'x',
    dependencies: [playlists.length]
  });

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, rotateY: -15 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [playlists]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Work Playlists
          </h3>
          <p className="text-xs text-foreground/50">What I code to</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-green-600"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-2"
      >
        {playlists.map((playlist, i) => (
          <a
            key={playlist.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-w-[180px] shrink-0 snap-start overflow-hidden rounded-xl border border-foreground/10 bg-background p-3 transition-all duration-300 hover:shadow-md sm:min-w-[200px]"
            style={{ perspective: '1000px' }}
          >
            {/* Album art */}
            <div className="relative mb-3 aspect-square overflow-hidden rounded-xl">
              <Image
                src={playlist.imageUrl || '/placeholder-playlist.png'}
                alt={`${playlist.name} cover`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 80vw, 220px"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-6 w-6 text-black"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Playlist info */}
            <h4 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-green-700">
              {playlist.name}
            </h4>
            <p className="text-xs text-foreground/50">
              {playlist.trackCount} tracks
            </p>
          </a>
        ))}
      </div>

      {showDots && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: DOT_COUNT }).map((_, index) => (
            <span
              key={`spotify-dot-${index}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === activeDot ? 'bg-foreground/70' : 'bg-foreground/20'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpotifyPlaylists;
