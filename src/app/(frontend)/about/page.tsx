import { Card } from "@/components/ui/card";
import { Code, Music, Palette, PersonStanding } from "lucide-react";
import React from "react";
import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";

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
        {/* 7-column Card (left-aligned) */}
        <Card className="col-span-12 lg:col-span-7">
          <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
              How I Became a Web Developer?
            </h2>
            <p className="text-balance text-black text-muted-foreground">
              My journey into web development began with Humber College&#39;s
              Multimedia Design program, where I gained hands-on experience
              working on real-world projects. I continued to grow my skills
              through The Odin Project, learning by building. My early work
              taught me an essential lesson: success isn&#39;t given—it&#39;s
              earned through consistent effort and focus.
            </p>
            <span className="mt-4 inline-flex items-center gap-4 border-muted-foreground">
              <Code />
            </span>
          </div>
        </Card>
        {/* 5-column Card (right-aligned) */}
        <Card className="col-span-12 lg:col-span-5">
          <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
              How I Approach Design and Creativity!
            </h2>
            <p className="text-black text-muted-foreground">
              My process starts with understanding users’ needs and challenges.
              From brainstorming to prototyping, I test and refine ideas until
              they solve real problems effectively. Design Thinking guides me,
              but I keep things practical—what matters most is delivering
              solutions for the user.
            </p>
            <span className="mt-4 inline-flex items-center gap-4">
              <Palette />
            </span>
          </div>
        </Card>
        {/* 5-column Card (left-aligned) */}
        <Card className="col-span-12 lg:col-span-5">
          <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
              The Human Behind the Code!
            </h2>
            <p className="text-black text-muted-foreground">
              I&apos;ve learned to tackle challenges with curiosity and
              adaptability—skills. I bring these skills to every project I work
              on. Whether I&apos;m optimizing code, debugging systems, or
              brainstorming new solutions, I thrive on finding creative,
              efficient answers to existing and new problems.
            </p>
            <span className="mt-4 inline-flex items-center gap-4">
              <PersonStanding />
            </span>
          </div>
        </Card>
        {/* 7-column Card (right-aligned) */}
        <Card className="col-span-12 lg:col-span-7">
          <div className="mx-auto flex min-h-[37vh] w-11/12 flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold capitalize leading-normal tracking-wide">
              Beyond the Keyboard!
            </h2>
            <p className="line-clamp-4 text-balance text-black text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me playing guitar or
              creating music it&apos;s my way to recharge and stay creative.
              Both music and coding push me to focus, adapt, and find rhythm in
              problem-solving. It&apos;s how I keep ideas flowing in life and
              work.
            </p>
            <span className="mt-4 inline-flex items-center gap-4">
              <Music />
            </span>
          </div>
        </Card>
      </section>
    </>
  );
}
