import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiSoundcloudFill,
} from "react-icons/ri";

export default function about() {
  return (
    <>
      <Head>
        <title>Justin Bento  - About</title>
        <meta name="title" content="Justin Bento - About" />
        <meta name="description" content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. " />
      </Head>
      <div className="flex-auto h-screen">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full lg:container lg:px-0">
            <div className="relative">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="px-2.5 lg:max-w-none">
                    <div className="aspect-video relative h-96 rotate-3">
                      <Image
                        fill
                        src="/media/london-picture.jpg"
                        alt=""
                        loading="lazy"
                        className=" ring-2 ring-primary-800 rounded-2xl bg-netural-200 object-cover dark:bg-netural-800"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2 lg:max-w-prose">
                  <h1 className="block capitalize tracking-normal [text-wrap:balance] text-3xl sm:text-4xl md:leading-[3.7rem] font-extrabold md:text-5xl text-neutral-950">
                    Hi 👋, I&#39;m Justin. A Multimedia Design Graduate learning
                    various technologies.
                  </h1>
                  <div className="mt-6 space-y-7 text-base leading-7 tracking-wider text-netural-600 dark:text-netural-400">
                    <p>
                      After graduating amid a pandemic, I decided to re-teach
                      myself how to code. So I can build abstract webpages into
                      interactive digital media.
                    </p>
                    <p>
                      So I typed best places to learn web development into google.
                      There I stumbled across free resources such as The Odin
                      Project, freeCodeCamp, and Harvard CS50. To teach myself
                      technical concepts in a logical order, understand the mind
                      of a programmer, code through building webpage designs, and
                      gain experience through open-source projects.
                    </p>
                    <p>
                      Some technologies I learned along the way include HTML5,
                      (CSS3) Cascading Style Sheet, JavaScript, jQuery, Node.js
                      React.js Express.js and MongoDB. Sprinkled with some object
                      oriented programming principles. Knowing these tools, and
                      guidelines allowed me to build 5 dynamic and interactive
                      websites from an idea.
                    </p>
                    <p>
                      What makes me unique, as a website developer, is my
                      education in multimedia design. As this program, emphasize
                      soft skills like teamwork and project management in group
                      assignments. Whilst teaching studens how to plan, orgnize,
                      conceptualize and present their idea to professors and
                      clients.
                    </p>
                    <p>
                      All in all, I love website development, because it teaches
                      me how to solve complex problems by breaking things down
                      into manageable steps. Whilst providing tangible feedback
                      loop, that makes me eager to learn more.
                    </p>
                    <p>Thanks for taking the time to read. 😊</p>
                  </div>
                </div>
                <div className="lg:pl-20 w-full">
                  <ul role="list" className="flex flex-col gap-4">
                    <li className="flex">
                      <Link
                        href="https://soundcloud.com/bento-box-519166246"
                        target="_blank"
                        className="group flex text-sm font-medium text-netural-800 transition hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-500"
                      >
                        <RiSoundcloudFill className="h-6 w-6 flex-none fill-netural-500 transition group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on Sound Cloud
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://github.com/Justin-Bento"
                        className="group flex text-sm font-medium text-netural-800 transition hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-500"
                      >
                        <RiInstagramFill className="h-6 w-6 flex-none fill-netural-500 transition group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on Instagram
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        target="_blank"
                        href="https://github.com/Justin-Bento"
                        className="group flex text-sm font-medium text-netural-800 transition hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-500"
                      >
                        <RiGithubFill className="h-6 w-6 flex-none fill-netural-500 transition group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">Follow on GitHub</span>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        href="https://www.linkedin.com/in/justin--bento/"
                        className="group flex text-sm font-medium text-netural-800 transition hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-500"
                      >
                        <RiLinkedinFill className="h-6 w-6 flex-none fill-netural-500 transition group-hover:fill-slate-500" />
                        <span className="ml-4 capitalize">
                          Follow on LinkedIn
                        </span>
                      </Link>
                    </li>
                    <li className="mt-4 border-t border-netural-100 pt-8 dark:border-netural-700/40 flex">
                      <Link
                        className="group flex text-sm font-medium text-netural-800 transition hover:text-primary-500 dark:text-netural-200 dark:hover:text-slate-500"
                        href="mailto:contact@justin-bento.com"
                      >
                        <RiMailFill className="h-6 w-6 flex-none fill-netural-500 transition group-hover:fill-slate-500" />
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
