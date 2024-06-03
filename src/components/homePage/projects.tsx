import React from 'react';
import ProjectSwiper from '../swiper/ProjectSwiper';

interface Project {
  name: string;
  description: string;
  image: string;
  tag: string;
  link: string;
  features: string[];
  isFlagged?: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      name: 'M31 Controller',
      description:
        'A video/audio game controller to make digital entertainment more approachable to those with\n' +
        '                  visual impairments.',
      image: '/assets/m31/controller.jpg',
      tag: '',
      link: 'projectPage/m31',
      features: []
    },
    {
      name: 'StackeRs',
      description:
        'Reusable packaging made of highly recyclable materials for baby bathing products.',
      image: '/assets/bottles/block.jpg',
      tag: '',
      link: '/projectPage/stackers',
      features: []
    },
    {
      name: 'ASTRA',
      description: 'An interstellar games arcade with a hollogramic screen.',
      isFlagged: true,
      image: '/assets/astra/astra.png',
      tag: '',
      link: '/projectPage/astra',
      features: []
    }
  ];

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Projects
        </h2>
        <ProjectSwiper slides={projects} />
      </div>
    </div>
  );
}
