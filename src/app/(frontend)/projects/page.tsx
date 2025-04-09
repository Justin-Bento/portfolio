import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Laptop } from "lucide-react";

import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "I’m Justin Bento. I live in Toronto, where I build projects to last.",
};

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FullWidthCard>
          <FullWidthCard.Breadcrumbs>
            <FullWidthCard.BreadcrumbItem href="/">
              Home
            </FullWidthCard.BreadcrumbItem>
            <FullWidthCard.BreadcrumbItem href="/projects" isActive>
              Projects
            </FullWidthCard.BreadcrumbItem>
          </FullWidthCard.Breadcrumbs>
          <FullWidthCard.Heading>
            Building Ideas, One Project at a Time
          </FullWidthCard.Heading>
          <FullWidthCard.Overview>
            Welcome to my portfolio—a showcase of projects that highlight my
            growth as a developer. Each piece reflects a blend of
            problem-solving, technical expertise, and a passion for delivering
            effective solutions.
          </FullWidthCard.Overview>
        </FullWidthCard>
      </section>
      <ul className="grid list-none grid-cols-12 gap-6 pt-8">
        {posts.map((post) => (
          <li key={post._id} className="col-span-12 lg:col-span-6">
            <Card className="">
              <CardContent className="space-y-4">
                <CardHeader className="relative mb-4 size-12">
                  {post.mainImage ? (
                    <Image
                      fill
                      src={urlFor(post.mainImage).url()}
                      alt={`Image of ${post.title}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-full"
                    />
                  ) : null}
                </CardHeader>
                <CardTitle>{post?.title}</CardTitle>
                <CardDescription>{post?.description}</CardDescription>
                <CardFooter className="pl-0 flex flex-col lg:flex-row items-start gap-2">
                  <Link href={`${post.projectCode}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Github />
                      View Code on GitHub
                    </Button>
                  </Link>
                  <Link href={`${post.liveDemo}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Laptop />
                      Interact With Project
                    </Button>
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
