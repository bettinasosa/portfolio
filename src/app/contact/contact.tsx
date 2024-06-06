'use client';

import TextDisperse from '@/app/contact/textDisperse/textDisperse';
import { clsx } from 'clsx';
import { useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ContactForm } from '@/app/contact/contactForm';

export default function Contact() {
  const background = useRef(null);
  const emailRef = useRef(null);

  const setBackground = (isActive: any) => {
    gsap.to(background.current, { opacity: isActive ? 0.7 : 0 });
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('email');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-foreground pt-44 text-[5.6vw]">
      <div className="w-1/2 text-white">
        <div className="flex justify-between uppercase">
          <p className="m-0">Bettina</p>
          <p className="m-0">Sosa</p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="m-0">software</p>
          <p className="m-0">&</p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="m-0">design</p>
          <p className="m-0">engineer</p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="m-0">Ldn </p>
          <Link href={'https://www.linkedin.com/in/bettina-sosa/'}>
            <TextDisperse setBackground={setBackground}>
              <p>→Linkedin</p>
            </TextDisperse>
          </Link>
        </div>

        <TextDisperse setBackground={setBackground} onClick={scrollToEmail}>
          <p className="m-0">→Email</p>
        </TextDisperse>
        <Link href={'https://www.linkedin.com/in/bettina-sosa/'}>
          <TextDisperse setBackground={setBackground}>
            <p>→Github</p>
          </TextDisperse>
        </Link>
        <div
          ref={background}
          className={clsx(
            'pointer-events-none absolute inset-0 h-full w-full bg-foreground text-[5.6vw] opacity-0'
          )}
        ></div>
        <div id="email" ref={emailRef}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
