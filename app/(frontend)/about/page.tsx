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
                        className="font-medium text-black"
                      >
                        About
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <h2 className="text-3xl font-extrabold capitalize lg:text-5xl dark:text-white">
                  Hello, allow me to introduce myself.
                </h2>
                <p className="line-clamp-2 text-balance text-black opacity-70">
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
            <div className="mx-auto flex min-h-[37vh] w-11/12 items-center">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                  Hello, this is a summary of my development background
                </h2>
                <p className="line-clamp-2 text-balance text-black opacity-70">
                  You are inside a Bento Grid, a layout inspired by the
                  traditional Japanese bento box, where items are arranged in a
                  clean, organized, and visually pleasing way. Each section in
                  this grid is like a carefully placed item within a bento box,
                  designed to create harmony and balance.
                </p>
              </div>
            </div>
          </Card>

          {/* 5-column Card (right-aligned) */}
          <Card className="col-span-12 md:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 items-center">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                  Hello, this is a summary of my design background!
                </h2>
                <p className="line-clamp-2 text-balance text-black opacity-70">
                  You are inside a Bento Grid, a layout inspired by the
                  traditional Japanese bento box, where items are arranged in a
                  clean, organized, and visually pleasing way. Each section in
                  this grid is like a carefully placed item within a bento box,
                  designed to create harmony and balance.
                </p>
              </div>
            </div>
          </Card>

          {/* 5-column Card (left-aligned) */}
          <Card className="col-span-12 md:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 items-center">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                  Hello, this is the About page!
                </h2>
                <p className="line-clamp-2 text-balance text-black opacity-70">
                  You are inside a Bento Grid, a layout inspired by the
                  traditional Japanese bento box, where items are arranged in a
                  clean, organized, and visually pleasing way. Each section in
                  this grid is like a carefully placed item within a bento box,
                  designed to create harmony and balance.
                </p>
              </div>
            </div>
          </Card>

          {/* 7-column Card (right-aligned) */}
          <Card className="col-span-12 md:col-span-7">
            <div className="mx-auto flex min-h-[37vh] w-11/12 items-center">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                  Hello, this is a summary me as a person!
                </h2>
                <p className="line-clamp-2 text-balance text-black opacity-70">
                  You are inside a Bento Grid, a layout inspired by the
                  traditional Japanese bento box, where items are arranged in a
                  clean, organized, and visually pleasing way. Each section in
                  this grid is like a carefully placed item within a bento box,
                  designed to create harmony and balance.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
