import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AudioLines, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Main Hero Section */}
        <div className="group col-span-12">
          <Card className="flex items-center justify-center min-h-[50rem]">
            <div className="mx-auto w-10/12">
              <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-6xl text-pretty">
                Hi, my name is{" "}
                <span className="text-sky-500 underline">Justin Bento</span>
              </h1>
              <p className="text-3xl font-extrabold opacity-70 lg:text-6xl text-pretty leading-[2]">
                I am a Full-Stack Developer.
              </p>
              <ul className="flex list-none items-center gap-4 mt-4">
                <li className="">
                  <Link
                    href="/projects"
                    className="bg-black text-white py-2.5 px-5 text-sm uppercase tracking-wide leading-[2] font-medium hover:bg-sky-500 transition-all"
                  >
                    View Proejcts
                  </Link>
                </li>
                <li className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Justin-Bento"
                  >
                    <Github className="text-2xl hover:fill-primary" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/justinbento/"
                  >
                    <Linkedin className="text-2xl hover:fill-primary" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/Justin-Bento"
                  >
                    <Twitter className="text-2xl hover:fill-primary" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/fretfuze"
                  >
                    <AudioLines className="text-2xl hover:fill-primary" />
                  </Link>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        {/* About Me Card */}
        <div className="group col-span-12 lg:col-span-4">
          <Link href="/about">
            <Card className="group-hover:bg-[#83C6C6]/30">
              <CardContent className="flex flex-col items-start justify-center space-y-3 transition-all xl:h-64 xl:space-y-6">
                <CardTitle>About Me</CardTitle>
                <CardDescription className="line-clamp-4 leading-6">
                  Hello! My name is Justin, and I have a passion for creating
                  things that live on the internet. My journey into web
                  development began back in 2019 when I started experimenting
                  with custom HTML, and CSS themes. What began as a casual
                  interest in tweaking designs quickly turned into a fascination
                  with the power of code. As I learned to manipulate HTML and
                  CSS through computer classes, I realized that these tools
                  allowed me to bring my ideas to life in ways I hadn&#39;t
                  imagined.
                </CardDescription>
                <CardDescription className="flex items-center justify-start gap-1 group-hover:underline">
                  Read More <span className="block text-base">&rarr;</span>
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
        {/* Projects Card */}
        <Link href="/projects" className="group col-span-12 lg:col-span-4">
          <Card className="group-hover:bg-[#aba388]/30">
            <CardContent className="flex flex-col items-start justify-center space-y-3 transition-all xl:h-64 xl:space-y-6">
              <CardTitle>Some Things I&#39;ve Built</CardTitle>
              <CardDescription className="line-clamp-4 leading-6">
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
              </CardDescription>
              <CardDescription className="flex items-center justify-start gap-1 group-hover:underline">
                Read More <span className="block text-base">&rarr;</span>
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Work Experience Card */}
        <Link href="/experience" className="group col-span-12 lg:col-span-4">
          <Card className="group-hover:bg-[#c6afb1]/30">
            <CardContent className="flex flex-col items-start justify-center space-y-3 transition-all xl:h-64 xl:space-y-6">
              <CardTitle>Where I&#39;ve Worked</CardTitle>
              <CardDescription className="line-clamp-4 leading-6">
                After graduating during the pandemic, I found myself at a
                crossroads, exploring various career paths to find the right
                fit. It was a challenging time, filled with uncertainty, but it
                ultimately led me to the world of web development. I quickly
                realized that it was something I genuinely enjoyed and felt
                driven to pursue.
              </CardDescription>
              <CardDescription className="flex items-center justify-start gap-1 group-hover:underline">
                Read More <span className="block text-base">&rarr;</span>
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </section>
    </>
  );
}
