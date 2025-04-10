import { Card, CardContent } from "@/components/ui/card";
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
            <Card className="p-0 relative lg:col-span-3">
              <CardContent className="p-0 relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
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
                  <p className="mt-2 text-lg font-medium text-foreground capitalize">
                    Lightning-fast builds
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground line-clamp-2">
                    I use HTML, CSS, JavaScript, React, and TypeScript to create
                    the visual part of websites that users interact with,
                    bringing designs to life. Utilize CMS for content
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-0 relative lg:col-span-3">
              <CardContent className="p-0 relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <div className="relative h-80 w-full">
                  <Image
                    fill
                    alt="Front-end development illustration"
                    src="/images/image-4.png"
                    className="object-cover object-left"
                  />
                </div>
                <div className="p-6 lg:p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Graphic Design
                  </h3>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    If You’re Seeing It, I Dreamed It First.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground line-clamp-2">
                    My time sepent is spent designg a web mockups to help me
                    visualise what the feature will look like on the website,
                    before continuing with the code.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-0 relative lg:col-span-2">
              <CardContent className="p-0 relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Learning
                  </h3>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Always Leveling Up
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground line-clamp-2">
                    Whether it's mastering new tech or deepening my fundamentals
                    - every line of code helps me grow.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-0 relative lg:col-span-2">
              <CardContent className="p-0 relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Integrations
                  </h3>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Built for Tomorrow’s Stack
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground line-clamp-2">
                    My goal is to, integrate what you love—no extra engineering
                    needed. For maximum results.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-0 relative lg:col-span-2">
              <CardContent className="p-0  relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                  className="h-80 object-cover"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-xs/4 font-semibold text-teal-600">
                    Network
                  </h3>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Building Bridges, Not Just Contacts
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground line-clamp-2">
                    I believe meaningful relationships start with genuine
                    conversations – across time zones and job titles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
