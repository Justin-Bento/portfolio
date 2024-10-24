import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiPinterestFill, RiSoundcloudFill } from "react-icons/ri";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Bento - About",
  description:
    "Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding.",
};

export default function about() {
  return (
    <>
      <Header />
      <div className="flex-auto place-content-center container mx-auto [min-height:100dvh;] px-6">
        <div className="py-16 sm:px-4">
          <div className="w-full lg:px-0">
            <div className="relative">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="px-2.5 lg:max-w-none">
                    <div className="relative w-full aspect-square lg:aspect-video h-96 rotate-3">
                      <Image
                        fill
                        src="/media/london-picture.webp"
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover ring ring-black dark:ring-white rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-black prose-a:text-emerald-800">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-pretty dark:text-white">
                    Hi! 👋 I&#39;m Justin, a Website Developer focused on building{" "}
                    <Link
                      className="underline text-primary dark:text-accent"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
                    >
                      Accessible Websites
                    </Link>{" "}
                    using React or Ruby on Rails.
                  </h1>
                  <div className="mt-6 leading-7 tracking-wide space-y-6 dark:text-white">
                    <p>
                      My journey in web development began at Humber College. During my time at Humber, I studied{" "}
                      <Link
                        href="https://mediaarts.humber.ca/programs/multimedia-design-and-development.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-primary dark:text-accent"
                      >
                        Multi-Media Design and Development
                      </Link>
                      . This course allowed me to immerse myself in interactive digital media production, covering
                      topics from web design, mobile interface design, front-end development, user testing, interface
                      design, digital storytelling, and more.
                    </p>
                    <p>
                      Upon graduating during the COVID-19 pandemic, I took a step back to reflect on my career path.
                      Exploring various roles and opportunities allowed me to contemplate my passion. It was in late
                      2022 that I decided to dive deeper into website development, aiming to leverage my digital media
                      skills to develop interactive websites and apps.
                    </p>
                    <p>
                      I discovered my preference for development over design. Design was not engaging for me, and trying
                      to do both was overwhelming as a new developer. While my education covered development principles,
                      I lacked foundational programming knowledge. Turning to{" "}
                      <Link
                        href="https://www.theodinproject.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-primary dark:text-accent"
                      >
                        The Odin Project
                      </Link>
                      , I spent a year improving my development skills. This journey provided me invaluable insights and
                      helped me hone my coding abilities by teaching me webpage construction and getting involved in
                      contributions to open-source projects. It was a challenging but rewarding process that boosted my
                      capabilities and engagement.
                    </p>
                    <p>
                      In September 2023, my dedication paid off when I landed a position as a website developer at
                      Humber College. This marked a significant milestone in my career, as all my hard work had paid
                      off. During my time at Humber, I used my technical skills and improved my interpersonal skills.
                      Over nine months, my department provided a collaborative environment where I worked on
                      communication skills, project management abilities, and comfort with cross-functional teams, among
                      other things.
                    </p>
                    <p>
                      I found deep satisfaction in website development. Each project brought a fresh challenge and fed
                      that itch of continuous learning, inspiring me to explore new possibilities in this ever-evolving
                      field.
                    </p>
                    <p>
                      If you were curious about my work, I encouraged you to take a moment to explore my portfolio or my{" "}
                      <Link
                        href="https://github.com/Justin-Bento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-primary dark:text-accent"
                      >
                        GitHub
                      </Link>
                      . I looked forward to connecting with you and discussing how we could bring your creative ideas to
                      life!
                    </p>
                    <p>Thank you for visiting and learning about my journey. 😊</p>
                  </div>
                </div>
                <div className="w-full lg:pl-20">
                  <ul role="list" className="flex flex-col gap-4">
                    <li className="flex">
                      <Link href="https://soundcloud.com/bento-box-519166246" target="_blank">
                        <Button variant="ghost">
                          <RiSoundcloudFill className="w-6 h-6" />
                          <span className="ml-4 capitalize">Follow on Sound Cloud</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link target="_blank" href="https://www.pinterest.ca/bentoajustin/">
                        <Button variant="ghost">
                          <RiPinterestFill className="w-6 h-6" />
                          <span className="ml-4 capitalize">Follow on Pintrest</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link target="_blank" href="https://github.com/Justin-Bento">
                        <Button variant="ghost">
                          <RiGithubFill className="w-6 h-6" />
                          <span className="ml-4 capitalize">Follow on GitHub</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link href="https://www.linkedin.com/in/justin--bento/">
                        <Button variant="ghost">
                          <RiLinkedinFill className="w-6 h-6" />
                          <span className="ml-4 capitalize">Follow on LinkedIn</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="flex pt-8 mt-4 border-t border-black dark:border-white/40">
                      <Link href="mailto:contact@justin-bento.com">
                        <Button variant="ghost">
                          <RiMailFill className="w-6 h-6" />
                          <span className="ml-4">contact@justin-bento.com</span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
