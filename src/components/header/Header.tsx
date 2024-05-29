import React, { useState } from 'react';

interface Link {
  href: string;
  ref: string;
  name: string;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links: Link[] = [
    // Add your navigation links here
    { href: '/', ref: '01', name: 'Home' },
    { href: '/about', ref: '02', name: 'About' }
    // ...
  ];

  return (
    <div className="bg-background h-10 w-full opacity-10">
      <div className=" mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <a
            href="/public"
            className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200"
          >
            <span className="sr-only">Bettina</span>
            <img
              className="h-8 w-auto"
              width="65"
              height="40"
              src="/assets/logo.jpg"
              alt="Bettina"
            />
          </a>
        </div>

        <div className="-mr-2 flex items-center space-x-1 sm:space-x-2">
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-950 ring-primary-950 transition hover:bg-primary-500/10 focus:outline-none focus-visible:ring-2 dark:text-primary-200 dark:hover:bg-primary-400/10"
            // Add theme toggle functionality here
          >
            <span className="sr-only">Toggle theme mode</span>
            {/* Add theme toggle icons here */}
          </button>

          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-950 ring-primary-950 transition hover:bg-primary-500/10 focus:outline-none focus-visible:ring-2 dark:text-primary-200 dark:hover:bg-primary-400/10"
            onClick={() => setOpen(!open)}
            aria-controls="website-menu"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className={`h-8 w-8 ${open ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
            </svg>
            <svg
              className={`h-8 w-8 ${open ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`z-20 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ${
          open ? 'block' : 'hidden'
        }`}
        id="website-menu"
      >
        <div className="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12">
          <div className="hidden items-center justify-center rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10 lg:flex">
            <p className="max-w-sm text-xl italic leading-loose text-primary-950/70 dark:text-primary-200/70">
              <span className="font-medium">Bettina</span> is a full stack
              software engineer.
            </p>
          </div>

          <nav className="flex flex-col gap-1 divide-y divide-primary-900/10 dark:divide-primary-300/10">
            {links.map((link) => (
              <a
                key={link.ref}
                href={link.href}
                className="group inline-flex py-3 text-2xl font-medium tracking-tight text-primary-950 transition focus-visible:outline-none dark:text-primary-200 sm:py-4 sm:text-3xl"
              >
                <div className="flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200">
                  <div className="flex items-center gap-6">
                    <span className="text-xs">{link.ref}</span>
                    <span className="group-hover:underline">{link.name}</span>
                  </div>
                  <svg
                    className="h-6 w-6 text-primary-600 dark:text-primary-400 sm:h-8 sm:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                  </svg>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
