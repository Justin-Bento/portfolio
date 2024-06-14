import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiPinterestFill, RiSoundcloudFill } from 'react-icons/ri';

export default function about() {
  return (
    <>
      <Head>
        <title>Justin Bento - About</title>
        <meta name="title" content="Justin Bento - About" />
        <meta
          name="description"
          content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. "
        />
      </Head>
      <div className="flex-auto p-4 lg:p-0">
        <div className="py-16 sm:px-8 sm:my-32 lg:py-0">
          <div className="w-full mx-auto lg:container lg:px-0">
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
                        className="object-cover ring-2 ring-primary-800 rounded-2xl bg-netural-200 dark:bg-netural-800"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2 lg:max-w-prose [text-wrap:balance] text-netural-600 dark:text-netural-400">
                  <h1 className="block capitalize tracking-normal text-3xl sm:text-4xl md:leading-[3.7rem] font-extrabold md:text-5xl ">
                    Hi! 👋 I&#39;m Justin, A website developer with a focus on building accessible websites using Modern Frontend-End
                    Technologies.
                  </h1>
                  <div className="mt-6 text-base leading-7 tracking-wider space-y-7">
                    <p>
                      My journey in web development began at Humber College. During my time at Humber, I studied Multi-Media Design and
                      Development. This course allowed me to immerse myself in interactive digital media production, covering topics from
                      web design, mobile interface design, front-end development, user testing, interface design, digital storytelling, and
                      more.
                    </p>
                    <p>
                      Upon graduating during the COVID-19 pandemic, I took a step back to reflect on my career path. Exploring various roles
                      and opportunities allowed me to contemplate my passion. It was in late 2022 that I decided to dive deeper into website
                      development, aiming to leverage my digital media skills to develop interactive websites and apps.
                    </p>
                    <p>
                      I discovered my preference for development over design. Design was not engaging for me, and trying to do both was
                      overwhelming as a new developer. While my education covered development principles, I lacked foundational programming
                      knowledge. Turning to The Odin Project, I spent a year improving my website development skills. This journey provided
                      invaluable programming insights and helped me hone my coding abilities by teaching me webpage construction and getting
                      involved in contributions to open-source projects. It was a challenging but rewarding process that boosted my
                      capabilities and engagement.
                    </p>
                    <p>
                      In September 2023, my dedication paid off when I landed a position as a website developer at Humber College. This
                      marked a significant milestone in my career, as all my hard work had paid off. During my time at Humber, I used my
                      technical skills and improved my interpersonal skills. Over nine months, my department provided a collaborative
                      environment where I worked on communication skills, project management abilities, and comfort with cross-functional
                      teams, among other things.
                    </p>
                    <p>
                      I found deep satisfaction in website development. Each project brought a fresh challenge and fed that itch of
                      continuous learning, inspiring me to explore new possibilities in this ever-evolving field.
                    </p>
                    <p>
                      If you were curious about my work, I encouraged you to take a moment to explore my portfolio or my GitHub. I looked
                      forward to connecting with you and discussing how we could bring your creative ideas to life!
                    </p>
                    <p>Thank you for visiting and learning about my journey. 😊</p>
                  </div>
                </div>
                <div className="w-full lg:pl-20">
                  <ul role="list" className="flex flex-col gap-4">
                    <li className="flex">
                      <Link
                        href="https://soundcloud.com/bento-box-519166246"
                        target="_blank"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiSoundcloudFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">Follow on Sound Cloud</span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://www.pinterest.ca/bentoajustin/"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiPinterestFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">Follow on Pintrest</span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://github.com/Justin-Bento"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiGithubFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">Follow on GitHub</span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        href="https://www.linkedin.com/in/justin--bento/"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiLinkedinFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">Follow on LinkedIn</span>
                      </Link>
                    </li>
                    <li className="flex pt-8 mt-4 border-t border-netural-100 dark:border-netural-700/40">
                      <Link
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                        href="mailto:contact@justin-bento.com"
                      >
                        <RiMailFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4">contact@justin-bento.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
