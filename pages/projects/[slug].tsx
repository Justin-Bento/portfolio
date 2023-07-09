import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanityClient";
import Head from "next/head";
import {PortableText} from '@portabletext/react';

export default function ProjectsSlug({post}: any) {
  console.log(post)
  return (
    <>
      <Head>
        <title>Justin Bento — {post.title}</title>
        <meta name="keywords" content="Full-Stack, website design website developer" />
        <meta name="description" content={`${post.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content={`Justin Bento — ${post.title}`}/>
        <meta property="og:description" content={`${post.description}`} />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content={`Justin Bento — ${post.title}`}/>
        <meta property="twitter:description" content={`${post.description}`} />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <main className="p-4 my-12 sm:p-0 md:my-24">
          <article className="mx-auto prose dark:prose-invert lg:prose-lg">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <section className="">
              <PortableText value={post.body} />
            </section>
          </article>
      </main>
      <Footer />
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
  };
}