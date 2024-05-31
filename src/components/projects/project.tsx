'use client';
import React from 'react';

interface Props {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

export default function Project({ index, title, setModal }: Props) {
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
      <h2 className="m-0 text-6xl font-normal transition-all duration-300 hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="font-light transition-all duration-300 hover:translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
}
