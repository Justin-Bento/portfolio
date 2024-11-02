import { Card } from "@/components/ui/card";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxLine, RiSoundcloudLine, RiTwitterLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 max-h-dvh bg-white">
        {/* Main Hero Section */}
        <Card className="col-span-12 h-[65dvh] flex items-center justify-center">
          <div className="space-y-4 w-11/12 mx-auto">
            <p className="scroll-m-20 font-bold text-md">Hi, my name is</p>
            <h1 className="scroll-m-20 font-extrabold text-6xl">Justin Bento</h1>
            <p className="scroll-m-20 font-extrabold text-6xl opacity-70">I build things for the web.</p>
            <div className="flex items-center gap-4">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Justin-Bento">
                <RiGithubLine className="size-6" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Justin-Bento">
                <RiLinkedinBoxLine className="size-6" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Justin-Bento">
                <RiTwitterLine className="size-6" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Justin-Bento">
                <RiSoundcloudLine className="size-6" />
              </Link>
            </div>
          </div>
        </Card>
        {/* About Me Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh] flex flex-col items-start justify-center">
          <div className=" px-4 py-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">About Me</h2>
            <p className="text-sm leading-5 line-clamp-4">
              Hello! My name is Justin and I enjoy creating things that live on the internet. My interest in web
              development started back in 2019 when I decided to try editing custom Wix themes — turns out hacking
              together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <Link href="/about" className="text-sm flex items-center justify-start">
              Read More <span className="text-base">&rarr;</span>
            </Link>
          </div>
        </Card>
        {/* Projects Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">
              Some Things I've Built
            </h2>
          </div>
        </Card>
        {/* Work Experience Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">
              Where I've Worked
            </h2>
          </div>
        </Card>
      </main>
    </>
  );
}
