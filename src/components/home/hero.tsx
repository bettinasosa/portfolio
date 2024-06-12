import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-screen bg-foreground">
      <iframe
        src="https://player.vimeo.com/video/362997602?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
        className="pointer-events-none aspect-video h-full w-full"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}
