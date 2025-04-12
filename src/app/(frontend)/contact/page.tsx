import React from "react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cotnact",
  description:
    "I’m Justin Bento. I live in Toronto, where I build projects to last.",
};

export default function page() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FullWidthCard>
          <FullWidthCard.Breadcrumbs>
            <FullWidthCard.BreadcrumbItem href="/">
              Home
            </FullWidthCard.BreadcrumbItem>
            <FullWidthCard.BreadcrumbItem href="/contact" isActive>
              Contact
            </FullWidthCard.BreadcrumbItem>
          </FullWidthCard.Breadcrumbs>
          <FullWidthCard.Heading>
            Let&#39;s work together!
          </FullWidthCard.Heading>
          <FullWidthCard.Overview>
            I&#39;d love to hear from you! Whether you have a project in mind, a
            collaboration opportunity, or just want to say hello, feel free to
            reach out. Fill in the form below, and I&#39;ll get back to you as
            soon as possible.
          </FullWidthCard.Overview>
        </FullWidthCard>
        <div className="col-span-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium text-foreground max-lg:text-center">
                  Open for Collaborations
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  I&#39;m always open to new collaborations—Follow me on GitHub
                  to collaborate with eachothers projects.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    fill
                    className="size-full object-cover object-top"
                    src="/images/image-1.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium text-foreground max-lg:text-center">
                  Where in the World Am I?
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  Currently anchored in
                  <span className="text-teal-500 font-semibold">
                    Toronto, ON
                  </span>
                  , but my ideas sail globally and I'm ready to help.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10">
                <div className="relative w-full h-[25rem]">
                  <Image
                    fill
                    className="w-full max-lg:max-w-xs rounded-3xl"
                    src="/images/image-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium text-foreground max-lg:text-center">
                  Let's Get In Touch
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  No bots here—just me. If you like what you see and want to
                  work together, let&#39;s make it happen.
                </p>
              </div>
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <ContactForm />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
