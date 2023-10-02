/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.11cd3780.mjs';
import 'html-escaper';
import { $ as $$Cta } from './m31.md.d95f1b81.mjs';
import { $ as $$Layout } from './404.astro.a94a0438.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           *//* empty css                         */
const $$Astro$2 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Projects</h1>
      <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
        Catalogue of past projects.
      </p>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/Heading.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectsHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectsHome;
  const projects = [
    {
      name: "M31 Controller",
      description: "A video/audio game controller to make digital entertainment more approachable to those with\n                  visual impairments.",
      image: "/assets/m31/controller.jpg",
      tag: "",
      link: "projects/m31",
      features: []
    },
    {
      name: "ASTRA",
      description: "An interstellar games arcade with a hollogramic screen.",
      isFlagged: true,
      image: "/assets/astra.png",
      tag: "",
      link: "/projects/astra",
      features: []
    },
    {
      name: "StackeRs",
      description: "Reusable packaging made of highly recyclable materials for baby bathing products.",
      image: "/assets/block.jpg",
      tag: "",
      link: "/projects/stackers",
      features: []
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="-mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3">
      ${projects.map((item) => renderTemplate`<div${addAttribute([
    "relative flex flex-col gap-8 rounded-3xl p-8",
    item?.isFlagged && "bg-primary-500/10 dark:bg-primary-400/10"
  ], "class:list")}>
            <div class="flex-1">
              <h2 class="text-xl font-medium">${item.name}</h2>
              <p class="mt-4 flex items-baseline">
                <span class="text-4xl font-medium tracking-tight">${item.tag}</span>
                <img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="576" height="864"${addAttribute(item.image, "src")} alt="Our experts working together">
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 mt-6">${item.description}</p>

              <ul role="list" class="mt-6 space-y-6">
                ${item.features.map((feature) => renderTemplate`<li class="flex gap-3">
                    <svg class="text-primary-600 dark:text-primary-400 h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <span>${feature}</span>
                  </li>`)}
              </ul>
            </div>
            <a${addAttribute(item.link, "href")} class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex w-full items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              View project
            </a>
          </div>`)}
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/projectsHome.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Find the pricing plan that best fits your needs. Plans include seats, projects, support and more", "title": "Projects \xB7 Bettina" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Heading", $$Heading, {})}
  ${renderComponent($$result2, "ProjectsTable", $$ProjectsHome, {})}
  
  ${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
