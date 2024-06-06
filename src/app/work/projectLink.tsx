'use client';
import React from 'react';

interface Props {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  tag: string;
}

export default function ProjectLink({ index, title, setModal, tag }: Props) {
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
