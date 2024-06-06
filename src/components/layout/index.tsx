import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

type Props = {
  title: string;
};

export default function Layout({ children, title }: PropsWithChildren<Props>) {
  return (
    <div className="mt-12 px-8 py-16 sm:py-20">
      <p className="3xl font-medium sm:text-[150px]">{title}</p>
      {children} <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
