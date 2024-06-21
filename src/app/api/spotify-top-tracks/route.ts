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

    const topTracks = await spotifyApi.getMyTopTracks({ limit: 5 });

    const formattedTracks = topTracks.body.items.map((track) => ({
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      url: track.external_urls.spotify
    }));

    return NextResponse.json(formattedTracks);
  } catch (error) {
    console.error('Error fetching Spotify top tracks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top tracks' },
      { status: 500 }
    );
  }
}
