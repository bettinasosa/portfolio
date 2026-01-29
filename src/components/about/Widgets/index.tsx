'use client';

import React from 'react';
import TwitterWidget from './TwitterWidget';
import MusicWidget from './MusicWidget';
import PhotosWidget from './PhotosWidget';

/**
 * Widgets section inspired by Marco.fyi about page
 * Displays Twitter, Music, and Photos widgets in a grid
 */
export default function Widgets() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      <TwitterWidget />
      <MusicWidget />
      <PhotosWidget />
    </div>
  );
}
