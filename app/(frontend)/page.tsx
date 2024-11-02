import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 p-8 gap-6 max-h-dvh bg-[#fafafa]">
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <p className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Navigation
          </p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <h1 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Hero Content
          </h1>
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
