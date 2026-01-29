'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSpotify } from '@/hooks/useSpotify';
import { useGitHub } from '@/hooks/useGithub';
import Layout from '@/components/layout';
import AnimatedSection from '@/components/about/AnimatedSection';
import TextReveal from '@/components/about/TextReveal';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import RoundedButton from '@/components/animations/roundedButton';
import OpenSourceShowcase from '@/components/about/OpenSourceShowcase';
import CompactGitHubWidget from '@/components/about/Widgets/CompactGitHubWidget';
import IMessageWidget from '@/components/about/Widgets/IMessageWidget';

export default function About() {
  const {
    playlists,
    isLoading: spotifyLoading,
    error: spotifyError
  } = useSpotify();

  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  return (
    <div className="relative overflow-hidden">
      <Layout title="About Me">
        <div>
          <section className="grid gap-8 py-12 md:gap-12 lg:grid-cols-5 lg:gap-16">
            <AnimatedSection
              animation="fade-right"
              className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start"
            >
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
                <Image
                  src="/images/profile2.jpg"
                  alt="Bettina"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-8 lg:col-span-3">
              <AnimatedSection animation="fade-up">
                <TextReveal
                  text="Design engineer turned software engineer. I approach engineering through a design lens, interested in both the technical architecture and the human experience."
                  className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                  as="p"
                  highlightWords={['design', 'human']}
                  scrub={false}
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    My Superpower
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Taking abstract ideas and turning them into tangible,
                    scalable products that people actually want to use.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Outside the IDE
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Born in London. Raised in Barcelona. Venezuelan at heart. I
                    speak at IRL developer events, I write
                    <Link href="/blog" className="text-primary">
                      {' '}
                      technical posts
                    </Link>
                    , run hands-on workshops, and run a devRel Guild. I thrive
                    at the intersection of technical depth, creative
                    problem-solving, and community building. I am also a digital
                    nomad, traveling the world and learning from different
                    cultures and people.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
          {/* Journey Section - split layout with widgets, inside card */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Where I&apos;ve Been
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {/* Timeline - takes 2/3 width */}
                <div className="min-w-0 lg:col-span-1">
                  <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                    <JourneyTimeline />
                  </div>
                  {/* Education Section */}
                  <section className="py-16">
                    <AnimatedSection animation="fade-up">
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                          Education & Recognition
                        </h2>
                        <p className="mb-6 text-foreground/70">
                          At{' '}
                          <span className="font-semibold text-foreground">
                            Imperial College London
                          </span>
                          , I studied design engineering, a unique program
                          bridging creative thinking, design, and engineering,
                          teaching us the full process of building a technical
                          product from concept to launch.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Link href="/projects/m31">
                            <RoundedButton>
                              Andromeda — Creative Conscience Gold
                            </RoundedButton>
                          </Link>
                          <Link href="/projects/axo">
                            <RoundedButton>
                              AxoWear — Design Museum London
                            </RoundedButton>
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  </section>
                </div>

                {/* Widgets sidebar - takes 1/3 width */}
                <div className="min-w-0 lg:col-span-1">
                  <div className="space-y-4 lg:sticky lg:top-32">
                    <AnimatedSection animation="fade-up">
                      <CompactGitHubWidget />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up">
                      <OpenSourceShowcase />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up">
                      <IMessageWidget />
                    </AnimatedSection>
                    {!spotifyLoading &&
                      !spotifyError &&
                      playlists.length > 0 && (
                        <AnimatedSection animation="fade-up">
                          <SpotifyPlaylists playlists={playlists} />
                        </AnimatedSection>
                      )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}
