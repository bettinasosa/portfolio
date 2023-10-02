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
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const subject = data.get("subject");
      const email = data.get("email");
      const body = data.get("body");
      const apikey = "AIzaSyDs74HtXKfYeXAhWK27dGe-a5qS6AT7ro4";
    } catch (error) {
      if (error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-2 lg:gap-8">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
          Say hello!
        </h2>
        <p class="max-w-lg text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
          I'm always looking for new and innovative ways to use my skills. Let's
          collaborate!
        </p>
      </div>
      <form action="mailto:bettinasosarohl@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm" class="mt-3 flex flex-col gap-y-6">
        <!-- Full name input -->
        <div>
          <label for="subject" class="sr-only">Subject</label>
          <input required type="text" size="19" name="subject" id="subject" autocomplete="name" class="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400" placeholder="Full name">
        </div>

        <!-- Email input -->
        <div>
          <label for="email" class="sr-only">Email</label>
          <input required type="email" name="email" id="email" autocomplete="email" class="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400" placeholder="Email">
        </div>

        <!-- Message textarea -->
        <div>
          <label for="body" class="sr-only">Message</label>
          <textarea required name="body" id="body" rows="3" class="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400" placeholder="Message"></textarea>
        </div>

        <div>
          <button class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/contact/ContactForm.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <dl class="grid gap-6 lg:grid-cols-3">
      <!-- Address -->
      <div class="rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10">
        <dt class="sr-only">Postal address</dt>
        <dd class="flex h-full flex-col justify-between gap-12">
          <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
          </svg>
          <div class="text-base font-medium">
            <p>London, UK</p>
          </div>
        </dd>
      </div>

      <!-- Phone number -->
      <div class="rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10">
        <dt class="sr-only">LinkedIn</dt>
        <dd class="flex h-full flex-col justify-between gap-12">
          <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
          </svg>
          <a class="text-base font-medium" href="https://www.linkedin.com/in/bettina-sosa/">LikedIn</a>
        </dd>
      </div>

      <!-- Email -->
      <div class="rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10">
        <dt class="sr-only">Email</dt>
        <dd class="flex h-full flex-col justify-between gap-12">
          <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
          </svg>
          <p class="text-base font-medium">bettinasosarohl@gmail.com</p>
        </dd>
      </div>
    </dl>
  </div>
</section>`;
}, "/Users/bettinasosa/portfolio/src/components/contact/ContactInfo.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Contact me for any more info.", "title": "Contact \xB7 Bettina" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})}
  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}
` })}`;
}, "/Users/bettinasosa/portfolio/src/pages/contact.astro", void 0);

const $$file = "/Users/bettinasosa/portfolio/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
