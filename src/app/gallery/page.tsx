'use client';
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

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
  // Refs for each card to apply parallax effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    cardRefs.current = cardRefs.current.slice(0, galleryItems.length);

    const handleParallax = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportHeight = window.innerHeight;
        const distance = centerY - viewportHeight / 2;
        const parallaxValue = distance * -0.05; // Adjust the factor for stronger/weaker effect

        const imageEl = card.querySelector('.parallax-image') as HTMLElement;
        if (imageEl) {
          imageEl.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallax);
    handleParallax(); // Initial calculation

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
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-[15rem] w-full overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="parallax-image object-cover transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  View Project
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
