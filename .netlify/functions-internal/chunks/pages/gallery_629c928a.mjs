/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_d3200be8.mjs';
import 'clsx';
import { $ as $$Layout } from './404_82dd810c.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                             */import { FreeMode } from 'swiper/modules';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, className, input, bgImage } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return /* @__PURE__ */ jsxs("div", { ref: tilt, className, children: [
    bgImage && /* @__PURE__ */ jsx("img", { src: `${bgImage}`, alt: "artwork", className: "object-cover" }),
    input && /* @__PURE__ */ jsx("div", { children: input })
  ] });
}

const $$Astro$3 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${title}</h1><p class="mx-auto max-w-xl text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">${description}</p></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/Heading.astro", void 0);

const $$Astro$2 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 dark:bg-primary-400/10 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
Let's chat!
</h2><p class="mx-auto max-w-2xl text-lg text-primary-950/70 dark:text-primary-200/70">
I'm always looking for new and innovative ways to use my skills. Let's
          collaborate!
</p></div><a href="/contact" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Contact me
</a></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/home/Cta.astro", void 0);

function ArtworkCarousel(props) {
  const { slides } = props;
  const options = {
    scale: 1.4,
    speed: 800,
    max: 30,
    glare: true
  };
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      slidesPerView: 3.5,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        clickable: true
      },
      modules: [FreeMode],
      className: "mt-10 content-center items-center justify-center overflow-visible",
      children: slides.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
        Tilt,
        {
          className: "shadow-3xl z-10 m-10 overflow-hidden rounded-3xl bg-cover",
          input: "",
          options,
          bgImage: item
        }
      ) }, item))
    }
  );
}

const $$Astro$1 = createAstro();
const $$Subheading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Subheading;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-4 sm:py-2"><div class="mx-5 max-w-2xl px-2 sm:px-4 lg:max-w-6xl lg:px-6"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">${title}</h1><p class="max-w-xl text-base text-primary-950/70 dark:text-primary-200/70">${description}</p></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/layout/Subheading.astro", void 0);

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Art gallery" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, { "title": "Gallery", "description": "artwork" })}${renderComponent($$result2, "Subheading", $$Subheading, { "title": "Fashion drawings", "description": "Cheers collection" })}${renderComponent($$result2, "ArtworkCarousel", ArtworkCarousel, { "slides": [
    "/assets/dresses/dress1.jpg",
    "/assets/dresses/dress2.jpg",
    "/assets/dresses/dress3.jpg",
    "/assets/dresses/dress4.jpg"
  ], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bettinasosa/portfolio/src/components/artworks/ArtworkCarousel", "client:component-export": "default" })}${renderComponent($$result2, "Subheading", $$Subheading, { "title": "Posters", "description": "Collection of event posters" })}${renderComponent($$result2, "ArtworkCarousel", ArtworkCarousel, { "slides": [
    "/assets/posters/talksposter.jpg",
    "/assets/posters/cheesew.jpg",
    "/assets/posters/coffee.jpg",
    "/assets/posters/teacoffee.jpg",
    "/assets/posters/cheese-w.jpg"
  ], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bettinasosa/portfolio/src/components/artworks/ArtworkCarousel", "client:component-export": "default" })}${renderComponent($$result2, "Subheading", $$Subheading, { "title": "Artwork", "description": "Mixed media content" })}${renderComponent($$result2, "ArtworkCarousel", ArtworkCarousel, { "slides": ["/assets/art/draw1.png", "/assets/art/draw2.png"], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bettinasosa/portfolio/src/components/artworks/ArtworkCarousel", "client:component-export": "default" })}${renderComponent($$result2, "Cta", $$Cta, {})}` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/gallery.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/gallery.astro";
const $$url = "/gallery";

const gallery = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Cta as $, Tilt as T, $$Heading as a, gallery as g };
