import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanityClient";
import Head from "next/head";
import { PortableText } from '@portabletext/react';
import article from "@/styles/articles.module.css"
import RichTextComponents from "@/components/RichTextComponents";
import Link from "next/link";
import { RiGithubLine, RiComputerLine } from "react-icons/ri";

export default function ProjectsSlug({ post }: any) {
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
        <meta property="og:title" content={`Justin Bento — ${post.title}`} />
        <meta property="og:description" content={`${post.description}`} />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content={`Justin Bento — ${post.title}`} />
        <meta property="twitter:description" content={`${post.description}`} />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <main className="container">
        <article className={`${article.content}`}>
          <h1 className={article.pageHeadline}>{post.title}</h1>
          <p className={article.pageSupporting}>{post.description}</p>
          <div className={article.content_actions}>
            <Link href={post.liveDemo} target="_blank">
              <RiComputerLine />
              Live Demo
            </Link>
            <Link href={post.projectCode} target="_blank">
              <RiGithubLine />
              Github Code
            </Link>
          </div>
          <PortableText value={post.body} components={RichTextComponents} />
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