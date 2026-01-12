'use client';

import { motion } from 'framer-motion';

interface SectionHeroProps {
  title: string;
  subtitle: string;
}

/**
 * Reusable hero section with dark gradient background.
 * Used for blog, gallery, and other section pages.
 */
export function SectionHero({ title, subtitle }: SectionHeroProps) {
  return (
    <motion.div
      className="relative mb-16 overflow-hidden rounded-2xl bg-zinc-900 py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-purple-800/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-zinc-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
