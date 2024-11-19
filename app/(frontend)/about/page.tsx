import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import React from "react";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import {
  RiArtboardLine,
  RiCss3Line,
  RiGameLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiMusicLine,
  RiPantoneLine,
  RiPencilRulerLine,
  RiPlantLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="p-4 3xl:container lg:gap-6 lg:p-8 3xl:mx-auto">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Full-width Card */}
          <Card className="col-span-12 border-transparent bg-secondary/10">
            <div className="mx-auto flex min-h-[65svh] w-11/12 items-center xl:min-h-[36rem]">
              <div className="space-y-3">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="font-medium text-black/50 dark:text-white"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/about"
                        className="font-medium text-black underline dark:text-white"
                      >
                        About
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <h2 className="text-3xl font-extrabold capitalize lg:text-5xl dark:text-white">
                  Hello, allow me to introduce myself.
                </h2>
                <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                  You are inside a Bento Grid, a layout inspired by the
                  traditional Japanese bento box, where items are arranged in a
                  clean, organized, and visually pleasing way. Each section in
                  this grid is like a carefully placed item within a bento box,
                  designed to create harmony and balance.
                </p>
              </div>
            </div>
          </Card>

          {/* 7-column Card (left-aligned) */}
          <Card className="col-span-12 md:col-span-7">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                How I Became a Web Developer?
              </h2>
              <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                You are inside a Bento Grid, a layout inspired by the
                traditional Japanese bento box, where items are arranged in a
                clean, organized, and visually pleasing way. Each section in
                this grid is like a carefully placed item within a bento box,
                designed to create harmony and balance.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiHtml5Line className="size-7" />
                <RiCss3Line className="size-7" />
                <RiJavascriptLine className="size-7" />
                <RiTailwindCssLine className="size-7" />
                <RiReactjsLine className="size-7" />
              </span>
            </div>
          </Card>

          {/* 5-column Card (right-aligned) */}
          <Card className="col-span-12 md:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                How I Approach Design and Creativity!
              </h2>
              <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                You are inside a Bento Grid, a layout inspired by the
                traditional Japanese bento box, where items are arranged in a
                clean, organized, and visually pleasing way. Each section in
                this grid is like a carefully placed item within a bento box,
                designed to create harmony and balance.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiPencilRulerLine className="size-7" />
                <RiArtboardLine className="size-7" />
                <RiPantoneLine className="size-7" />
              </span>
            </div>
          </Card>

          {/* 5-column Card (left-aligned) */}
          <Card className="col-span-12 md:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                The Human Behind the Code!
              </h2>
              <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                You are inside a Bento Grid, a layout inspired by the
                traditional Japanese bento box, where items are arranged in a
                clean, organized, and visually pleasing way. Each section in
                this grid is like a carefully placed item within a bento box,
                designed to create harmony and balance.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiPencilRulerLine className="size-7" />
                <RiArtboardLine className="size-7" />
                <RiPantoneLine className="size-7" />
              </span>
            </div>
          </Card>

          {/* 7-column Card (right-aligned) */}
          <Card className="col-span-12 md:col-span-7">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                About Me: Beyond the Keyboard!
              </h2>
              <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                You are inside a Bento Grid, a layout inspired by the
                traditional Japanese bento box, where items are arranged in a
                clean, organized, and visually pleasing way. Each section in
                this grid is like a carefully placed item within a bento box,
                designed to create harmony and balance.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiMusicLine className="size-7" />
                <RiGameLine className="size-7" />
                <RiPlantLine className="size-7" />
              </span>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
