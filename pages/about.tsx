import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiPinterestFill,
  RiSoundcloudFill,
} from "react-icons/ri";

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
                    Hi! 👋 I&#39;m Justin, a graduate in Multimedia Design,
                    currently exploring various technologies.
                  </h1>
                  <div className="mt-6 text-base leading-7 tracking-wider space-y-7">
                    <p>
                      After graduating in the middle of a pandemic, I decided to
                      start my coding journey. My goal is to create interactive
                      digital media by crafting webpages with unique designs.
                    </p>
                    <p>
                      To start this exciting journey, I searched the best places
                      to learn web development on Google. After this search I
                      found resources, such as The Odin Project, freeCodeCamp,
                      and Harvard CS50 and Developer Roadmaps. Using these tools
                      provided me with a clear path to learning technical
                      concepts in a logical order. Through these platforms, I
                      also gained insights into the mindset of a programmer,
                      honed my coding skills by building webpage designs, and
                      even contributed to open-source projects.
                    </p>
                    <p>
                      Along the way, I utilized various technologies, including
                      HTML5, CSS3 (Cascading Style Sheet), JavaScript, jQuery,
                      Node.js, React.js, Express.js, MongoDB, and Ruby On Rails.
                      I also dived into object-oriented programming principles,
                      which added depth to my skillset. Armed with this
                      knowledge and experience, I proudly developed five dynamic
                      and interactive websites.
                    </p>
                    <p>
                      What sets me apart as a website developer is my background
                      in multimedia design. This unique blend of skills allows
                      me to approach web development from a creative
                      perspective, bringing a touch of artistry to my work.
                      Additionally, my education emphasized crucial soft skills
                      like teamwork and project management through engaging
                      group assignments. This has not only strengthened my
                      collaborative abilities but also taught me how to
                      effectively plan, organize, and present ideas to clients.
                    </p>
                    <p>
                      I find tremendous joy in website development because it
                      challenges me to solve complex problems by breaking them
                      down into manageable steps. The constant feedback loop
                      keeps me eager to learn and explore new possibilities in
                      this ever-evolving field.
                    </p>
                    <p>
                      If you&#39;re curious to see what I&#39;ve been working on, check
                      out my portfolio, where I showcase some of my projects and
                      their impact. I look forward to starting a creative
                      conversation with you! 
                    </p>
                    <p>Thanks for taking the time to learn about my journey. 😊</p>
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
                        <span className="ml-4 capitalize">
                          Follow on Sound Cloud
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://www.pinterest.ca/bentoajustin/"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiPinterestFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on Pintrest
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://github.com/Justin-Bento"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiGithubFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on GitHub
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        href="https://www.linkedin.com/in/justin--bento/"
                        className="flex text-sm font-medium transition group text-netural-800 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:text-primary-40 hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-200"
                      >
                        <RiLinkedinFill className="flex-none w-6 h-6 transition fill-netural-500 group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on LinkedIn
                        </span>
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
