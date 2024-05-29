export function About() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            About
          </h2>
          <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
            <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              I am a software engineer with a passion for innovation and
              cutting-edge technology. I am currently the founding full stack
              software engineer @Catapult a DeFi startup.
            </p>
            <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              I am particularly interested in the intersection of art, design,
              and software, and I believe that these disciplines can be combined
              to create truly transformative experiences.
            </p>
            <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              My projects have received multiple awards in the past, and I am
              always looking for new and innovative ways to use my skills to
              make a positive impact on the world.
            </p>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
            >
              Behind the Scenes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
