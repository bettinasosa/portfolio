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

    const [topArtists, topTracks] = await Promise.all([
      spotifyApi.getMyTopArtists({ limit: 25 }),
      spotifyApi.getMyTopTracks({ limit: 25 })
    ]);

    const formattedArtists = topArtists.body.items.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      images: artist.images
    }));

    const formattedTracks = topTracks.body.items.map((track) => ({
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      url: track.external_urls.spotify,
      albumArt: track.album.images[0]?.url // This line fetches the album art URL
    }));

    return NextResponse.json({
      topArtists: formattedArtists,
      topTracks: formattedTracks
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
