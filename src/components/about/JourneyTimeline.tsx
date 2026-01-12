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
      'I work independently across software engineering and DevRel. I lead the DevRel Guild at Myosin, work with teams such as WalletConnect, and I’m building HiveMind with a team of five, an AI product that scales developer and marketing workflows. My work spans the full funnel: reference apps, SDK and docs improvements, content, workshops, and builder programs.',
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
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    const items = itemsRef.current;

    if (!line || !items.length) return;

    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.5
        }
      }
    );

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Center line */}
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary/30 md:block"
      />

      <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-primary/30 md:hidden" />

      <div className="relative space-y-16 md:space-y-24">
        {journeyData.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            className={`relative flex items-start gap-8 ${
              i % 2 === 0
                ? 'md:flex-row md:text-right'
                : 'md:flex-row-reverse md:text-left'
            }`}
          >
            {/* Content */}
            <div
              className={`ml-16 flex-1 md:ml-0 ${
                i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
              }`}
            >
              <div
                className={`group relative rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                  item.highlight ? 'border-primary/20 shadow-md' : ''
                }`}
              >
                <span className="mb-2 inline-block rounded-full bg-foreground/10 px-3 py-1 text-sm font-medium text-foreground">
                  {item.year}
                </span>
                <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                {item.companyUrl ? (
                  <Link
                    href={item.companyUrl}
                    className="mb-3 inline-block font-medium text-primary transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{item.company} ↗
                  </Link>
                ) : (
                  <span className="mb-3 inline-block font-medium text-foreground/60">
                    @{item.company}
                  </span>
                )}
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-6 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary/40 bg-background md:left-1/2 md:-translate-x-1/2">
              <div
                className={`h-2 w-2 rounded-full ${
                  item.highlight ? 'bg-primary' : 'bg-primary/50'
                }`}
              />
            </div>

            {/* Empty space for the other side on desktop */}
            <div className="hidden flex-1 md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
