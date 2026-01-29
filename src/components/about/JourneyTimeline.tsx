'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  highlight?: boolean;
}

const journeyData: TimelineItem[] = [
  {
    year: 'Now',
    title: 'Freelance Engineer & DevRel',
    company: 'Independent',
    description:
      "I work independently across software engineering and DevRel. I lead the DevRel Guild at Myosin, work with teams such as WalletConnect, and I'm building HiveMind with a team of five, an AI product that scales developer and marketing workflows. My work spans the full funnel: reference apps, SDK and docs improvements, content, workshops, and builder programs.",
    highlight: true
  },
  {
    year: '2025',
    title: 'Head of Engineering & Developer Relations',
    company: 'Partisia Blockchain',
    companyUrl: 'https://partisiablockchain.com/',
    description:
      'Led Engineering and DevRel for privacy-first infrastructure and multi-party computation. Shipped production smart contracts, revamped developer docs, and built the developer funnel through workshops, hackathons, and open-source. Launched their first bounty program resulting in the biggest developer contribution to their codebase to date.'
  },
  {
    year: '2024',
    title: 'AI & Trading Systems',
    company: 'Catapult Labs',
    companyUrl: 'https://www.catapult.xyz/',
    description:
      'Built an AI co-pilot for digital asset trading that unifies client conversations across chat clients using OpenAI models.'
  },
  {
    year: '2022',
    title: 'DeFi Protocols & Smart Contracts',
    company: 'Catapult Labs',
    companyUrl: 'https://www.catapult.xyz/',
    description:
      'Developed decentralised financial primitives for OTC crypto markets, including collateral management and margin trading. Learned Solidity for on-chain financial products.'
  },
  {
    year: '2021',
    title: 'Founding Full-Stack Engineer',
    company: 'Sojo',
    companyUrl: 'https://www.sojo.uk/',
    description:
      'Shipped the core platform for clothing repairs and customisation, from product design through deployment.'
  },
  {
    year: '2021',
    title: 'Design Engineering MEng',
    company: 'Imperial College London',
    description: 'Graduated from my masters with honours.'
  }
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    if (!items.length) return;

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.05
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="space-y-1">
        {journeyData.map((item, i) => {
          const isLastItem = i === journeyData.length - 1;

          return (
            <div
              key={i}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="group relative"
            >
              {/* Timeline item - clean horizontal layout */}
              <div
                className={`grid py-4 sm:grid-cols-[60px_1fr] sm:gap-4 sm:py-6 ${
                  isLastItem ? '' : 'border-b border-foreground/10'
                }`}
              >
                {/* Year */}
                <div className="items-start px-2">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                      item.highlight
                        ? 'bg-primary/10 text-primary'
                        : 'bg-foreground/5 text-foreground/60'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    {item.companyUrl ? (
                      <Link
                        href={item.companyUrl}
                        className="text-sm font-medium text-primary transition-colors hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{item.company} ↗
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-foreground/50">
                        @{item.company}
                      </span>
                    )}
                  </div>
                  <p className="max-w-2xl text-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
