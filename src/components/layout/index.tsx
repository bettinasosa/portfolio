import React, { PropsWithChildren } from 'react';
import BlurryCursor from '@/components/animations/cursor/blendCursor';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="px-12 py-24">
      {children} <BlurryCursor isActive={false} text={''} />
    </div>
  );
}
