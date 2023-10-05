/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_d3200be8.mjs';
import { $ as $$Layout } from './404_82dd810c.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                           *//* empty css                         */
const $$Astro = createAstro();
const $$Styleguide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Styleguide;
  const colors = [
    {
      name: "white",
      hex: "#ffffff"
    },
    {
      name: "50",
      hex: "#fafaf9"
    },
    {
      name: "100",
      hex: "#f5f5f4"
    },
    {
      name: "200",
      hex: "#e7e5e4"
    },
    {
      name: "300",
      hex: "#d6d3d1"
    },
    {
      name: "400",
      hex: "#a8a29e"
    },
    {
      name: "500",
      hex: "#78716c"
    },
    {
      name: "600",
      hex: "#57534e"
    },
    {
      name: "700",
      hex: "#44403c"
    },
    {
      name: "800",
      hex: "#292524"
    },
    {
      name: "900",
      hex: "#1c1917"
    },
    {
      name: "950",
      hex: "#0c0a09"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Style guide for Stone premium Astro theme", "title": "Styleguide \xB7 Betts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header class="py-16 lg:py-20"><div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
Styleguide
</h1></div></header><section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Colors</h2><div class="grid grid-cols-2 gap-12 sm:grid-cols-6">${colors.map((color) => renderTemplate`<div class="relative flex"><div class="flex flex-col gap-2"><div class="h-16 w-16 rounded-md border border-primary-900/10 dark:border-primary-300/10"${addAttribute(`background-color: ${color.hex}`, "style")}></div><div class="text-sm font-medium">${color.name}</div></div></div>`)}</div></div></div></section><section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
Typography
</h2><div class="flex flex-col gap-16 sm:flex-row"><div class="flex flex-col gap-8"><div class="flex w-64 flex-col items-center gap-3 rounded-md bg-primary-500/10 p-6 dark:bg-primary-400/10"><p class="text-5xl">Aa</p><p class="text-base text-primary-950/70 dark:text-primary-200/70">
Inter
</p></div><div class="flex w-64 flex-col items-center gap-3 rounded-md bg-primary-500/10 p-6 dark:bg-primary-400/10"><p class="text-5xl font-medium">Aa</p><p class="text-base text-primary-950/70 dark:text-primary-200/70">
Inter Medium
</p></div></div><div class="flex flex-col gap-4"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
Heading 1
</h1><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
Heading 2
</h2><h3 class="text-xl font-medium sm:text-2xl">Heading 3</h3><p class="text-lg sm:text-xl">Subtitle</p><p class="text-base font-medium">Bold text</p><p class="text-base">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores impedit perferendis suscipit
              eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Maiores impedit
              perferendis suscipit eaque, iste dolor cupiditate.
</p></div></div></div></div></section>` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/styleguide.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/styleguide.astro";
const $$url = "/styleguide";

export { $$Styleguide as default, $$file as file, $$url as url };
