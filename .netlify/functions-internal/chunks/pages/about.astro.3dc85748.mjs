/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.11cd3780.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.a94a0438.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         */
const $$Astro$2 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
        About
      </h1>
      <p class="mx-auto max-w-xl text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
        Cutting Edge Creative
      </p>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/about/Heading.astro", void 0);

const $$Astro$1 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <img class="mx-auto mt-20 h-auto w-full max-w-xl rounded-3xl" width="1440" height="1800" src="/assets/profile.jpg" alt="Our experts working together">
      <div class="flex flex-col gap-10">
        <!-- Mission description -->
        <div class="space-y-8 sm:space-y-12">
          <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
            About me
          </h2>
          <div class="space-y-6">
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              I'm Bettina Sosa, a software engineer with a passion for
              innovation and cutting-edge technology. I have a strong track
              record of building and deploying successful products.
            </p>
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              At Sojo, I was the founding full-stack engineer, responsible for
              the design, development, and deployment of the company's core
              platform. I built a scalable and user-friendly app that allowed
              users to order custom-made clothing online.
            </p>
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              After Sojo, I joined Catapult Labs, a startup that is building a
              new DeFi protocol, as a founding full-stack software engineer. I
              played a key role in the development of the company's flagship
              product, a Web3 profiles platform that enables networking in the
              decentralized space.
              <!--Additionally, I developed one of the richest-->
              <!--NFT galleries in the Web3 space.-->
            </p>
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              In recent months, I have been working on developing innovative
              blockchain-based financial solutions. I have also been learning
              Solidity, the programming language used to develop smart
              contracts.
            </p>
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              Outside of work, I enjoy cooking, painting, running long
              distances, and coding personal projects.
            </p>
            <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
              At Imperial College London, I studied design engineering. During
              my time at university, I worked on a number of projects, including
              Andromeda, which was awarded a gold prize in the Creative
              Conscience Awards, and AXOWear, which was exhibited at the Design
              Museum London.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/about/About.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "More about me.", "title": "About \xB7 Bettina" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Heading", $$Heading, {})}
  ${renderComponent($$result2, "Mission", $$About$1, {})}
  
  
` })}

<!--add a link to my cv and my portfolio-->`;
}, "/Users/bettinasosa/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
