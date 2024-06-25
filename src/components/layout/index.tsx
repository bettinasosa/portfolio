import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { clsx } from 'clsx';

type Props = {
  title: string;
  center?: boolean;
};

export default function Layout({
  children,
  title,
  center
}: PropsWithChildren<Props>) {
  return (
    <div className=" mt-36 px-8 py-16 sm:py-20">
      <h1
        className={clsx(
          'pb-14 text-3xl font-medium lg:text-[10rem]',
          center ? 'items-center text-center' : ''
        )}
      >
        {title}
      </h1>
      {children} <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
