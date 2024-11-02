import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 max-h-dvh bg-white">
        {/* Main Hero Section */}
        <Card className="col-span-12 h-[50dvh] flex items-center justify-center">
          <div className="space-y-4 w-11/12 mx-auto">
            <p className="scroll-m-20 font-bold text-md">Hi, my name is</p>
            <h1 className="scroll-m-20 font-extrabold text-6xl">Justin Bento</h1>
            <p className="scroll-m-20 font-extrabold text-6xl opacity-70">I build things for the web.</p>
          </div>
        </Card>
        {/* About Me Card */}
        <Card className="col-span-12 lg:col-span-4 h-[25vh]">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950 dark:text-white">About Me</h2>
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
