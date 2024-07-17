'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'M31 Controller',
    src: 'm31/controller.jpg',
    description:
      'A video/audio game controller to make digital entertainment more approachable to those with visual impairments.',
    href: '/projects/m31',
    tag: 'Prototyping',
    color: '#000000'
  },
  {
    title: 'AXO',
    src: 'axo/astronaut-square.png',
    href: '/projects/axo',
    tag: 'Bio Materials',
    color: '#ee5622'
  },
  {
    title: 'StyleSync',
    src: 'stylesync/stylesync.png',
    href: '/projects/stylesync',
    tag: 'ML / AI',
    color: 'pink'
  },
  {
    title: 'StackeRs',
    description:
      'Reusable packaging made of highly recyclable materials for baby bathing products.',
    src: 'bottles/block.png',
    href: '/projects/stackers',
    tag: 'Packaging',
    color: '#EFE8D3'
  },
  {
    title: 'ASTRA',
    description: 'An interstellar games arcade with a hologram screen.',
    src: 'astra/astra.png',
    href: '/projects/astra',
    tag: 'GIZMO',
    color: '#303030'
  }

  // {
  //   title: 'DAO social network',
  //   src: 'sojo/astra.png',
  //   href: '/projects/catapult-v1',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {
  //   title: 'SOJO',
  //   src: 'sojo/astra.png',
  //   href: '/projects/sojo',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {
  //   title: 'JENGA',
  //   src: 'jenga.jpg',
  //   href: '/projects/robot-jenga',
  //   tag: 'Robotics',
  //   color: '#706D63'
  // },
  // {
  //   title: 'Woody',
  //   src: 'woody.jpg',
  //   href: '/projects/woody',
  //   tag: 'Electronics',
  //   color: '#706D63'
  // },
  // {
  //   title: 'DAFT(PUNK)BOT',
  //   src: 'cubo/cubo.jpg',
  //   href: '/projects/cubo',
  //   tag: 'Electronics',
  //   color: '#EFE8D3'
  // },
  // {
  //   title: 'Tandem bike',
  //   src: 'bike.png',
  //   href: '/projects/tandem-bike-bike',
  //   tag: 'CAD & optimisation',
  //   color: '#EFE8D3'
  // },
  // {
  //   title: 'TETRIS',
  //   src: 'tetris.png',
  //   href: '/projects/tetris',
  //   tag: 'Software',
  //   color: '#EFE8D3'
  // }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title={'My Work'}>
        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              );
            })}
          </div>
          <Modal projects={projects} />
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
