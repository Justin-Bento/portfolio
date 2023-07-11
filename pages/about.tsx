import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiSoundcloudFill,
  RiTwitterFill,
} from "react-icons/ri";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import about from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Justin Bento — About</title>
        <meta name="title" content="Justin Bento — About" />
        <meta
          name="keywords"
          content="Full-Stack, website design website developer"
        />
        <meta
          name="description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — About" />
        <meta
          property="og:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — About" />
        <meta
          property="twitter:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta
          property="twitter:image"
          content="/public/website-screenshot.webp"
        />
      </Head>
      <Header />
      <main className={about.mainGrid}>
        <div className="">
          <div className={about.mediaContainer}>
            <Image
              src={"/media/tinywow_PXL_20230514_151905273_24263847.jpg"}
              fill
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className={about.mainImage}
            />
          </div>
        </div>
        <div className={about.aboutCopy}>
          <h1>
            Hi &#128075;, I&#39;m Justin. A Multimedia Design Graduate learning
            various technologies.
          </h1>
          <p>
            After graduating in the midst of a pandemic, I decided to teach
            myself how to code. So I can build interactive website concepts into
            tangible examples.
          </p>
          <p>
            So I researched articles by best places to learn to code. There I
            stumbled across free resources such as{" "}
            <Link href="https://www.theodinproject.com/">The Odin Project</Link>
            , &nbsp;
            <Link href="https://www.freecodecamp.org/">freeCodeCamp</Link>, and{" "}
            <Link href="https://pll.harvard.edu/course/cs50-introduction-computer-science">
              Harvard CS50
            </Link>
            . When I graduated, I used these free courses to teach me how to
            code, understand the mind of a programmer and build my designs.
          </p>
          <p>
            Not only has this exposed me to the world of programming, I learned
            how to contribute to open source projects giving me real world
            expereince. So I can get a sample of what it is like to be a
            Front-End Software Developer.
          </p>
          <p>
            What makes me unique, Is that I have a background in multimedia
            design and development background which has exposed me to
            responosive website design, accessiblity and more. While enabling me
            to, break down complex design into manageable chuncks, plan out
            things effectivly and translate it back to the code.
          </p>
          <p>
            All in all, my eagerness to learn, and growth mindset serve as my
            success and what I love about web development is that it is an ever
            evolving discipline. that keeps my brain engaged and hungry.
          </p>
          <p>
            Thanks for taking the time to read. &#128522; 
          </p>
          <caption className={about.caption}>Ps. The colour scheme
            for this website is based off my guitar.</caption>
        </div>
        <ul role="list" className={about.social}>
          <SocialLinks
            href="https://twitter.com/bilentoos"
            icon={RiTwitterFill}
          >
            Follow on Twitter
          </SocialLinks>
          <SocialLinks
            href="https://soundcloud.com/bento-box-519166246"
            target="_blank"
            icon={RiSoundcloudFill}
          >
            Follow on Soundcloud
          </SocialLinks>
          <SocialLinks
            href="https://github.com/Justin-Bento"
            icon={RiGithubFill}
          >
            Follow on GitHub
          </SocialLinks>
          <SocialLinks
            href="https://www.linkedin.com/in/justin--bento/"
            icon={RiLinkedinBoxFill}
          >
            Follow on LinkedIn
          </SocialLinks>
          <SocialLinks
            href="mailto:contact@justin-bento.com"
            icon={RiMailFill}
            className="pt-8 mt-4 border-t border-gray-100 dark:border-gray-700/40"
          >
            contact@justin-bento.com
          </SocialLinks>
        </ul>
      </main>
      <Footer />
    </>
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
