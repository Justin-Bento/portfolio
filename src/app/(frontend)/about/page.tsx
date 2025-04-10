import { Card } from "@/components/ui/card";
import { Code, Music, Palette, PersonStanding } from "lucide-react";
import React from "react";
import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Justin Bento. I live in Toronto, where I build projects to last.",
};

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FullWidthCard>
          <FullWidthCard.Breadcrumbs>
            <FullWidthCard.BreadcrumbItem href="/">
              Home
            </FullWidthCard.BreadcrumbItem>
            <FullWidthCard.BreadcrumbItem href="/about" isActive>
              About
            </FullWidthCard.BreadcrumbItem>
          </FullWidthCard.Breadcrumbs>
          <FullWidthCard.Heading>Building with Purpose</FullWidthCard.Heading>
          <FullWidthCard.Overview>
            As you know my name is Justin Bento. My job is to write maintainable
            code and turn ideas into tools that work, look great and are
            pleasant to use. I build with purpose so every project I work on is
            a step forward for myself and the teams I work with.
          </FullWidthCard.Overview>
        </FullWidthCard>
        <div className="col-span-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <div className="relative h-80 w-full">
                  <Image
                    fill
                    alt="Front-end development illustration"
                    src="/images/image-2.png"
                    className="object-cover object-left"
                  />
                </div>
                <div className="p-6 lg:p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Front-end development
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-950 capitalize">
                    Lightning-fast builds
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 line-clamp-2">
                    I use HTML, CSS, JavaScript, React, and TypeScript to create
                    the visual part of websites that users interact with,
                    bringing designs to life. Utilize CMS for content
                    management.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            </div>
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <div className="relative h-80 w-full">
                  <Image
                    fill
                    alt="Front-end development illustration"
                    src="/images/image-4.png"
                    className="object-cover object-left"
                  />
                </div>
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Graphic Design
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-950">
                    Everything You See Is Designed By Me
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 line-clamp-2">
                    The graphic designer designs a mockup showing what the
                    feature will look like on the website, along with the chosen
                    fonts and color palette. .
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Speed
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-950">
                    Built for power users
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 line-clamp-2">
                    Sed congue eros non finibus molestie. Vestibulum euismod
                    augue.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Integrations
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-950">
                    Connect your favorite tools
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 line-clamp-2">
                    Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                    maximus arcu.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
            </div>
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Network
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-950">
                    Globally distributed CDN
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 line-clamp-2">
                    Aenean vulputate justo commodo auctor vehicula in malesuada
                    semper.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
