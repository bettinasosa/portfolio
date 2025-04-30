'use client';

import { type BlogPost } from '../types';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        x: index % 2 === 0 ? 5 : -5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="group relative h-full"
    >
      <Link
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-full overflow-hidden rounded-xl bg-white dark:bg-zinc-900">
          {post.heroImage && !imageError ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                unoptimized
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium dark:bg-zinc-800/90">
                  {formatDistanceToNow(new Date(post.publishedAt), {
                    addSuffix: true
                  })}
                </span>
              </div>
            </div>
          ) : null}

          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold leading-tight">
              {post.title}
            </h2>
            <p className="line-clamp-3 text-muted-foreground">{post.content}</p>
          </div>

          <motion.div
            className="absolute right-2 top-2"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
