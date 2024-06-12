import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Body({
  description,
  text,
  body
}: {
  description: string;
  text: string;
  body: { title: string; src: string }[];
}) {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const projectList = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: 'top',
      end: () => `+=${projectList.current?.offsetHeight! - 100}`
    });
  }, []);

  return (
    <div ref={container} className="relative mt-[25vh] px-[10%] py-[10%]">
      <div className="flex h-[700px] w-full justify-between gap-[5%]">
        <div ref={imageContainer} className="relative h-full w-[40%]">
          <Image
            src={`/images/${body[selectedProject].src}`}
            fill
            alt="project image"
            priority
            className="object-cover"
          />
        </div>
        <div className="flex w-[60%] flex-col">
          <div className="flex h-full text-[1.6vw] text-background mix-blend-difference">
            <p>{description}</p>
          </div>
          <div className="align flex h-full w-[70%] self-end text-[1vw] text-background mix-blend-difference">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div ref={projectList} className="relative mt-[200px] flex flex-col">
        {body.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setSelectedProject(index)}
            className="flex w-full cursor-default justify-end border-b border-white text-[3vw] uppercase text-background mix-blend-difference"
          >
            <h2 className="my-[40px] mb-[20px]">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
