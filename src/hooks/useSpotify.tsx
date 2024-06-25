'use client';

import { useEffect, useState } from 'react';

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
}
export interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  firstTrack: string;
  firstTrackArtist: string;
  url: string;
}

export const useSpotify = () => {
  const [topTracks, setTopTracks] = useState<SpotifyTrack[]>([]);
  const [topArtists, setTopArtists] = useState<SpotifyTrack[]>([]);
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyPlaylists = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/spotify-playlists');
        if (!response.ok) {
          throw new Error('Failed to fetch Spotify playlists');
        }
        const data = await response.json();
        setPlaylists(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

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
    fetchSpotifyPlaylists();
  }, []);

  return { topTracks, topArtists, isLoading, error, playlists };
};
