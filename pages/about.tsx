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
        <title>Justin Bento  - About</title>
        <meta name="title" content="Justin Bento - About" />
        <meta name="description" content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. " />
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
                <div className="lg:order-first lg:row-span-2 lg:max-w-prose">
                  <h1 className="block capitalize tracking-normal [text-wrap:balance] text-3xl sm:text-4xl md:leading-[3.7rem] font-extrabold md:text-5xl ">
                    Hi 👋, I&#39;m Justin. A Multimedia Design Graduate learning
                    various technologies.
                  </h1>
                  <div className="mt-6 text-base leading-7 tracking-wider space-y-7 text-netural-600 dark:text-netural-400">
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
                        <span className="ml-4 capitalize">Follow on GitHub</span>
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
