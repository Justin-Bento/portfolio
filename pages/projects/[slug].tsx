import { Button } from '@/components/Button';
import RichTextComponents from '@/components/RichTextComponents';
import { client } from '@/sanityClient';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

export default function DynamicProjectPage({ post }: any) {
  return (
    <>
      <Head>
        <title>Justin Bento  - {post.title}</title>
        <meta name="title" content={`Justin Bento - Projects - ${post.title}`} />
        <meta name="description" content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. " />
      </Head>
      <main className="md:container py-16 lg:py-0 md:mx-auto border-0 lg:max-w-[100ch] lg:my-32 p-4 lg:p-0">
        <nav className="flex items-center mb-2 text-sm">
          <Button variant="link" className="tracking-wider text-slate-700 dark:text-slate-300"><Link href="/">Home</Link></Button>
          <span className="dark:text-slate-300">/</span>
          <Button variant="link" className="tracking-wider text-slate-700 dark:text-slate-300"><Link href="/projects">Projects</Link></Button>
          <span className="dark:text-slate-300">/</span>
          <Button variant="link" className="tracking-wider text-primary-600 dark:text-primary-400"><Link href={`/${post.title}`}>{post.title}</Link></Button>
        </nav>
        <h1 className="block tracking-normal [text-wrap:balance] text-3xl sm:text-4xl font-extrabold md:text-5xl">{post.title}</h1>
        <p className="mt-4 tracking-wide text-base sm:text-lg lg:text-xl max-w-[90ch]">{post.description}</p>
        <div className="max-w-full prose prose-p:leading-7 dark:prose-invert prose-p:text-lg prose-ul:text-lg prose-li:text-lg prose-p:tracking-wide prose-headings:font-bold prose-img:block">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </main>
    </>
  )
}


export async function getStaticPaths() {
  const query = `*[_type == "post"]{ 'slug': slug.current }`;
  const posts = await client.fetch(query);
  const paths =
    posts?.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })) || [];
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    description,
    projectCode,
    liveDemo,
    'slug': slug.current,
    mainImage {
      asset-> {
        url
      }
    },
    body
  }
  `;
  const options = { slug: params.slug };
  const post = await client.fetch(query, options);
  return {
    props: { post: post[0] },
    revalidate: 60 // Update data every 60s
  };
}