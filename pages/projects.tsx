import { Button } from '@/components/Button';
import { client, urlFor } from '../sanityClient';
import { AllPosts } from '../typings';
import { GetStaticProps } from "next";
import { useRouter } from 'next/router'
import React from 'react'
import { RiCodeBoxLine, RiComputerLine, RiLink } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ posts }: any) {
  return (
    <div className="lg:container lg:mx-auto lg:my-32 p-4 lg:p-0">
      <span className="">
        <nav className="flex text-sm mb-2 items-center">
          <Button variant="link" className="text-slate-700"><Link href="/">Home</Link></Button>
          <span>/</span>
          <Button variant="link"><Link href="/projects">Projects</Link></Button>
        </nav>
        <h1 className="block tracking-normal [text-wrap:balance] text-3xl sm:text-4xl font-extrabold md:text-5xl text-neutral-950">A Showcase of Creativity</h1>
        <p className="mt-4 tracking-wide text-base sm:text-lg lg:text-xl text-neutral-600 max-w-[90ch]">Welcome to my project gallery! Here, you&#39;ll find a collection of my diverse creations, ranging from interactive multimedia to visually captivating designs. Take a moment to browse through my work and experience the art of storytelling through technology</p>
      </span>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        {posts.map((post: any) => {
          return (
            <>
              <div className="overflow-hidden rounded-lg bg-white/10 shadow ring-2 ring-gray-300">
                <div className="px-4 py-5 sm:p-8">
                  <span className="mb-6 shadow  relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <Image fill src={urlFor(post.mainImage).url()} alt={`Image of ${post.title.toLowerCase()}`} />
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-neutral-950">{post.title}</h2>
                  <p className=" my-2 text-base text-neutral-600 tracking-wide line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-4">
                    <Link href={`/projects/${post.slug.current}`} >
                      <Button variant="outline" size="sm" className='mt-4 flex items-center gap-1'>
                        <RiComputerLine />
                        View Project
                      </Button>
                    </Link>
                    <Link href={post.liveDemo} target="_blank">
                      <Button variant="outline" size="sm" className='mt-4 flex items-center gap-1'>
                        <RiCodeBoxLine />
                        View Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
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
  }
};