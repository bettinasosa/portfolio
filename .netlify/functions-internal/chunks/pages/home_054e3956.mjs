/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_d3200be8.mjs';
import 'clsx';
import { $ as $$Layout } from './404_82dd810c.mjs';
import { $ as $$Cta } from './gallery_629c928a.mjs';
/* empty css                          */import 'html-escaper';
/* empty css                           *//* empty css                         */import 'react/jsx-runtime';
import 'react';
import 'swiper/react';
/* empty css                             */import 'swiper/modules';
import 'vanilla-tilt';

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-3 lg:gap-8"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">About</h2><div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2"><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
I am a software engineer with a passion for innovation and
          cutting-edge technology. I am currently the founding full stack
          software engineer @Catapult a DeFi startup.
</p><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
I am particularly interested in the intersection of art, design, and
          software, and I believe that these disciplines can be combined to
          create truly transformative experiences.
</p><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
My projects have received multiple awards in the past, and I am always
          looking for new and innovative ways to use my skills to make a
          positive impact on the world.
</p><a href="/about" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Behind the Scenes
</a></div></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section><div class="gap-16"><div class="absolute bottom-0 flex w-full flex-col items-start gap-8 p-10 sm:gap-10"><div class="flex space-x-5"><a href="/projects" class="hover:bg-accent-300 focus-visible:outline-accent-400 inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 bg-opacity-50 bg-gradient-radial px-6 py-3 text-base font-medium text-white backdrop-blur-lg backdrop-filter transition hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Explore projects
</a><a href="/gallery" class="hover:bg-accent-300 focus-visible:outline-accent-400 inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 bg-opacity-50 bg-gradient-radial px-6 py-3 text-base font-medium text-white backdrop-blur-lg backdrop-filter transition hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Explore gallery
</a></div></div><div class="w-full rounded-3xl"><iframe src="https://player.vimeo.com/video/362997602?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0" class="aspect-video h-full w-full rounded-3xl" allow="autoplay; fullscreen" allowfullscreen></iframe></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, ButtonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="inline-flex w-full items-center justify-center rounded-full
                 border border-transparent bg-primary-600
                 px-4 py-2 text-base font-medium text-white transition
                 hover:bg-primary-700 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-primary-600
                 dark:bg-primary-400 dark:text-primary-950
                 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">${ButtonText}</a>`;
}, "/Users/bettinasosa/portfolio/src/components/Button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ProjectSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSwiper;
  const { slides } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div style="--swiper-navigation-color: #64748b; --swiper-pagination-color: #64748b" class="swiper mySwiper"><div class="swiper-wrapper">', `</div><div class="swiper-pagination"></div><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js">
<\/script><script>
  new Swiper('.swiper', {
    // slidesPerView: 1,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
<\/script></div>`])), maybeRenderHead(), slides.map((item) => renderTemplate`<div class="swiper-slide"><div class="rounded-3xl p-8 lg:grid lg:grid-cols-2 lg:space-x-14 h-full "><img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="300" height="300"${addAttribute(item.image, "src")} alt="project image"><div class="grid-rows-4 grid"><div class="row-span-4"><h2 class="text-xl font-medium">${item.name}</h2><p class="text-primary-950/70 dark:text-primary-200/70 mt-6">${item.description}</p></div><div class="max-w-xs pt-4">${renderComponent($$result, "Button", $$Button, { "link": item.link, "ButtonText": "View project" })}</div></div></div></div>`));
}, "/Users/bettinasosa/portfolio/src/components/swiper/ProjectSwiper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
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
      name: "StackeRs",
      description: "Reusable packaging made of highly recyclable materials for baby bathing products.",
      image: "/assets/bottles/block.jpg",
      tag: "",
      link: "/projects/stackers",
      features: []
    },
    {
      name: "ASTRA",
      description: "An interstellar games arcade with a hollogramic screen.",
      isFlagged: true,
      image: "/assets/astra/astra.png",
      tag: "",
      link: "/projects/astra",
      features: []
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Projects</h2>${renderComponent($$result, "ProjectSwiper", $$ProjectSwiper, { "slides": projects })}</div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "My personal portfolio website." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Projects", $$Projects, {})}${renderComponent($$result2, "About", $$About, {})}${renderComponent($$result2, "Cta", $$Cta, {})}` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/home.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/home.astro";
const $$url = "/home";

export { $$Home as default, $$file as file, $$url as url };
