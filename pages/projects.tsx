import { Button } from '@/components/Button';
import { client, urlFor } from '../sanityClient';
import { AllPosts } from '../typings';
import { GetStaticProps } from 'next';
import React from 'react';
import { RiCodeBoxLine, RiComputerLine, RiLink } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

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
      <div className="grid place-content-center max-w-7xl mx-auto [min-height:100dvh;] py-16 sm:px-8">
        <span className="">
          <nav className="flex items-center mb-2 text-sm">
            <Button variant="link" className="text-slate-700 dark:text-slate-300">
              <Link href="/">Home</Link>
            </Button>
            <span className="dark:text-slate-300">/</span>
            <Button variant="link" className="text-primary-600 dark:text-primary-400">
              <Link href="/projects">Projects</Link>
            </Button>
          </nav>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">A Showcase of Creativity</h1>
          <p className="leading-7 lg:text-lg tracking-wide mt-4 dark:text-primary-40">
            Welcome to my gallery! On this page&#44; you&#39;ll find a collection of my projects throughout my career as a website
            developer&#46; If you have any questions or would like to discuss a potential project or collaboration&#44; don&#39;t hesitate
            to reach out to me&#46;
          </p>
        </span>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {posts.map((post: any) => {
            return (
              <>
                <div
                  key={post._id}
                  className="overflow-hidden rounded-lg ring-1 ring-gray-500 dark:ring-gray-50 bg-white/10 dark:bg-primary-950/5"
                >
                  <div className="px-4 py-5 sm:p-8">
                    <span className="relative flex w-8 h-8 mb-6 overflow-hidden rounded-full shadow shrink-0">
                      <Image
                        fill
                        src={urlFor(post.mainImage).url()}
                        alt={`Image of ${post.title.toLowerCase()}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide font-display md:text-2xl dark:text-primary-40">{post.title}</h2>
                    <p className="my-2 text-base tracking-wide line-clamp-2 dark:text-slate-200">{post.description}</p>
                    <div className="flex items-center gap-4">
                      <Link href={`/projects/${post.slug.current}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4 ">
                          <RiComputerLine />
                          View Project
                        </Button>
                      </Link>
                      <Link href={post.projectCode} target="_blank">
                        <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4 ">
                          <RiCodeBoxLine />
                          View Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
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
      slug,   
      mainImage
    }
  `);
  return {
    props: { posts: data },
    revalidate: 60 // Update data every 60s
  };
};
