'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { SpotifyTrack, useSpotify } from '@/hooks/useSpotify'; // You'll need to create this hook
// import { useGitHub } from '@/hooks/useGitHub'; // You'll need to create this hook
import Layout from '@/components/layout';

export default function About() {
  const profileRef = useRef(null);
  const starsRef = useRef(null);
  const { topTracks } = useSpotify();
  // const { commitHistory } = useGitHub();

  useEffect(() => {
    // Animate stars
    gsap.to(starsRef.current!.children, {
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
    <Layout title="About Me">
      <div className="from-primary-500 relative min-h-screen overflow-hidden bg-gradient-to-b to-transparent">
        <div className="absolute inset-0" ref={starsRef}>
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
            <div className="relative">
              <div className="bg-primary-200 absolute inset-0 rounded-full opacity-30 blur-3xl" />
              <Image
                ref={profileRef}
                className="relative z-10 mx-auto h-auto w-full max-w-xl rounded-full shadow-lg"
                width={1440}
                height={1800}
                src="/images/profile.jpg"
                alt="Profile picture"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                <p className="text-lg sm:text-xl">
                  I&apos;m Bettina Sosa, a software engineer with a passion for
                  innovation and cutting-edge technology. I have a strong track
                  record of building and deploying successful products.
                </p>
                <p className="text-lg sm:text-xl">
                  At Sojo, I was the founding full-stack engineer, responsible
                  for the design, development, and deployment of the
                  company&apos;s core platform. I built a scalable and
                  user-friendly app that allowed users to order custom-made
                  clothing online.
                </p>
                <p className="text-lg sm:text-xl">
                  After Sojo, I joined Catapult Labs, a startup that is building
                  a new DeFi protocol, as a founding full-stack software
                  engineer. I played a key role in the development of the
                  company&apos;s flagship product, a Web3 profiles platform that
                  enables networking in the decentralized space.
                </p>
                <p className="text-lg sm:text-xl">
                  In recent months, I have been working on developing innovative
                  blockchain-based financial solutions. I have also been
                  learning Solidity, the programming language used to develop
                  smart contracts.
                </p>
                <p className="text-lg sm:text-xl">
                  Outside of work, I enjoy cooking, painting, running long
                  distances, and coding personal projects.
                </p>
                <p className="text-lg sm:text-xl">
                  At Imperial College London, I studied design engineering.
                  During my time at university, I worked on a number of
                  projects, including Andromeda, which was awarded a gold prize
                  in the Creative Conscience Awards, and AXOWear, which was
                  exhibited at the Design Museum London.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Top Spotify Tracks</h3>
              <ul className="list-disc pl-5">
                {topTracks
                  .slice(0, 5)
                  .map((track: SpotifyTrack, index: number) => (
                    <li key={index}>
                      {track.name} - {track.artist}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Recent GitHub Activity</h3>
              <ul className="list-disc pl-5">
                {/*{commitHistory.slice(0, 5).map((commit: any, index: number) => (*/}
                {/*  <li key={index}>*/}
                {/*    {commit.message} -{' '}*/}
                {/*    {new Date(commit.date).toLocaleDateString()}*/}
                {/*  </li>*/}
                {/*))}*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
