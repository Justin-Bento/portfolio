import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Justin Bento - Portfolio",
  description:
    "Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding.",
};
export default function index() {
  return (
    <>
      <Header />
      <BackgroundPattern />
      <main className="grid place-content-center [min-height:100dvh;] py-16 px-8">
        <div className="max-w-4xl mx-auto md:text-center">
          <div className="flex justify-start md:justify-center">
            <span className="relative w-16 h-16 mb-6 ">
              <Image
                src="/media/justin-bento--linkedin.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
                alt="Avatar"
                className="rounded-full ring-2 ring-black"
              />
            </span>
          </div>
          <div className="text-balance space-y-4">
            <p className="text-base leading-7 tracking-wide capitalize dark:text-white">Hey there I&#39;m Justin!</p>
            <h1 className="text-4xl md:text-5xl text-pretty font-extrabold tracking-tight dark:text-white">
              From Designs to Dynamic Websites: Join Me On My Coding Adventure!
            </h1>
            <p className="text-base leading-7 tracking-wide lg:text-lg max-w-3xl mx-auto dark:text-white">
              I&#39;m a Multimedia Designer venturing into the field of Front-End Development. My goal is to blend my
              knowledge of accessibility design with the power of code to create engaging websites that everyone can
              enjoy. Join me on this journey of creativity and interactivity!
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-center gap-4 mt-8">
            <Link href="/projects">
              <Button variant="primary" className="text-white">
                Explore My Portfolio
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="ring-1 ring-black hover:underline">
                Let&#39;s Collaborate
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
