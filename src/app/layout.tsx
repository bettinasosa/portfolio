import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bettina's portfolio",
  description: 'Bettina is a software engineer and designer.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="bg-background text-foreground flex flex-col">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
            </div>
          </main>
        </Animations>
      </body>
    </html>
  );
}
