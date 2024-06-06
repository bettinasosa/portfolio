import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

type Props = {
  title: string;
};

export default function Layout({ children, title }: PropsWithChildren<Props>) {
  return (
    <div className=" mt-36 px-8 py-16 sm:py-20">
      <h1 className="pb-14 text-3xl font-medium lg:text-[10rem]">{title}</h1>
      {children} <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
