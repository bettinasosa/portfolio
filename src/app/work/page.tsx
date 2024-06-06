'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/work/projectLink';
import Modal from '@/app/work/work/modal';
import Layout from '@/components/layout';

const projects = [
  {
    title: 'M31 Controller',
    src: 'm31/controller.jpg',
    description:
      'A video/audio game controller to make digital entertainment more approachable to those with visual impairments.',
    href: '/work/m31',
    tag: 'Prototyping',
    color: '#000000'
  },
  {
    title: 'AXO',
    src: 'axo/astra.png',
    href: '/work/axo',
    tag: 'Bio Materials',
    color: '#303030'
  },
  {
    title: 'StackeRs',
    description:
      'Reusable packaging made of highly recyclable materials for baby bathing products.',
    src: 'bottles/block.png',
    href: '/work/stackers',
    tag: 'Packaging',
    color: '#EFE8D3'
  },
  {
    title: 'ASTRA',
    description: 'An interstellar games arcade with a hollogramic screen.',
    src: 'astra/astra.png',
    href: '/work/astra',
    tag: 'GIZMO',
    color: '#303030'
  },
  {
    title: 'DAO social network',
    src: 'sojo/astra.png',
    href: '/work/catapult-v1',
    tag: 'Software',
    color: '#303030'
  },
  {
    title: 'SOJO',
    src: 'sojo/astra.png',
    href: '/work/sojo',
    tag: 'Software',
    color: '#303030'
  },
  {
    title: 'JENGA',
    src: 'jenga.jpg',
    href: '/work/robot-jenga',
    tag: 'Robotics',
    color: '#706D63'
  },
  {
    title: 'Woody',
    src: 'woody.jpg',
    href: '/work/woody',
    tag: 'Electronics',
    color: '#706D63'
  },
  {
    title: 'DAFT(PUNK)BOT',
    src: 'cubo/cubo.jpg',
    href: '/work/cubo',
    tag: 'Electronics',
    color: '#EFE8D3'
  },
  {
    title: 'Tandem bike',
    src: 'bike.png',
    href: '/work/tandem-bike',
    tag: 'CAD & optimisation',
    color: '#EFE8D3'
  },
  {
    title: 'TETRIS',
    src: 'tetris.png',
    href: '/work/tetris',
    tag: 'Software',
    color: '#EFE8D3'
  }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <Layout title={'My Work'}>
      <div className="m-0">
        <div className="m-0 overflow-hidden">
          {projects.map((project, index) => {
            return (
              <Link href={project.href}>
                <ProjectLink
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                  tag={project.tag}
                />
              </Link>
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </Layout>
  );
}
