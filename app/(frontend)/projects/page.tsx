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
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 lg:gap-6 lg:p-8">
        <section className="bg-primary/10 col-span-12 p-8 rounded-lg min-h-[37vh] flex items-center">
          <div className="p-6 space-y-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-medium text-black/50 dark:text-white">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Projects" className="font-medium text-black">
                    Projects
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl lg:text-5xl font-bold dark:text-white">A Showcase of Creativity.</h1>
            <p className="leading-7 lg:text-lg text-balance max-w-5xl mt-4 dark:text-white">
              Welcome to my gallery! On this page&#44; you&#39;ll find a collection of my projects throughout my career
              as a website developer&#46; If you have any questions or would like to discuss a potential project or
              collaboration&#44; don&#39;t hesitate to reach out to me&#46;
            </p>
          </div>
        </section>
        {posts.map((post: PostArticle) => (
          <Card key={post._id} className="col-span-12 md:col-span-6 p-6">
            <div className="relative w-10 h-10 mb-4">
              <Image
                fill
                src={urlFor(post.mainImage).url()}
                alt={`Image of ${post.title.toLowerCase()}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white my-2">{post.title}</h2>
            <p className="text-base font-medium text-gray-500 dark:text-gray-300 leading-relaxed">{post.description}</p>
            <span className="block space-x-4 mt-4">
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
      </main>
    </>
  );
}
