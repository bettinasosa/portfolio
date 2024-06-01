'use client';
import { ContactForm } from '@/app/contact/contactForm';
import { Mail, MapPin } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import BlurryCursor from '@/components/cursor/blendCursor';
import React from 'react';

export default function ContactInfo() {
  const Card = ({ children }) => {
    return (
      <div className="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8">
        {children}
      </div>
    );
  };
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-2xl justify-between px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex space-x-2 text-base font-medium">
          <MapPin /> <p>London, UK</p>
        </div>
        <div className="flex space-x-2 text-base font-medium">
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
        </div>
        <div className="flex space-x-2 text-base font-medium">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="link" onClick={() => {}}>
                  <Mail className="mr-2 size-8" />
                  <p className="text-3xl font-medium">
                    bettinasosarohl@gmail.com
                  </p>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-3xl">Click to copy!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <BlurryCursor isActive={false} text={''} />
      <ContactForm />
    </div>
  );
}
