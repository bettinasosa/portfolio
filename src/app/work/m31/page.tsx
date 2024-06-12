'use client';
import ProjectHero from '@/app/work/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import Picture1 from './/../../../../public/assets/m31/controller.jpg';
import Picture3 from './/../../../../public/assets/m31/gold.webp';
import Picture2 from './/../../../../public/assets/m31/logoblack.png';
import Image from 'next/image';
import React from 'react';

export default function M31Project() {
  const researchAssets = [
    '/assets/m31/controller.png',
    '/assets/m31/app.png',
    '/assets/m31/packaging.png',
    '/assets/m31/research.png',
    '/assets/m31/specs.png'
  ];
  const introduction =
    'Andromeda is a new audio-tactile gaming system that promotes socially inclusive play between visually impaired and sighted individuals. ' +
    'It expands the non-visual output of existing games, opening up the possibility for ' +
    'people with severe visual impairments to explore digital spaces and experience games.';

  const description = 'Explore Worlds Through Feel and Sound';
  const myRole =
    'As a designer and full stack software engineer, I was involved in the project,' +
    'from the initial concept to the final launch. I worked closely with the team to develop the overall aesthetics,' +
    'brand identity, and UI/UX design of the product, as well as the engineering behind the audio-tactile gaming system.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'https://www.youtube.com/embed/bXaLimCtK50'}
        isImage={false}
        title={'M31'}
      />
      <PageScrollParallax
        title={'Expanding the Non-Visual Output of Games'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div>
        {researchAssets.map((asset, index) => (
          <Image
            key={index}
            src={asset}
            alt="Project specs"
            width={700}
            height={500}
            quality={100}
            layout="responsive"
          />
        ))}
      </div>
    </div>
  );
}
