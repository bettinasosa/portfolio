// src/hooks/useGitHub.ts

import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
}

interface GitHubData {
  contributions: ContributionDay[];
  totalContributions: number;
  restrictedContributions: number;
  name: string;
}

export const useGitHub = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/github-activity');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub contributions');
        }
        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubContributions();
  }, []);

  return { githubData, isLoading, error };
};
