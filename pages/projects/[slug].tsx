import { Button } from '@/components/Button';
import RichTextComponents from '@/components/RichTextComponents';
import { client } from '@/sanityClient';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react'

export default function DynamicProjectPage({ post }: any) {
  return (
    <article className="md:container md:mx-auto lg:max-w-[100ch] lg:my-32 p-4 lg:p-0">
      <nav>
        <nav className="flex text-sm mb-2 items-center">
          <Button variant="link" className="text-slate-700"><Link href="/">Home</Link></Button>
          <span>/</span>
          <Button variant="link" className="text-slate-700"><Link href="/projects">Projects</Link></Button>
          <span>/</span>
          <Button variant="link"><Link href={`/${post.title}`}>{post.title}</Link></Button>
        </nav>
      </nav>
      <header>
        <h1 className="block tracking-normal [text-wrap:balance] text-3xl sm:text-4xl font-extrabold md:text-5xl text-neutral-950">{post.title}</h1>
        <p className=" mt-4 tracking-wide text-base sm:text-lg lg:text-xl text-neutral-600 max-w-[90ch]">{post.description}</p>
        <div className="prose max-w-[100ch] prose-p:leading-7 prose-p:text-lg prose-p:tracking-wide">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </header>

    </article>
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