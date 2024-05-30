import React from 'react';

interface Project {
  image: string;
  features: string[];
  name: string;
  link: string;
  description: string;
  tag: string;
  isFlagged?: boolean;
}

export default function ProjectsHome() {
  const projects: Project[] = [
    {
      name: 'M31 Controller',
      description:
        'A video/audio game controller to make digital entertainment more approachable to those with visual impairments.',
      image: '/assets/m31/controller.jpg',
      tag: '',
      link: 'projects/m31',
      features: []
    },
    {
      name: 'ASTRA',
      description: 'An interstellar games arcade with a hollogramic screen.',
      isFlagged: true,
      image: '/assets/astra/astra.png',
      tag: '',
      link: '/projects/astra',
      features: []
    },
    {
      name: 'StackeRs',
      description:
        'Reusable packaging made of highly recyclable materials for baby bathing products.',
      image: '/assets/bottles/block.jpg',
      tag: '',
      link: '/projects/stackers',
      features: []
    }
  ];

  return (
    <div className="py-16 sm:py-20">
      <h1 className="pb-14 text-[10rem] font-medium">My Work</h1>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="-mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3">
          {projects.map((item) => (
            <div
              key={item.name}
              className={`relative flex flex-col gap-8 rounded-3xl p-8 ${
                item.isFlagged ? 'bg-primary dark:bg-primary' : ''
              }`}
            >
              <div className="flex-1">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-medium tracking-tight">
                    {item.tag}
                  </span>
                  <img
                    className="mx-auto h-auto w-full max-w-xl rounded-3xl"
                    width="576"
                    height="864"
                    src={item.image}
                    alt="Our experts working together"
                  />
                </p>
                <p className="mt-6 text-primary dark:text-primary">
                  {item.description}
                </p>
              </div>
              <a
                href={item.link}
                className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-primary dark:hover:bg-primary dark:focus-visible:outline-primary"
              >
                View project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
