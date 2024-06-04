import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const bottomLinks = [
  {
    header: 'Social',
    links: [
      {
        name: 'Github',
        href: 'https://github.com/bettinasosa',
        isExternal: true
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/bettysrohl',
        isExternal: true
      }
    ]
  },
  {
    header: 'Links',
    links: [
      {
        name: 'Home',
        href: '/',
        isExternal: false
      },
      {
        name: 'Pages',
        href: '/about',
        isExternal: false
      },
      {
        name: 'Projects',
        href: '/projects',
        isExternal: false
      },
      {
        name: 'Contact',
        href: '/contact',
        isExternal: false
      }
    ]
  },
  {
    header: 'Extras',
    links: [
      {
        name: '404',
        href: '/404',
        isExternal: false
      },
      {
        name: 'Styleguide',
        href: '/styleguide',
        isExternal: false
      },
      {
        name: 'Privacy',
        href: '/privacy',
        isExternal: false
      }
    ]
  }
];

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#4E4E5A] px-12 py-8">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="mt-10 text-[14vw] leading-[0.8]">Footer</h1>
      <p>© 2024 Bettina Sosa</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start gap-6 sm:gap-8">
            <img
              className="size-8 w-auto"
              src="/assets/logo.jpg"
              alt="Bettina Sosa"
            />
            <p className="text-base text-primary">
              AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder |
              Passionate about using technology to make the world a better
              place.
            </p>
          </div>

          <div className="grid max-w-xl flex-1 grid-cols-3 gap-8">
            {bottomLinks.map((group) => (
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium">{group.header}</p>
                <div className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary dark:focus-visible:outline-primary"
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener' : undefined}
                    >
                      {link.name}
                      {link.isExternal && <ExternalLink />}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
