import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import React, { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';

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
      <body>
        <div className="h-fit min-h-screen ">
          <div className="bg-background text-foreground flex flex-col p-4 lg:p-10">
            <Header />
            <main className={`flex-grow ${inter.className}`}>{children}</main>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}