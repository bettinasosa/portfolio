import React from 'react';
import ProjectsPage from '../../components/projects';

export default function ProjectsHome() {
  return (
    <div className="pt-20 lg:pt-40">
      <h1 className="pb-14 text-6xl font-medium lg:text-[10rem]">My Work</h1>
      <ProjectsPage />
    </div>
  );
}
