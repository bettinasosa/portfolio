'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useSpotify } from '@/hooks/useSpotify';
import Layout from '@/components/layout';
import { useGitHub } from '@/hooks/useGithub';
import GitHubContributionsGraph from '@/app/about/githubActivity';

export default function About() {
  const starsRef = useRef(null);
  const { topTracks } = useSpotify();
  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  useEffect(() => {
    // Animate stars
    if (!starsRef.current) return;
    gsap.to(starsRef.current?.children, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-360, 360)',
      duration: 3,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-200 via-purple-300 to-yellow-200">
      <Layout title="I'm Bettina" center>
        <div className="relative min-h-screen">
          <div ref={starsRef}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <div className="rounded-full blur-3xl" />
                  <Image
                    className="relative z-10 mx-auto h-auto w-full max-w-sm rounded-t-full shadow-lg"
                    width={1440}
                    height={1800}
                    src="/images/profile2.jpg"
                    alt="Profile picture"
                  />
                </div>
                <div className="rounded-3xl bg-purple-900 p-6 pt-12 text-white shadow-lg">
                  <h3 className="mb-4  text-2xl font-bold">Spotify top 3</h3>
                  {topTracks.slice(0, 3).map((track, index) => (
                    <a
                      key={index}
                      href={track.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 rounded-xl p-4 transition-colors duration-300 hover:bg-foreground"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={track?.albumArt! || '/placeholder-album-art.png'}
                          alt={`${track.album} cover`}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                      </div>
                      <div className="min-w-0 flex-grow">
                        <p className="truncate font-semibold">{track.name}</p>
                        <p className="truncate text-sm text-gray-400">
                          {track.artist}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                  <p className="text-2xl font-semibold">
                    A software engineer and designer with a passion for
                    innovation and cutting-edge technology.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I have a strong track record of building and deploying
                    successful products.
                  </p>
                  <p className="text-lg sm:text-xl">
                    At Sojo, I was the founding full-stack engineer, responsible
                    for the design, development, and deployment of the
                    company&apos;s core platform. I built a scalable and
                    user-friendly app that allowed users to order repairs and
                    customisation clothing services online.
                  </p>
                  <p className="text-lg sm:text-xl">
                    After Sojo, I joined Catapult Labs, a startup in the
                    blockchain space, as a founding full-stack software
                    engineer. I played a key role in the development of the
                    company&apos;s flagship product, a Web3 profiles platform
                    that enables networking in the decentralized space.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I then worked on developing decentralised financial
                    primitives and protocols to enable OTC (Over-The-Counter)
                    crypto markets on-chain, including collateral management and
                    margin trading systems. During this time I also learnt
                    Solidity, to enable the development of smart contracts to
                    enable new on-chain financial products.
                  </p>
                  <p className="text-lg sm:text-xl">
                    In recent months I have been working on an AI co-pilot for
                    digital asset trading that unifies client conversations
                    across chat clients like Telegram using OpenAI&apos;s
                    models.
                  </p>
                  <p className="text-lg sm:text-xl">
                    At Imperial College London, I studied design engineering.
                    During my time at university, I worked on a number of
                    projects, including Andromeda, which was awarded a gold
                    prize in the Creative Conscience Awards, and AXOWear, which
                    was exhibited at the Design Museum London.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 pt-10">
              {githubLoading ? (
                <p>Loading GitHub contributions...</p>
              ) : githubError ? (
                <p>Error: {githubError}</p>
              ) : githubData ? (
                <GitHubContributionsGraph
                  contributions={githubData.contributions}
                  totalContributions={githubData.totalContributions}
                  restrictedContributions={githubData.restrictedContributions}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
