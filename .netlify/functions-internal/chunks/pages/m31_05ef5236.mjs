/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, u as unescapeHTML } from '../astro_d3200be8.mjs';
import 'clsx';
import { $ as $$Layout } from './404_82dd810c.mjs';
/* empty css                          */import { T as Tilt } from './gallery_629c928a.mjs';

const $$Astro$4 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Want to know more?</h2><p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
Send me a message if you'd like to discuss a project.
</p></div><a href="/contact" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Contact me
</a></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/Cta.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProjectHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectHero;
  const { description, title, isImage, heroImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${title}</h1><p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">${description}</p></div></div><div class="w-full rounded-3xl">${{ isImage } == true ? renderTemplate`<img${addAttribute(heroImage, "src")} class="w-full h-full rounded-3xl" alt="hero image">` : renderTemplate`<iframe${addAttribute(heroImage, "src")} class="w-full h-full rounded-3xl aspect-video" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}</div></div></div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/projectHero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Swiper;
  const { slides } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div style="--swiper-navigation-color: #64748b; --swiper-pagination-color: #64748b" class="swiper mySwiper"><div class="swiper-wrapper max-h-3xl">', `</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"><\/script><script>
  new Swiper('.swiper', {
    // slidesPerView: 1,
    slidesPerView: 'auto',
    spaceBetween: 30,
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
    grabCursor: true,
    centeredSlides: true,
    effect: 'coverflow',
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
<\/script>`])), maybeRenderHead(), slides.map((slide) => renderTemplate`<img class="swiper-slide mx-auto h-auto w-full rounded-3xl" width="100" height="100"${addAttribute(slide, "src")} alt="Secondary image">`));
}, "/Users/bettinasosa/portfolio/src/components/swiper/Swiper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Body = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Body;
  const { subtitle, description, introduction, myRole, video, paragraphs, slides } = Astro2.props;
  const options = {
    scale: 1.4,
    speed: 800,
    max: 30,
    glare: true
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-14 sm:py-20"><div class="mx-auto max-w-2xl px-8 sm:px-12 lg:max-w-7xl lg:px-16 space-y-6"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${subtitle}</h2><div class="space-y-12"><p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">${introduction}</p><p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">${myRole}</p></div><div class="space-y-12 py-12">${renderComponent($$result, "Swiper", $$Swiper, { "slides": slides })}</div>${paragraphs.map(
    (paragraph) => renderTemplate`<div class="grid grid-cols-2 gap-10">${renderComponent($$result, "Tilt", Tilt, { "className": "shadow-3xl z-10 m-10 overflow-hidden rounded-3xl bg-cover", "input": "", "options": options, "bgImage": paragraph.images[0], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bettinasosa/portfolio/src/util/Tilt.jsx", "client:component-export": "default" })}<div class="space-y-6 sm:space-y-8"><h3 class="text-xl font-medium tracking-tight">${paragraph.title}</h3><p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">${paragraph.text}</p></div></div>`
  )}</div></section>`;
}, "/Users/bettinasosa/portfolio/src/components/projects/Body.astro", void 0);

const $$Astro = createAstro();
const $$MarkDownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkDownProjectLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "My personal portfolio website." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectHero", $$ProjectHero, { "title": frontmatter.title, "description": frontmatter.description, "isImage": frontmatter.isImage, "heroImage": frontmatter.image })}${renderComponent($$result2, "Body", $$Body, { "subtitle": frontmatter.subtitle, "description": frontmatter.description, "introduction": frontmatter.introduction, "myRole": frontmatter.myRole, "paragraphs": frontmatter.paragraphs, "secondaryImages": frontmatter.secondaryImages, "slides": frontmatter.slides })}${renderComponent($$result2, "Cta", $$Cta, {})}` })}`;
}, "/Users/bettinasosa/portfolio/src/layouts/MarkDownProjectLayout.astro", void 0);

const html = "";

				const frontmatter = {"layout":"../../layouts/MarkDownProjectLayout.astro","title":"Andromeda","subtitle":"Expanding the Non-Visual Output of Games","description":"Explore Worlds Through Feel and Sound","author":"Bettina Sosa","isImage":"false","image":"https://www.youtube.com/embed/bXaLimCtK50","slides":["/assets/m31/controller.jpg","/assets/m31/research.png","/assets/m31/specs.png","/assets/m31/controller.png"],"tags":["design","software","electronics"],"introduction":"Andromeda is a new audio-tactile gaming system that promotes socially inclusive play between visually impaired and sighted individuals. It expands the non-visual output of existing games, opening up the possibility for people with severe visual impairments to explore digital spaces and experience games.","myRole":"As a web designer and full stack software engineer, I was heavily involved in all aspects of the Andromeda project, from the initial concept to the final launch. I worked closely with the team to develop the overall aesthetics, brand identity, and user interface/user experience (UI/UX) design of the product, as well as the engineering of the audio-tactile gaming system.","paragraphs":[{"title":"","images":["/assets/m31/gold.webp"],"text":"Andromeda is a truly innovative product that has the potential to make a real difference in the lives of people with disabilities. I am proud of my work on this project, and I am excited to continue using my skills to create products that make the world a more inclusive place. In addition to my technical skills, I also brought my creativity and passion for social impact to the Andromeda project."},{"title":"The Andromeda app","images":["/assets/m31/app.png"],"text":"The Andromeda App is the central hub for discovering Andromeda-supported games, finding other players, and learning how to use Controller M31. We chose to develop an app because it is the most accessible and user-friendly way to communicate the necessary information to our target audience."},{"title":"Packaging design","images":["/assets/m31/packaging.png","/assets/m31/package.jpg"],"text":"We conducted user interviews to gain insights into how to make the packaging for Controller M31 fun, easy to unbox, and accessible. The packaging features QR codes that link to voiceover walk-throughs, embossed Braille descriptions, and shapes that indicate where to open the magnetic lid of the box. Additionally, the packaging is made from recycled paperboard with starch-based adhesive to connect the parts together."}]};
				const file = "/Users/bettinasosa/portfolio/src/pages/projects/m31.md";
				const url = "/projects/m31";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkDownProjectLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const m31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Cta as $, $$MarkDownProjectLayout as a, m31 as m };
