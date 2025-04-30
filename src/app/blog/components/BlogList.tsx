'use client';

import { type BlogPost } from '../types';
import { BlogPostCard } from './BlogPostCard';
import { motion } from 'framer-motion';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No posts found</p>
      </div>
    );
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="space-y-12">
      <motion.div
        className="flex items-baseline justify-between"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl font-bold tracking-tight">New Posts</h1>
        <a href="#" className="text-base underline underline-offset-4">
          view more
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
