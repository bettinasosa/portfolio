import React from 'react';

export default function Cta() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
              Let's chat!
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
              I'm always looking for new and innovative ways to use my skills.
              Let's collaborate!
            </p>
          </div>
          <a
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}
