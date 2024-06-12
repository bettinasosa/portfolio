'use client';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import VanillaTilt, { TiltOptions } from 'vanilla-tilt';
import Image from 'next/image';

type TiltProps = {
  src: string;
  options?: TiltOptions;
  className?: string;
  input?: string;
};

export default function ImgTilt({
  options = {
    scale: 1.4,
    speed: 800,
    max: 30,
    glare: true
  },
  className,
  input,
  src
}: TiltProps) {
  const tilt: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current!, options);
  }, [options]);

  return (
    <div ref={tilt} className={className}>
      <Image src={src} alt="artwork" className="object-cover" />
      {input && <div className="text-white">{input}</div>}
    </div>
  );
}

// export default function Tilter() {
/*
{
  reverse:           false,  // reverse the tilt direction
  max:               35,     // max tilt rotation (degrees)
  perspective:       1000,   // Transform perspective, the lower, the more extreme the tilt gets.
  scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:             300,    // Speed of the enter/exit transition
  transition:        true,   // Set a transition on enter/exit.
  axis:              null,   // What axis should be disabled. Can be X or Y.
  reset:             true,   // If the tilt effect has to be reset on exit.
  easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare:             false,   // if it should have a "glare" effect
  "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                             // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */
