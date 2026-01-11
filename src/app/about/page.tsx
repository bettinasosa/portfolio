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
import SkillsCloud from '@/components/about/SkillsCloud';
import GitHubContributionsGraph from '@/app/about/githubActivity';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

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
      <Layout title="About Me" center>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="grid gap-8 py-12 md:gap-12 lg:grid-cols-5 lg:gap-16">
            <AnimatedSection
              animation="fade-right"
              className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
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
                    Beyond Code
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    I speak at IRL developer events, I write technical posts,
                    run hands-on workshops, and run a devRel Guild. I thrive at
                    the intersection of technical depth, creative
                    problem-solving, and community building.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

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
                  , I studied design engineering, a unique program bridging
                  creative thinking, design, and engineering, teaching us the
                  full process of building a technical product from concept to
                  launch.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects/m31"
                    className="group inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-600 transition-all hover:bg-amber-500/20"
                  >
                    🏆 Andromeda — Creative Conscience Gold
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/projects/axo"
                    className="group inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-600 transition-all hover:bg-pink-500/20"
                  >
                    🏛️ AxoWear — Design Museum London
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Journey Section */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Where I&apos;ve Been
                </h2>
              </div>
            </AnimatedSection>
            <JourneyTimeline />
          </section>

          {/* Skills Section */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Tools & Technologies
                </h2>
              </div>
            </AnimatedSection>
            <SkillsCloud />
          </section>

          {/* GitHub Activity Section */}
          {!githubLoading && !githubError && githubData && (
            <section className="py-16">
              <AnimatedSection animation="fade-up">
                <Link
                  href="https://github.com/bettinasosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.01]"
                >
                  <GitHubContributionsGraph
                    contributions={githubData.contributions}
                    totalContributions={githubData.totalContributions}
                    restrictedContributions={githubData.restrictedContributions}
                  />
                </Link>
              </AnimatedSection>
            </section>
          )}

          {/* Spotify Section */}
          {!spotifyLoading && !spotifyError && playlists.length > 0 && (
            <section className="py-16">
              <AnimatedSection animation="fade-up">
                <SpotifyPlaylists playlists={playlists} />
              </AnimatedSection>
            </section>
          )}
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}
