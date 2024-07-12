import { Button } from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { RiMailFill, RiMapPin2Fill } from 'react-icons/ri';
import { footer_navigation } from '@/lib/data';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Justin Bento - Contact</title>
        <meta name="title" content={`Justin Bento - Contact`} />
        <meta
          name="description"
          content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. "
        />
      </Head>
      <div className="grid place-content-center max-w-7xl mx-auto [min-height:100dvh;] py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <section className="lg:col-span-2">
            <nav className="flex items-center mb-2 text-sm">
              <Button variant="link" className="text-slate-700 dark:text-primary-40">
                <Link href="/">Home</Link>
              </Button>
              <span className="dark:text-primary-40">/</span>
              <Button variant="link" className="text-primary-600 dark:text-primary-400">
                <Link href="/contact">Contact us</Link>
              </Button>
            </nav>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-balance dark:text-primary-40">
              Let&#39;s work together!
            </h1>
            <p className="text-base leading-7 md:text-lg opacity-90 dark:text-primary-40 mt-4">
              I&#39;d love to hear from you! Whether you have a project in mind, a collaboration opportunity, or just want to say hello,
              feel free to reach out. Fill in the form below, and I&#39;ll get back to you as soon as possible. Looking forward to starting
              a creative conversation together!
            </p>
          </section>
          <div className="overflow-hidden ring-1 ring-gray-500 dark:ring-gray-50 rounded-lg">
            <div className="px-4 py-5 sm:p-6 ">
              <h2 className="text-base font-semibold capitalize font-display dark:text-primary-40">My Office</h2>
              <p className="mt-2 text-base dark:text-primary-40">I have to list my location for legal reasons.</p>
              <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 ">
                <RiMapPin2Fill />
                Toronto Ontario
              </Button>
              <hr className="my-6 border-1 border-gray-500 dark:border-gray-50" />
              <h2 className="text-base font-semibold capitalize font-display ">Email Me</h2>
              <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 normal-case ">
                <RiMailFill />
                contact@justinbento.com
              </Button>
              <hr className="my-6 border-1 border-gray-500 dark:border-gray-50" />
              <h2 className="text-base font-semibold capitalize font-display ">Social&#39;s</h2>
              <div className="flex items-center gap-2 mt-4">
                {footer_navigation.map((item: any) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="transition-all hover:opacity-80"
                    target="_blank"
                    aria-label="external-link-to-social-media"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Button variant="outline" size="icon" className="border-primary-50">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <section className="">
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}
