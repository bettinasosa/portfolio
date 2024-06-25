'use client';

import { useEffect, useState } from 'react';

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  url: string;
}

export const useSpotify = () => {
  const [topTracks, setTopTracks] = useState<SpotifyTrack[]>([]);
  const [topArtists, setTopArtists] = useState<SpotifyTrack[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/spotify-top-tracks');
        if (!response.ok) {
          throw new Error('Failed to fetch top tracks');
        }
        const data = await response.json();
        setTopTracks(data.topTracks);
        setTopArtists(data.topArtists);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  return { topTracks, topArtists, isLoading, error };
};
