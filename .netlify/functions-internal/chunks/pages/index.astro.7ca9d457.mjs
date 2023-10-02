/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.11cd3780.mjs';
import 'html-escaper';
/* empty css                           */import { $ as $$Layout } from './404.astro.a94a0438.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         */
const $$Astro$6 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">About</h2>
      <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
        <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
          I am a software engineer with a passion for innovation and
          cutting-edge technology. I am currently the founding full stack
          software engineer @Catapult a DeFi startup.
        </p>
        <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
          I am particularly interested in the intersection of art, design, and
          software, and I believe that these disciplines can be combined to
          create truly transformative experiences.
        </p>
        <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
          My projects have received multiple awards in the past, and I am always
          looking for new and innovative ways to use my skills to make a
          positive impact on the world.
        </p>
        <a href="/about" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
          Behind the Scenes
        </a>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/About.astro", void 0);

const $$Astro$5 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 dark:bg-primary-400/10 sm:gap-10">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
          Let's chat!
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-primary-950/70 dark:text-primary-200/70">
          I'm always looking for new and innovative ways to use my skills. Let's
          collaborate!
        </p>
      </div>
      <a href="/contact" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
        Contact me
      </a>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/Cta.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-start gap-8 sm:gap-10">
        <div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
          <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Hello I am
            <p>Bettina Sosa</p>
          </h1>
          <p class="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
            Cutting Edge Creative
          </p>
        </div>
        <a href="/projects" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
          Explore projects
        </a>
      </div>

      <div class="w-full rounded-3xl">
        <iframe src="https://player.vimeo.com/video/362997602?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0" class="aspect-video h-full w-full rounded-3xl" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      
    </div>
  </div>
</section>`;
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
                 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
  ${ButtonText}
</a>`;
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
  return renderTemplate(_a || (_a = __template(["", '<div style="--swiper-navigation-color: #64748b; --swiper-pagination-color: #64748b" class="swiper mySwiper">\n  <div class="swiper-wrapper">\n    ', `
      </div>

  <div class="swiper-pagination"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"><\/script>
<script>
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
<\/script></div>`])), maybeRenderHead(), slides.map((item) => renderTemplate`<div class="swiper-slide">
          <div class="rounded-3xl p-8 grid grid-cols-2 space-x-14 h-full ">
              <img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="300" height="300"${addAttribute(item.image, "src")} alt="Our experts working together">
          <div class="grid-rows-4 grid">
            <div class="row-span-4">
              <h2 class="text-xl font-medium">${item.name}</h2>
              <p class="text-primary-950/70 dark:text-primary-200/70 mt-6">${item.description}</p>
            </div>
            <div>
              <div class="max-w-xs">
            ${renderComponent($$result, "Button", $$Button, { "link": item.link, "ButtonText": "View project" })}</div>
            </div>
          </div>
        </div>
        </div>`));
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
    <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Projects</h2>
    ${renderComponent($$result, "ProjectSwiper", $$ProjectSwiper, { "slides": projects })}
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "My personal portfolio website." }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "Projects", $$Projects, {})}
  
  ${renderComponent($$result2, "About", $$About, {})}
  
  ${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
