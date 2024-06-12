'use client';
import React, { PropsWithChildren, useEffect } from 'react';

export default function Animations({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <div className="main">{children}</div>;
}
