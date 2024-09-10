import { client, urlFor } from "../sanityClient";
import { AllPosts } from "../typings";
import { GetStaticProps } from "next";
import React from "react";
import { RiCodeBoxLine, RiComputerLine, RiLink } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Projects({ posts }: any) {
  return (
    <>
      <Head>
        <title>Justin Bento - Projects</title>
        <meta name="title" content="Justin Bento - Projects" />
        <meta
          name="description"
          content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. "
        />
      </Head>
      <div className="grid place-content-center container mx-auto [min-height:100dvh;] py-16 sm:px-8">
        <span className="">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="font-medium text-black dark:text-white"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/Projects"
                  className="font-medium text-primary dark:text-accent"
                >
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl capitalize tracking-tight font-extrabold dark:text-white">
            A Showcase of Creativity
          </h1>
          <p className="leading-7 lg:text-lg text-balance max-w-5xl mt-4 dark:text-white">
            Welcome to my gallery! On this page&#44; you&#39;ll find a
            collection of my projects throughout my career as a website
            developer&#46; If you have any questions or would like to discuss a
            potential project or collaboration&#44; don&#39;t hesitate to reach
            out to me&#46;
          </p>
        </span>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {posts.map((post: any) => {
            return (
              <>
                <Card
                  key={post._id}
                  className="bg-white ring-1 ring-black dark:ring-white space-y-4 pt-6"
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
                    <h2 className="text-2xl font-bold tracking-tight capitalize">
                      {post.title}
                    </h2>
                    <p className="leading-7 line-clamp-2">{post.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <Link href={post.liveDemo} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 dark:border-white"
                      >
                        <RiComputerLine />
                        View Project
                      </Button>
                    </Link>
                    <Link href={post.projectCode} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 dark:border-white"
                      >
                        <RiCodeBoxLine />
                        View Code
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<AllPosts> = async () => {
  const data = await client.fetch(`
    *[_type == "post"]{
      _id, 
      title, 
      description, 
      projectCode,
    liveDemo,
      mainImage
    }
  `);
  return {
    props: { posts: data },
    revalidate: 60, // Update data every 60s
  };
};
