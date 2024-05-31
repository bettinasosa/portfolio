'use client';
import { useState } from 'react';
import Modal from '@/components/projects/modal';
import Project from '@/components/projects/project';
import Link from 'next/link';

const index = [
  {
    title: 'M31 Controller',
    src: 'm31/controller.jpg',
    description:
      'A video/audio game controller to make digital entertainment more approachable to those with visual impairments.',
    href: '/projects/m31',
    color: '#000000'
  },
  {
    title: 'AXO',
    src: 'axo/astra.png',
    href: '/projects/axo',
    color: '#303030'
  },
  {
    title: 'StackeRs',
    description:
      'Reusable packaging made of highly recyclable materials for baby bathing products.',
    src: 'bottles/block.png',
    href: '/projects/stackers',
    color: '#EFE8D3'
  },
  {
    title: 'ASTRA',
    description: 'An interstellar games arcade with a hollogramic screen.',
    src: 'astra/astra.png',
    href: '/projects/astra',
    color: '#303030'
  },
  {
    title: 'DAO social network',
    src: 'sojo/astra.png',
    href: '/projects/catapult-v1',
    color: '#303030'
  },
  {
    title: 'SOJO',
    src: 'sojo/astra.png',
    href: '/projects/sojo',
    color: '#303030'
  },
  {
    title: 'JENGA',
    src: 'jenga.jpg',
    href: '/projects/robot-jenga',
    color: '#706D63'
  },
  {
    title: 'Woody',
    src: 'woody.jpg',
    href: '/projects/woody',
    color: '#706D63'
  },
  {
    title: 'DAFT(PUNK)BOT',
    src: 'cubo/cubo.jpg',
    href: '/projects/cubo',
    color: '#EFE8D3'
  },
  {
    title: 'Tandem bike',
    src: 'bike.png',
    href: '/projects/tandem-bike',
    color: '#EFE8D3'
  },
  {
    title: 'TETRIS',
    src: 'tetris.png',
    href: '/projects/tetris',
    color: '#EFE8D3'
  }
];

export default function HomePage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="m-0">
      <div className="m-0 overflow-hidden">
        {index.map((project, index) => {
          return (
            <Link href={project.href}>
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            </Link>
          );
        })}
      </div>
      <Modal modal={modal} projects={index} />
    </main>
  );
}
