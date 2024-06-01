import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';
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
    <html lang="en" className="snap-mandatory">
      <body className="snap-mandatory overflow-scroll">
        <main className="min-h-screen">
          <Header />
          <div className="bg-background text-foreground flex flex-col p-4 lg:p-10">
            <main className={`flex-grow ${inter.className}`}>{children}</main>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
