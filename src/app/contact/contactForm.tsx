'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import RoundedButton from '@/components/animations/roundedButton';

type ContactFormData = {
  subject: string;
  email: string;
  body: string;
};

export function ContactForm() {
  const form = useForm<ContactFormData>({
    defaultValues: {
      subject: '',
      email: '',
      body: ''
    }
  });
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };
  return (
    <div className=" min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s talk!
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
              I&apos;m always looking for new and innovative ways to use my
              skills. Let&apos;s collaborate!
            </p>
          </div>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              action="mailto:bettinasosarohl@gmail.com"
              method="POST"
              name="EmailForm"
              className="mt-3 flex flex-col gap-y-6"
            >
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="bg-primary-50 ring-primary-900/40 placeholder:text-primary-950/60 hover:ring-primary-600 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-primary-50 ring-primary-900/40 placeholder:text-primary-950/60 hover:ring-primary-600 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-primary-50 ring-primary-900/40 placeholder:text-primary-950/60 hover:ring-primary-600 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <RoundedButton>Submit</RoundedButton>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
