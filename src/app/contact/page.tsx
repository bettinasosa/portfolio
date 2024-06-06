'use client';
import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import Contact from '@/app/contact/contact';

export default function ContactInfo() {
  const Card = ({ children }: PropsWithChildren) => {
    return (
      <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8">
        {children}
      </div>
    );
  };
  return (
    <div className="-mt-20 py-16 sm:py-20">
      <Contact />
      <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
