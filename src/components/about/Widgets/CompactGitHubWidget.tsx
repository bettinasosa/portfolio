'use client';

import React from 'react';
import Link from 'next/link';
import { useGitHub } from '@/hooks/useGithub';

/**
 * Compact GitHub activity widget for sidebar display
 */
export default function CompactGitHubWidget() {
  const { githubData, isLoading } = useGitHub();

  if (isLoading || !githubData) {
    return (
      <div className="rounded-xl border border-foreground/10 bg-white p-4 shadow-sm">
        <div className="mb-3 h-4 w-24 rounded bg-foreground/10"></div>
        <div className="h-20 w-full rounded bg-foreground/5"></div>
      </div>
    );
  }

  const recentContributions = githubData.contributions.slice(-7 * 4); // Last 4 weeks
  const maxContributions = Math.max(
    ...recentContributions.map((c) => c.count),
    1
  );

  return (
    <Link
      href="https://github.com/bettinasosa"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-foreground/10 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">GitHub</h4>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
          <span className="text-xs text-foreground/60">Active</span>
        </div>
      </div>

      {/* Compact contribution graph - 4 weeks */}
      <div className="mb-2 flex gap-0.5">
        {recentContributions.map((contribution, i) => {
          const intensity = contribution.count / maxContributions;
          const opacity = Math.max(0.2, intensity);
          return (
            <div
              key={i}
              className="h-8 flex-1 rounded-sm bg-green-500"
              style={{ opacity }}
              title={`${contribution.count} contributions on ${contribution.date}`}
            />
          );
        })}
      </div>

      <p className="text-xs text-foreground/60">
        {githubData.totalContributions.toLocaleString()} contributions this year
      </p>
    </Link>
  );
}
