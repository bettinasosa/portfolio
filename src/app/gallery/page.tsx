'use client';

import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout';
import { ProjectCard } from '@/components/ui/ProjectCard';

// Gallery items data
const galleryItems = [
  {
    id: 'onethoughtaday',
    title: 'One Thought A Day',
    description:
      'A minimalist journaling application with elegant typography - personal project',
    imagePath: '/images/onethoughtaday/homepage.png',
    link: 'https://www.onethoughtaday.com',
    tags: ['UI/UX Design', 'Minimalism']
  },
  {
    id: 'walletcon',
    title: 'WalletCon',
    description:
      'Annual conference for the WalletConnect ecosystem in Cannes, France - fully built and maintained by me',
    imagePath: '/images/gallery/walletcon.png',
    link: 'https://www.walletcon.com',
    tags: ['Web3', 'Event']
  },
  {
    id: 'walletconnect',
    title: 'WalletConnect Network',
    description:
      'The connectivity layer for the financial internet, powering 700+ wallets and 70K+ apps - full-stack engineer',
    imagePath: '/images/gallery/walletconnect.png',
    link: 'https://walletconnect.com',
    tags: ['Web3', 'Infrastructure']
  },
  {
    id: 'reown',
    title: 'Reown',
    description:
      'Infrastructure for onchain finance — from DeFi and payments to enterprises - full-stack engineer',
    imagePath: '/images/gallery/reown.png',
    link: 'https://reown.com',
    tags: ['Web3', 'DeFi']
  },
  {
    id: 'hivemind',
    title: 'Hivemind',
    description: 'AI-powered crypto marketing strategist (beta) - CTO',
    imagePath: '/images/gallery/hivemind.png',
    link: 'https://hivemind.myosin.xyz',
    tags: ['AI', 'Marketing']
  }
];

export default function Gallery() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, galleryItems.length);

    const handleParallax = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportHeight = window.innerHeight;
        const distance = centerY - viewportHeight / 2;
        const parallaxValue = distance * -0.05;

        const imageEl = card.querySelector('.parallax-image') as HTMLElement;
        if (imageEl) {
          imageEl.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallax);
    handleParallax();

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <Layout title="web gallery">
      <div className="min-h-screen bg-white px-4 py-12 md:px-8 lg:px-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Design Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A collection of my design work and web projects featuring various
            styles and approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              {...item}
              index={index}
              imageClassName="parallax-image"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
