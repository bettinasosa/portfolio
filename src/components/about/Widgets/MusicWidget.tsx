'use client';

import React from 'react';
import Image from 'next/image';
import { useSpotify } from '@/hooks/useSpotify';

/**
 * Music player widget showing currently playing track
 * Inspired by Marco.fyi about page
 */
export default function MusicWidget() {
  const { topTracks, isLoading } = useSpotify();
  const currentTrack = topTracks?.[0]; // Use first top track as "currently playing"

  if (isLoading || !currentTrack) {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Music note icon badge */}
        <div className="absolute right-4 top-4">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-red-500"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="pt-12">
          <div className="mb-3 h-32 w-full rounded-xl bg-foreground/5"></div>
          <div className="h-4 w-3/4 rounded bg-foreground/5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Music note icon badge */}
      <div className="absolute right-4 top-4 z-10">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-red-500"
          fill="currentColor"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      {/* Album art */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={currentTrack.albumArt || '/placeholder-album.png'}
          alt={`${currentTrack.album} cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 400px) 100vw, 300px"
        />
      </div>

      {/* Track info */}
      <div className="space-y-1">
        <h4 className="truncate font-semibold text-foreground">
          {currentTrack.name}
        </h4>
        <p className="truncate text-sm text-foreground/60">
          {currentTrack.artist} — {currentTrack.album}
        </p>
      </div>

      {/* Player controls placeholder */}
      <div className="mt-4 flex items-center justify-center gap-4 text-foreground/40">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
        <div className="h-1 flex-1 rounded-full bg-foreground/10"></div>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </div>
    </div>
  );
}

