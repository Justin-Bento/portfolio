import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { RiComputerLine, RiGithubLine } from "react-icons/ri";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";

const options = { next: { revalidate: 60 } };

type PostArticle = {
  _id: string;
  slug: { current: string };
  description: string;
  title: string;
  mainImage: string;
  projectCode: string;
  liveDemo: string;
};

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  return (
    <>
      <Navigation />
      <main className="p-4 3xl:container lg:gap-6 lg:p-8 3xl:mx-auto">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Card className="col-span-12 flex min-h-[65svh] items-center rounded-lg border-transparent bg-[#aba388]/30 p-8 xl:min-h-[36rem]">
            <div className="space-y-2 p-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="font-medium text-black/50 dark:text-white"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/Projects"
                      className="font-medium text-black underline dark:text-white"
                    >
                      Projects
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-4xl font-bold lg:text-5xl dark:text-white">
                Building Ideas, One Project at a Time.
              </h1>
              <p className="mt-4 max-w-5xl text-balance leading-7 lg:text-lg dark:text-white">
                Welcome to my portfolio—a showcase of projects that highlight my
                growth as a developer. Each piece reflects a blend of
                problem-solving, technical expertise, and a passion for
                delivering effective solutions.
              </p>
            </div>
          </Card>
          {posts.map((post: PostArticle) => (
            <Card key={post._id} className="col-span-12 p-6 md:col-span-6">
              <div className="relative mb-4 h-10 w-10">
                <Image
                  fill
                  src={urlFor(post.mainImage).url()}
                  alt={`Image of ${post.title.toLowerCase()}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-full"
                />
              </div>
              <h2 className="my-2 text-2xl font-bold text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                {post.description}
              </p>
              <span className="mt-4 block space-x-4">
                <Link href={post.projectCode}>
                  <Button variant="secondary" size="sm">
                    <RiGithubLine />
                    View Code on GitHub
                  </Button>
                </Link>
                <Link href={post.liveDemo}>
                  <Button variant="secondary" size="sm">
                    <RiComputerLine />
                    Interact With Project
                  </Button>
                </Link>
              </span>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
