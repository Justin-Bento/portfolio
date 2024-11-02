import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 p-8 gap-6 max-h-dvh bg-[#fafafa]">
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <p className="">Navigation</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <p className="">Hero Content</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <p className="">About Me</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <p className="">Some Things I&#39;ve built.</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12 lg:col-span-4">
          <p className="">Where I&#39;ve worked</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-5 sm:p-6 ring-1 ring-black/5 shadow-none col-span-12">
          <p className="">Footer</p>
        </Card>
      </main>
    </>
  );
}
