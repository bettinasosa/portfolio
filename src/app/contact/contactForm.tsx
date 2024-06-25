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
    const { subject, email, body } = data;
    window.location.href = `mailto:bettinasosarohl@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}%0D%0A%0D%0AFrom: ${encodeURIComponent(
      email
    )}`;
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s talk!
          </h2>
          <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
            I&apos;m always looking for new and innovative ways to use my
            skills.
          </p>
        </div>
        <div className="col-span-2">
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-6"
            >
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1">
                    <FormLabel className="text-xl">Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="w-full rounded-xl bg-background text-foreground"
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
                  <FormItem className="flex flex-col space-y-1">
                    <FormLabel className="text-xl">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full rounded-xl bg-background text-foreground"
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
                  <FormItem className="flex flex-col space-y-1">
                    <FormLabel className="text-xl">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full rounded-xl bg-background text-foreground"
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
