import React from 'react';
import Magnetic from '@/components/animations/magnetic';

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
  totalContributions,
  restrictedContributions
}: GitHubContributionsGraphProps) {
  const weeks = 53; // Show last year of contributions
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

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100';
    if (count < 5) return 'bg-blue-400';
    if (count < 10) return 'bg-blue-600';
    if (count < 15) return 'bg-blue-800';
    return 'bg-blue-900';
  };

  const getTooltip = (date: string, count: number) => {
    const d = new Date(date);
    return `${count} contributions on ${
      months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;
  };

  // Generate an array of dates for the last year
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
    <div className="rounded-xl bg-white/40  p-4 backdrop-blur-sm">
      <h3 className="mb-2 text-xl font-bold text-foreground">
        GitHub Contributions
      </h3>
      <p className="mb-4 text-sm text-gray-400">
        Total Contributions: {totalContributions}
      </p>

      <div className="mb-2 flex">
        {months.map((month, i) => (
          <div key={month} className="flex-1 text-center text-xs text-gray-400">
            {month}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="pr-2">
          {days.map((day, i) => (
            <div
              key={day}
              className="mb-[2px] h-[13px] text-xs leading-3 text-gray-400"
            >
              {i % 2 === 0 ? day : ''}
            </div>
          ))}
        </div>

        <div className="grid-cols-53 grid flex-1 gap-[2px]">
          {allDates.map((date) => {
            const contribution = contributions.find((c) => c.date === date) || {
              date,
              count: 0
            };
            return (
              <Magnetic key={date}>
                <div
                  key={date}
                  className={`h-[10px] w-[10px] ${getColor(
                    contribution.count
                  )} rounded-sm`}
                  title={getTooltip(date, contribution.count)}
                />
              </Magnetic>
            );
          })}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-end">
        <span className="mr-2 text-xs text-gray-400">Less</span>
        {[0, 4, 9, 14, 20].map((level) => (
          <div
            key={level}
            className={`h-[10px] w-[10px] ${getColor(
              level
            )} mr-[2px] rounded-sm`}
          />
        ))}
        <span className="ml-2 text-xs text-gray-400">More</span>
      </div>
    </div>
  );
}
