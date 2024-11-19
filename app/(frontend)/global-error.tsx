"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { RiMailLine } from "react-icons/ri";

export default function Error404() {
  const router = useRouter();
  return (
    <div className="grid h-screen place-items-center px-6 py-24 [min-height:100dvh] 3xl:container sm:py-32 lg:px-8 3xl:mx-auto">
      <div className="">
        <p className="text-base font-semibold text-black dark:text-white">
          404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold capitalize tracking-tight text-black sm:text-5xl dark:text-white">
          Oops! we couldn&#39;t find you&#39;re page.
        </h1>
        <p className="mt-6 text-base leading-7 tracking-wide text-black lg:mx-auto lg:max-w-[64ch] lg:text-xl dark:text-white">
          It seems like the page you&#39;re searching for is on its own creative
          journey right now. While we get everything back in order, why not
          explore some of my other imaginative projects? Click below to embark
          on a new adventure within my portfolio.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <Button variant="secondary">
            <Link href="/">Go To Home Page</Link>
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => router.push("mailto:bento.a.justin@gmail.com")}
          >
            <RiMailLine />
            Send A Message
          </Button>
        </div>
      </div>
    </div>
  );
}
