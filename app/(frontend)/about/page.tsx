import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8">
        <Card className="px-4 py-5 sm:p-6 col-span-12">
          <p className="text-2xl/8 font-semibold text-black sm:text-xl/8 dark:text-white">page</p>
        </Card>
        <Card className="px-4 py-5 sm:p-6 col-span-5">
          <div className="lg:order-first lg:row-span-2 text-black prose-a:text-emerald-800 text-balance">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-normal lg:text-5xl text-pretty dark:text-white">
              Hi! 👋 I&#39;m Justin, a Website Developer focused on building
              <Link
                className="underline text-primary dark:text-accent px-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
              >
                Accessible Websites
              </Link>
              using React or Ruby on Rails.
            </h1>
            <div className="mt-6 leading-7 tracking-wide space-y-6 dark:text-white">
              <p>
                My journey in web development began at Humber College. During my time at Humber, I studied
                <Link
                  href="https://mediaarts.humber.ca/programs/multimedia-design-and-development.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary dark:text-accent pl-1"
                >
                  Multi-Media Design and Development
                </Link>
                . This course allowed me to immerse myself in interactive digital media production, covering topics from
                web design, mobile interface design, front-end development, user testing, interface design, digital
                storytelling, and more.
              </p>
              <p>
                Upon graduating during the COVID-19 pandemic, I took a step back to reflect on my career path. Exploring
                various roles and opportunities allowed me to contemplate my passion. It was in late 2022 that I decided
                to dive deeper into website development, aiming to leverage my digital media skills to develop
                interactive websites and apps.
              </p>
              <p>
                I discovered my preference for development over design. Design was not engaging for me, and trying to do
                both was overwhelming as a new developer. While my education covered development principles, I lacked
                foundational programming knowledge. Turning to
                <Link
                  href="https://www.theodinproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary dark:text-accent pl-1"
                >
                  The Odin Project
                </Link>
                , I spent a year improving my development skills. This journey provided me invaluable insights and
                helped me hone my coding abilities by teaching me webpage construction and getting involved in
                contributions to open-source projects. It was a challenging but rewarding process that boosted my
                capabilities and engagement.
              </p>
              <p>
                In September 2023, my dedication paid off when I landed a position as a website developer at Humber
                College. This marked a significant milestone in my career, as all my hard work had paid off. During my
                time at Humber, I used my technical skills and improved my interpersonal skills. Over nine months, my
                department provided a collaborative environment where I worked on communication skills, project
                management abilities, and comfort with cross-functional teams, among other things.
              </p>
              <p>
                I found deep satisfaction in website development. Each project brought a fresh challenge and fed that
                itch of continuous learning, inspiring me to explore new possibilities in this ever-evolving field.
              </p>
              <p>
                If you were curious about my work, I encouraged you to take a moment to explore my portfolio or my
                <Link
                  href="https://github.com/Justin-Bento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary dark:text-accent pl-1"
                >
                  GitHub
                </Link>
                . I looked forward to connecting with you and discussing how we could bring your creative ideas to life!
              </p>
              <p>Thank you for visiting and learning about my journey. 😊</p>
            </div>
          </div>
        </Card>
        <Card className="px-4 py-5 sm:p-6 col-span-7">
          <p className="text-2xl/8 font-semibold text-black sm:text-xl/8 dark:text-white">page</p>
        </Card>
      </main>
    </>
  );
}
