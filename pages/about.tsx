import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>Justin Bento — About</title>
        <meta name="title" content="Justin Bento — About" />
        <meta name="keywords" content="Full-Stack, website design website developer" />
        <meta name="description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — About" />
        <meta property="og:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — About" />
        <meta property="twitter:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <main className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 gap-12 wrapper my-20">
        <div className="">
          <div className="relative lg:w-full h-96">
            <Image
              src={"/media/tinywow_me-playing-guitar_16595730.webp"}
              fill
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover bg-gray-400 aspect-square rotate-3 rounded-2xl"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold leading-relaxed tracking-normal text-slate-800 sm:text-5xl">
            I’m Justin Bento. I live in Toronto Canada, where I create
            expirences unique for the web!
          </h1>
          <div className="mt-6 text-base leading-8 text-slate-600 space-y-7">
            <p>
              I have always been fascinated with technology and enjoy making
              things. When I was in middle school, I took my first computer
              class and became enamored with computers, leading me to pursue a
              career in technology.{" "}
            </p>
            <p>
              As a child, I had a deep love for music and found it to be a great
              outlet for my creativity. I was naturally talented in pitch,
              rhythm, and pattern recognition, which led me to pick up my first
              guitar at the age of 12. Unfortunately, my focus shifted to sports
              during my teenage years, and I had to put my passion for music on
              hold.
            </p>
            <p>
              After my competitive swimming career ended, I decided to focus on
              my education and professional future. I graduated from college
              with a degree in Multimedia Design and Development, completed an
              internship in Social Media Marketing, and earned certification as
              a Cyber Security Specialist. Currently, I am aiming to obtain
              certification in Technical Support.
            </p>
            <p className="">
              Throughout my life, I have gained unique experiences that have
              helped me become a committed and creative problem solver. I am
              excited to bring my skills and experiences to any team and to face
              any challenge that comes my way.
            </p>
          </div>
        </div>
        <div className="">
          <ul role="list" className="flex flex-col gap-2">
            <SocialLink href="#" icon={FaTwitter}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={FaInstagram} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={FaGithub} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={FaLinkedin} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:bento.a.justin@gmail.com"
              icon={MailIcon}
              className="pt-8 mt-4 border-t border-gray-100 dark:border-gray-700/40"
            >
              bento.a.justin@gmail.com
            </SocialLink>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SocialLink({ className, href, children, icon: Icon }: any) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="flex items-center text-sm font-medium transition text-slate-800 group hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-500"
      >
        <Icon className="flex-none w-5 h-5 transition fill-gray-500 group-hover:fill-primary-500" />
        <span className="ml-3 text-sm">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}