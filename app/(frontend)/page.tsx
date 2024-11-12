import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiSoundcloudLine,
  RiTwitterLine,
} from "react-icons/ri";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh 3xl:container lg:p-8 3xl:mx-auto">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Main Hero Section */}
          <Card className="col-span-12 flex min-h-[65svh] items-center justify-center lg:min-h-[50rem]">
            <div className="mx-auto w-11/12 space-y-4">
              <p className="text-md scroll-m-20 font-bold">Hi, my name is</p>
              <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-6xl">
                Justin Bento
              </h1>
              <p className="scroll-m-20 text-3xl font-extrabold opacity-70 lg:text-6xl">
                I build things for the web.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-gray-200 hover:bg-gray-200/70"
                  >
                    Let&#39;s Connect
                  </Button>
                </Link>
                <span className="block">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Justin-Bento"
                >
                  <RiGithubLine className="text-2xl hover:fill-primary" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/justinbento/"
                >
                  <RiLinkedinBoxLine className="text-2xl hover:fill-primary" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Justin-Bento"
                >
                  <RiTwitterLine className="text-2xl hover:fill-primary" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://soundcloud.com/fretfuze"
                >
                  <RiSoundcloudLine className="text-2xl hover:fill-primary" />
                </a>
              </div>
            </div>
          </Card>
          {/* About Me Card */}
          <Link
            href="/about"
            className="col-span-12 flex flex-col items-start justify-center lg:col-span-4"
          >
            <Card className="h-[25vh] space-y-3 px-4 py-5 sm:p-6 xl:h-64">
              <h2 className="text-md/7 text-zinc-950 font-semibold dark:text-white">
                About Me
              </h2>
              <p className="line-clamp-4 text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400">
                Hello! My name is Justin, and I have a passion for creating
                things that live on the internet. My journey into web
                development began back in 2019 when I started experimenting with
                custom HTML, and CSS themes. What began as a casual interest in
                tweaking designs quickly turned into a fascination with the
                power of code. As I learned to manipulate HTML and CSS through
                computer classes, I realized that these tools allowed me to
                bring my ideas to life in ways I hadn&#39;t imagined.
              </p>
              <Link
                href="/about"
                className="flex items-center justify-start gap-1 text-sm text-gray-700"
              >
                Read More <span className="block text-base">&rarr;</span>
              </Link>
            </Card>
          </Link>
          {/* Projects Card */}
          <Link
            href="/projects"
            className="col-span-12 flex flex-col items-start justify-center lg:col-span-4"
          >
            <Card className="h-[25vh] space-y-3 px-4 py-5 sm:p-6 xl:h-64">
              <h2 className="text-md/7 text-zinc-950 font-semibold dark:text-white">
                Some Things I&#39;ve Built
              </h2>
              <p className="line-clamp-4 text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400">
                I love building interactive projects for the web because it
                allows me to bring ideas to life in ways that are both
                functional and engaging. Over the years, I&#39;ve had the
                opportunity to work on a wide range of projects, from personal
                blogs to complex web applications and even simple games. Each
                project, no matter how small or large, has been a chance to
                learn something new, refine my skills, and deepen my
                understanding of core principles. I believe that the
                fundamentals are the foundation of great development, so I
                regularly revisit the basics to sharpen my skills and ensure my
                code is both clean and efficient.
              </p>
              <Link
                href="/projects"
                className="flex items-center justify-start gap-1 text-sm text-gray-700"
              >
                Read More <span className="block text-base">&rarr;</span>
              </Link>
            </Card>
          </Link>
          {/* Work Experience Card */}
          <Link
            href="/experience"
            className="col-span-12 flex flex-col items-start justify-center lg:col-span-4"
          >
            <Card className="h-[25vh] space-y-3 px-4 py-5 sm:p-6 xl:h-64">
              <h2 className="text-md/7 text-zinc-950 font-semibold dark:text-white">
                Where I&#39;ve Worked
              </h2>
              <p className="line-clamp-4 text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400">
                After graduating during the pandemic, I found myself at a
                crossroads, exploring various career paths to find the right
                fit. It was a challenging time, filled with uncertainty, but it
                ultimately led me to the world of web development. I quickly
                realized that it was something I genuinely enjoyed and felt
                driven to pursue.
              </p>
              <Link
                href="/projects"
                className="flex items-center justify-start gap-1 text-sm text-gray-700"
              >
                Coming Soon <span className="block text-base">&rarr;</span>
              </Link>
            </Card>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
