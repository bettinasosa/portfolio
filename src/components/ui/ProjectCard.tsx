'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';
import { formatDistanceToNow } from 'date-fns';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
  tags?: string[];
  publishedAt?: Date;
  index?: number;
  external?: boolean;
  animated?: boolean;
  imageClassName?: string;
  buttonText?: string;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      id,
      title,
      description,
      imagePath,
      link,
      tags = [],
      publishedAt,
      index = 0,
      external = true,
      animated = false,
      imageClassName = '',
      buttonText = 'View Project'
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const cardContent = (
      <>
        <div className="relative h-60 w-full overflow-hidden">
          {imagePath && !imageError ? (
            <Image
              src={imagePath}
              alt={title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-zinc-800">
              <span className="text-gray-400">No image</span>
            </div>
          )}

          {publishedAt && (
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium dark:bg-zinc-800/90">
                {formatDistanceToNow(publishedAt, { addSuffix: true })}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-zinc-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-200 dark:hover:bg-zinc-800">
            {buttonText}
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </>
    );

    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    if (animated) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 300 }
          }}
          className="group h-full"
        >
          <Link href={link} {...linkProps} className="block h-full">
            <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              {cardContent}
            </div>
          </Link>
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
      >
        <Link href={link} {...linkProps} className="block h-full">
          {cardContent}
        </Link>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
