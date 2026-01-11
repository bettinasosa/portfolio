'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '@/components/animations/magnetic';

gsap.registerPlugin(ScrollTrigger);

interface ContributionDay {
  date: string;
  count: number;
}

interface GitHubContributionsGraphProps {
  contributions: ContributionDay[];
  totalContributions: number;
  restrictedContributions: number;
}

export default function GitHubContributionsGraph({
  contributions,
  totalContributions
}: GitHubContributionsGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const weeks = 53;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cells = cellsRef.current;
    if (!cells.length || !container) return;

    gsap.fromTo(
      cells,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'back.out(2)',
        stagger: {
          each: 0.002,
          from: 'start'
        },
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [contributions]);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-foreground/10';
    if (count < 5) return 'bg-green-500/50';
    if (count < 10) return 'bg-green-600/60';
    if (count < 15) return 'bg-green-700/70';
    return 'bg-green-800';
  };

  const getTooltip = (date: string, count: number) => {
    const d = new Date(date);
    return `${count} contributions on ${
      months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < weeks * 7; i++) {
      const date = new Date(
        today.getTime() - (weeks * 7 - i) * 24 * 60 * 60 * 1000
      );
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const allDates = generateDates();

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground md:text-2xl">
            GitHub Activity
          </h3>
          <p className="mt-1 text-sm text-foreground/60">
            {totalContributions.toLocaleString()} contributions in the last year
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-600" />
          <span className="text-sm text-foreground/60">Active</span>
        </div>
      </div>

      {/* Month labels */}
      <div className="mb-2 hidden md:flex">
        <div className="w-8" />
        {months.map((month) => (
          <div
            key={month}
            className="flex-1 text-center text-xs text-foreground/40"
          >
            {month}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="hidden pr-2 md:block">
          {days.map((day, i) => (
            <div
              key={day}
              className="mb-[2px] h-[13px] text-xs leading-3 text-foreground/40"
            >
              {i % 2 === 0 ? day : ''}
            </div>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-[repeat(53,1fr)] gap-[2px]">
          {allDates.map((date, i) => {
            const contribution = contributions.find((c) => c.date === date) || {
              date,
              count: 0
            };
            return (
              <Magnetic key={date}>
                <div
                  ref={(el) => {
                    if (el) cellsRef.current[i] = el;
                  }}
                  className={`aspect-square w-full rounded-sm ${getColor(
                    contribution.count
                  )} cursor-pointer transition-transform duration-200 hover:scale-150`}
                  title={getTooltip(date, contribution.count)}
                />
              </Magnetic>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-2">
        <span className="text-xs text-foreground/40">Less</span>
        {[0, 4, 9, 14, 20].map((level) => (
          <div
            key={level}
            className={`h-3 w-3 rounded-sm ${getColor(level)}`}
          />
        ))}
        <span className="text-xs text-foreground/40">More</span>
      </div>
    </div>
  );
}
