import React from 'react';

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="xs:pt-16 relative z-0 w-full pt-8">
        <iframe
          src="https://player.vimeo.com/video/362997602?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          className="-ml-4 aspect-video h-full w-screen lg:-ml-10"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className="absolute bottom-10 pl-10 sm:gap-10">
          <div className="flex space-x-5 text-xs font-medium text-white sm:text-base">
            <a
              href="/projects"
              className="bg-primary-600 bg-gradient-radial hover:bg-accent-300 focus-visible:outline-accent-400 inline-flex items-center justify-center rounded-full border border-transparent bg-opacity-50 px-6 py-3 backdrop-blur-lg backdrop-filter transition hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore projects
            </a>
            <a
              href="/gallery"
              className="bg-primary-600 bg-gradient-radial hover:bg-accent-300 focus-visible:outline-accent-400 inline-flex items-center justify-center rounded-full border border-transparent bg-opacity-50 px-6 py-3 backdrop-blur-lg backdrop-filter transition hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
