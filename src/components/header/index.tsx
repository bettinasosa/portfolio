'use client';
import React from 'react';
import Link from 'next/link';
import Menu from '@/components/header/nav';

export default function Header() {
  return (
    <div className="fixed top-0 z-20 w-screen pt-4 lg:pt-8">
      <div className="bg-background absolute inset-0 z-10 -ml-10 h-20 w-screen opacity-90"></div>
      <div className="fixed z-20 flex space-x-4">
        <img className="size-8 w-auto" src="/assets/logo.jpg" alt="Bettina" />
        <div className="flex w-fit flex-col space-y-2 text-sm font-normal">
          <Link href={'/'}>Bettina Sosa</Link>
          <div className="border-black h-px w-full border"></div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
