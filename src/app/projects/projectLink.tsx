'use client';
import React, { useContext } from 'react';
import { ModalContext } from '@/app/projects/modalContext';

interface Props {
  index: number;
  title: string;
  tag: string;
}

export default function ProjectLink({ index, title, tag }: Props) {
  const { setModal } = useContext(ModalContext);

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="align-center flex w-full cursor-pointer justify-between border-b border-b-gray-600
      px-5 py-10 transition-all duration-200 hover:opacity-50"
    >
      <h2 className="m-0 text-xl font-normal transition-all duration-300 hover:translate-x-[-10px] lg:text-6xl">
        {title}
      </h2>
      <p className="text-sm font-light transition-all duration-300 hover:translate-x-[10px]">
        {tag}
      </p>
    </div>
  );
}
