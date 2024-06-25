import React from 'react';
import Image from 'next/image';

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  firstTrack: string;
  firstTrackArtist: string;
  url: string;
}

interface SpotifyPlaylistsProps {
  playlists: SpotifyPlaylist[];
}

const SpotifyPlaylists: React.FC<SpotifyPlaylistsProps> = ({ playlists }) => {
  return (
    <div className="rounded-3xl bg-purple-900 p-6 pt-12 text-white shadow-lg">
      <h3 className="text-spotify-green mb-4 text-2xl font-bold">
        My Top Working Playlists
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist) => (
          <a
            key={playlist.id}
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-spotify-darker flex flex-col rounded-md p-4 transition-all duration-300 hover:bg-opacity-80"
          >
            <div className="relative mb-4 w-full pb-[100%]">
              <Image
                src={playlist.imageUrl || '/placeholder-playlist.png'}
                alt={`${playlist.name} cover`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h4 className="mb-1 truncate text-lg font-semibold">
              {playlist.name}
            </h4>
            <p className="mb-2 line-clamp-2 text-sm text-gray-400">
              {playlist.description}
            </p>
            <p className="text-sm text-gray-400">
              {playlist.trackCount} tracks
            </p>
            <p className="mt-2 text-sm text-gray-400">
              First track: {playlist.firstTrack} by {playlist.firstTrackArtist}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpotifyPlaylists;
