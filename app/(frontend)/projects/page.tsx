import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { RiComputerLine } from "react-icons/ri";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <Header />
      <main className="container mx-auto grid grid-cols-1 gap-6 p-12 my-12 space-y-4">
        <section className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-medium text-black dark:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/Projects" className="font-medium text-primary dark:text-accent">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl capitalize tracking-tight font-extrabold dark:text-white">
            A Showcase of Creativity
          </h1>
          <p className="leading-7 lg:text-lg text-balance max-w-5xl mt-4 dark:text-white">
            Welcome to my gallery! On this page&#44; you&#39;ll find a collection of my projects throughout my career as
            a website developer&#46; If you have any questions or would like to discuss a potential project or
            collaboration&#44; don&#39;t hesitate to reach out to me&#46;
          </p>
        </section>
        <section className="grid lg:grid-cols-12 gap-8 ">
          {posts.map((post: PostArticle) => (
            <Card
              key={post._id}
              className="bg-white dark:bg-black ring-1 ring-black dark:ring-white space-y-4 pt-6 col-span-12 md:col-span-6"
            >
              <CardHeader className="relative flex w-8 h-8 overflow-hidden rounded-full shadow shrink-0 mx-6">
                <Image
                  fill
                  src={urlFor(post.mainImage).url()}
                  alt={`Image of ${post.title.toLowerCase()}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight capitalize">{post.title}</h2>
                <p className="leading-7 line-clamp-2">{post.description}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Link href={post.liveDemo}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 dark:border-white">
                    <RiComputerLine />
                    View Project
                  </Button>
                </Link>
                <Link href={post.projectCode}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 dark:border-white">
                    <RiComputerLine />
                    View Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
