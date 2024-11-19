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
                  A Little About Me.
                </h2>
                <p className="line-clamp-4 text-balance text-black opacity-70 dark:text-white">
                  Justin Bento is a Toronto-born website developer with a unique
                  blend of experiences that shape the way I approach my work. I
                  am passionate about creating and maintaining websites that
                  leverage modern tools tools like JavaScript, React, Node.js,
                  and PostgreSQL.
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
                I graduated from Humber's Multimedia Design and Development
                program, where I gained hands-on experience in creating
                interactive digital media. From web coding to user interface
                (UI) design and front-end development, I built a solid
                foundation in crafting engaging and user-friendly online
                experiences.
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
                During my time in Humber's Multimedia Design and Development
                program, I learned how to bring ideas to life through by
                creating interactive digital experiences, and build a strong
                foundation in creative and functional thinking.
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
                Justin Bento was born in Toronto but spent much of his childhood
                in the Caribbean. Growing up with a blend of multiple cultures
                and experiences shaped his ability to see the world from
                different perspectives, fostering creativity and adaptability
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
                Outside of coding, I enjoy playing guitar and creating music.
                Music gives me a chance to step away from the screen and express
                myself in a completely different way. It&#39;s not just a way to
                relax but also a creative outlet that keeps my mind sharp and my
                ideas flowing.
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
