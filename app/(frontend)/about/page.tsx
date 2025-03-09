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
          <Card className="col-span-12 border-transparent bg-accent/30">
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
                  Building with Purpose.
                </h2>
                <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                  As you know my name is Justin Bento. My job is to write
                  maintainable code and turn ideas into tools that work, look
                  great and are pleasant to use. I build with purpose so every
                  project I work on is a step forward for myself and the teams I
                  work with.
                </p>
              </div>
            </div>
          </Card>
          {/* 7-column Card (left-aligned) */}
          <Card className="col-span-12 lg:col-span-7">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                How I Became a Web Developer?
              </h2>
              <p className="text-balance text-black opacity-70 dark:text-white">
                My journey into web development began with Humber College&#39;s
                Multimedia Design program, where I gained hands-on experience
                working on real-world projects. I continued to grow my skills
                through The Odin Project, learning by building. My early work
                taught me an essential lesson: success isn&#39;t given—it&#39;s
                earned through consistent effort and focus.
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
          <Card className="col-span-12 lg:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                How I Approach Design and Creativity!
              </h2>
              <p className="text-black opacity-70 dark:text-white">
                My process starts with understanding users’ needs and
                challenges. From brainstorming to prototyping, I test and refine
                ideas until they solve real problems effectively. Design
                Thinking guides me, but I keep things practical—what matters
                most is delivering solutions for the user.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiPencilRulerLine className="size-7" />
                <RiArtboardLine className="size-7" />
                <RiPantoneLine className="size-7" />
              </span>
            </div>
          </Card>
          {/* 5-column Card (left-aligned) */}
          <Card className="col-span-12 lg:col-span-5">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                The Human Behind the Code!
              </h2>
              <p className="text-black opacity-70 dark:text-white">
                I&apos;ve learned to tackle challenges with curiosity and
                adaptability—skills. I bring these skills to every project I
                work on. Whether I&apos;m optimizing code, debugging systems, or
                brainstorming new solutions, I thrive on finding creative,
                efficient answers to existing and new problems.
              </p>
              <span className="mt-4 inline-flex items-center gap-4">
                <RiPencilRulerLine className="size-7" />
                <RiArtboardLine className="size-7" />
                <RiPantoneLine className="size-7" />
              </span>
            </div>
          </Card>
          {/* 7-column Card (right-aligned) */}
          <Card className="col-span-12 lg:col-span-7">
            <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
              <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
                Beyond the Keyboard!
              </h2>
              <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                When I&apos;m not coding, you&apos;ll find me playing guitar or
                creating music it&apos;s my way to recharge and stay creative.
                Both music and coding push me to focus, adapt, and find rhythm
                in problem-solving. It&apos;s how I keep ideas flowing in life
                and work.
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
