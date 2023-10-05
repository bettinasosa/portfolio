/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, g as renderHead, h as renderSlot } from '../astro_d3200be8.mjs';
import 'clsx';
/* empty css                           */import { a as $$ViewTransitions } from './404_82dd810c.mjs';
import 'html-escaper';
/* empty css                         */
const $$Astro$3 = createAstro();
const $$Particles$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Particles$1;
  const { id, init, loaded, options, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-particles", "astro-particles", { "data-id": id, "data-options": JSON.stringify(options), "data-url": url, "data-init": init, "data-loaded": loaded }, { "default": () => renderTemplate`${maybeRenderHead()}<canvas></canvas>` })}`;
}, "/Users/bettinasosa/portfolio/node_modules/astro-particles/src/Particles.astro", void 0);

const $$Astro$2 = createAstro();
const $$Particles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Particles;
  const options = {
    background: {
      color: "#000"
    },
    fullScreen: {
      zIndex: -1
    },
    particles: {
      number: {
        value: 100
      },
      move: {
        enable: true,
        speed: 0.2
      },
      size: {
        value: 1
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "Particles", $$Particles$1, { "id": "tsparticles", "options": options, "init": "particlesInit", "class": "animate-fade-in" })}`;
}, "/Users/bettinasosa/portfolio/src/components/Particles.astro", void 0);

const $$Astro$1 = createAstro();
const $$LandingAnimation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LandingAnimation;
  const navigation = [{ name: "Home", href: "/home" }];
  return renderTemplate`<html lang="en" x-cloak x-data><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body class="absolute bg-primary-950 text-primary-200 antialiased" id="landing"><button type="button" x-data @click="/home" id="homeButton"><div class="bg-black from-black via-zinc-600/20 to-black flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl"><div class="animate-glow from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 hidden h-px w-screen animate-fade-right bg-gradient-to-r md:block">${renderComponent($$result, "Particles", $$Particles, {})}</div><nav class="my-16 animate-fade-in"><ul class="flex items-center justify-center gap-4">${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "key")}${addAttribute(item.href, "href")} class="text-zinc-500 hover:text-zinc-300 text-sm duration-500">${item.name}</a>`)}</ul></nav><h1 class="text-edge-outline font-display md:text-9xl z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl">
Bettina Sosa
</h1><div class="animate-glow from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 hidden h-px w-screen animate-fade-right bg-gradient-to-r md:block"></div><div class="my-16 animate-fade-in text-center"><h2 class="text-zinc-500 text-sm">
Hi, I am a software engineer with a passion for innovation and
            cutting-edge technology. <br> I am currently the founding full
            stack software engineer
<a target="_blank" href="https://catapult.xyz" class="hover:text-zinc-300 underline duration-500">@Catapult
</a><br></h2><br><br><p>Click anywhere to start exploring</p></div></div><main>${renderSlot($$result, $$slots["default"])}</main></button></body></html>`;
}, "/Users/bettinasosa/portfolio/src/layouts/LandingAnimation.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LandingAnimation", $$LandingAnimation, { "description": "My personal portfolio website." })}`;
}, "/Users/bettinasosa/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
