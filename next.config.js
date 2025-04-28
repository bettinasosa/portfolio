/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.scdn.co',
      'image-cdn-ak.spotifycdn.com',
      'blend-playlist-covers.spotifycdn.com',
      'image-cdn-fa.spotifycdn.com',
      'miro.medium.com',
      'cdn-images-1.medium.com'
    ],
    unoptimized: false
  }
};

export default nextConfig;
