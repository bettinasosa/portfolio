export function ContactForm() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Say hello!
            </h2>
            <p className="max-w-lg text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
              I'm always looking for new and innovative ways to use my skills.
              Let's collaborate!
            </p>
          </div>
          <form
            action="mailto:bettinasosarohl@gmail.com"
            method="POST"
            enctype="multipart/form-data"
            name="EmailForm"
            className="mt-3 flex flex-col gap-y-6"
          >
            <div>
              <label for="subject" className="sr-only">
                Subject
              </label>
              <input
                required
                type="text"
                size="19"
                name="subject"
                id="subject"
                autocomplete="name"
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
                placeholder="Full name"
              />
            </div>

            <div>
              <label for="email" className="sr-only">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
                placeholder="Email"
              />
            </div>

            <div>
              <label for="body" className="sr-only">
                Message
              </label>
              <textarea
                required
                name="body"
                id="body"
                rows="3"
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
                placeholder="Message"
              ></textarea>
            </div>

            <div>
              <button
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
