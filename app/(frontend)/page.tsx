import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 p-8 gap-6 max-h-dvh bg-[#fafafa]">
        <Card className="bg-[#fff] p-5 ring-1 ring-black/5 shadow-none col-span-12">
          <div className="flex items-center">
            <span className="flex flex-1 items-center gap-4 justify-start">
              <Logo />
            </span>
            <ul className="flex flex-1 items-center gap-4 justify-end">
              <li>
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base dark:text-white"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 space-y-5">
          <h1 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Hi my name is,
          </h1>
          <h1 className="text-6xl font-bold text-zinc-950 dark:text-white">Justin Bento</h1>
          <p className="text-6xl font-bold text-black/50 dark:text-white">I build things for the web.</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <h2 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            About Me
          </h2>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <h2 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Some Things I&#39;ve built.
          </h2>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <h2 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Where I&#39;ve worked
          </h2>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <h2 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Footer
          </h2>
        </Card>
      </main>
    </>
  );
}
