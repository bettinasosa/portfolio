import { NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN
});

export async function GET() {
  try {
    const data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body['access_token']);

    const playlistId = [
      '5gxD39PRtgwy8GCGMjB7oE',
      // '2GfLRoD5RzuU3qGBJwI5TT',
      '7uC1v1Juca1fTeng1P9y8Q',
      '1UKWjkEXm2tYZ5R6BqVJR4'
    ];

    const playlistsData = await Promise.all(
      playlistId.map((id) => spotifyApi.getPlaylist(id))
    );

    const playlists = await Promise.all(
      playlistsData.map(async (playlist) => {
        const tracks = await spotifyApi.getPlaylistTracks(playlist.body.id, {
          limit: 1
        });
        return {
          id: playlist.body.id,
          name: playlist.body.name,
          description: playlist.body.description,
          imageUrl: playlist.body.images[0]?.url,
          trackCount: playlist.body.tracks.total,
          firstTrack: tracks.body.items[0]?.track!.name,
          firstTrackArtist: tracks.body.items[0]?.track!.artists[0].name,
          url: playlist.body.external_urls.spotify
        };
      })
    );

    return NextResponse.json(playlists);
  } catch (error) {
    console.error('Error fetching Spotify playlists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify playlists' },
      { status: 500 }
    );
  }
}
