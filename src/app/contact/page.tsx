import { ContactForm } from '@/app/contact/contactForm';

export default function ContactInfo() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="grid gap-6 lg:grid-cols-3">
          <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8">
            <dt className="sr-only">Postal address</dt>
            <dd className="flex h-full flex-col justify-between gap-12">
              <svg
                className="text-primary-600 dark:text-primary-400 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
              </svg>
              <div className="text-base font-medium">
                <p>London, UK</p>
              </div>
            </dd>
          </div>

          <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8">
            <dt className="sr-only">LinkedIn</dt>
            <dd className="flex h-full flex-col justify-between gap-12">
              <img
                src="/assets/linkedin.png"
                alt="likedin"
                className="text-primary-600 dark:text-primary-400 h-6 w-6"
              />
              <a
                className="text-base font-medium"
                href="https://www.linkedin.com/in/bettina-sosa/"
              >
                LinkedIn
              </a>
            </dd>
          </div>

          <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8">
            <dt className="sr-only">Email</dt>
            <dd className="flex h-full flex-col justify-between gap-12">
              <svg
                className="text-primary-600 dark:text-primary-400 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
              </svg>
              <p className="text-base font-medium">bettinasosarohl@gmail.com</p>
            </dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
