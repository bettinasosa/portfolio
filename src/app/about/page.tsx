import React from 'react';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout title={'About Me'}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Image
            className="mx-auto h-auto w-full max-w-xl rounded-3xl"
            width="1440"
            height="1800"
            src="/assets/profile.jpg"
            alt="profle picture"
          />
          <div className="flex flex-col gap-10">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6">
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  I&apos;m Bettina Sosa, a software engineer with a passion for
                  innovation and cutting-edge technology. I have a strong track
                  record of building and deploying successful products.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  At Sojo, I was the founding full-stack engineer, responsible
                  for the design, development, and deployment of the
                  company&apos;s core platform. I built a scalable and
                  user-friendly app that allowed users to order custom-made
                  clothing online.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  After Sojo, I joined Catapult Labs, a startup that is building
                  a new DeFi protocol, as a founding full-stack software
                  engineer. I played a key role in the development of the
                  company&apos;s flagship product, a Web3 profiles platform that
                  enables networking in the decentralized space.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  In recent months, I have been working on developing innovative
                  blockchain-based financial solutions. I have also been
                  learning Solidity, the programming language used to develop
                  smart contracts.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Outside of work, I enjoy cooking, painting, running long
                  distances, and coding personal projects.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  At Imperial College London, I studied design engineering.
                  During my time at university, I worked on a number of
                  projects, including Andromeda, which was awarded a gold prize
                  in the Creative Conscience Awards, and AXOWear, which was
                  exhibited at the Design Museum London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
