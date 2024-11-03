import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine, RiSoundcloudLine, RiTwitterLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 max-h-dvh ">
        {/* Main Hero Section */}
        <Card className="col-span-12 h-[65dvh] flex items-center justify-center">
          <div className="space-y-4 w-11/12 mx-auto">
            <p className="scroll-m-20 font-bold text-md">Hi, my name is</p>
            <h1 className="scroll-m-20 font-extrabold text-6xl">Justin Bento</h1>
            <p className="scroll-m-20 font-extrabold text-6xl opacity-70">I build things for the web.</p>
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" className="bg-gray-200 hover:bg-gray-200/70">
                  Let&#39;s Connect
                </Button>
              </Link>
              <span className="block">|</span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Justin-Bento">
                <RiGithubLine className="text-2xl hover:fill-primary" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justinbento/">
                <RiLinkedinBoxLine className="text-2xl hover:fill-primary" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Justin-Bento">
                <RiTwitterLine className="text-2xl hover:fill-primary" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/fretfuze">
                <RiSoundcloudLine className="text-2xl hover:fill-primary" />
              </a>
            </div>
          </div>
        </Card>
        {/* About Me Card */}
        <Link href="/about" className="col-span-12 lg:col-span-4 h-[25vh] flex flex-col items-start justify-center">
          <Card className="px-4 py-5 sm:p-6 space-y-3">
            <h2 className="text-md/7 font-semibold text-zinc-950 dark:text-white">About Me</h2>
            <p className="text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400 line-clamp-4">
              Hello! My name is Justin, and I have a passion for creating things that live on the internet. My journey
              into web development began back in 2019 when I started experimenting with custom HTML, and CSS themes.
              What began as a casual interest in tweaking designs quickly turned into a fascination with the power of
              code. As I learned to manipulate HTML and CSS through computer classes, I realized that these tools
              allowed me to bring my ideas to life in ways I hadn&#39;t imagined.
            </p>
            <Link href="/about" className="text-gray-700 text-sm gap-1 flex items-center justify-start">
              Read More <span className="text-base block">&rarr;</span>
            </Link>
          </Card>
        </Link>
        {/* Projects Card */}
        <Link href="/projects" className="col-span-12 lg:col-span-4 h-[25vh] flex flex-col items-start justify-center">
          <Card className="px-4 py-5 sm:p-6 space-y-3">
            <h2 className="text-md/7 font-semibold text-zinc-950 dark:text-white">Some Things I&#39;ve Built</h2>
            <p className="text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400 line-clamp-4">
              I love building interactive projects for the web because it allows me to bring ideas to life in ways that
              are both functional and engaging. Over the years, I&#39;ve had the opportunity to work on a wide range of
              projects, from personal blogs to complex web applications and even simple games. Each project, no matter
              how small or large, has been a chance to learn something new, refine my skills, and deepen my
              understanding of core principles. I believe that the fundamentals are the foundation of great development,
              so I regularly revisit the basics to sharpen my skills and ensure my code is both clean and efficient.
            </p>
            <Link href="/projects" className="text-gray-700 text-sm gap-1 flex items-center justify-start">
              Read More <span className="text-base block">&rarr;</span>
            </Link>
          </Card>
        </Link>
        {/* Work Experience Card */}
        <Link
          href="/experience"
          className="col-span-12 lg:col-span-4 h-[25vh] flex flex-col items-start justify-center"
        >
          <Card className="px-4 py-5 sm:p-6 space-y-3">
            <h2 className="text-md/7 font-semibold text-zinc-950 dark:text-white">Where I&#39;ve Worked</h2>
            <p className="text-base/6 text-gray-700 sm:text-sm/6 dark:text-gray-400 line-clamp-4">
              After graduating during the pandemic, I found myself at a crossroads, exploring various career paths to
              find the right fit. It was a challenging time, filled with uncertainty, but it ultimately led me to the
              world of web development. I quickly realized that it was something I genuinely enjoyed and felt driven to
              pursue.
            </p>
            <Link href="/experience" className="text-gray-700 text-sm gap-1 flex items-center justify-start">
              Read More <span className="text-base block">&rarr;</span>
            </Link>
          </Card>
        </Link>
      </main>
    </>
  );
}
