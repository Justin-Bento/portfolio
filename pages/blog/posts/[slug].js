import Head from "next/head";
import { format, parseISO } from "date-fns";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { Article } from "../../../components/Article";

import { getBlogPosts } from "../../../lib/blog-data";

export default function Blog({ title, date, content, description }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>blog: {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-11/12 my-16 mx-auto sm:max-w-4xl">
        <div className="blog-post">
          <Article Headline={title} Meta={format(parseISO(date), "MMMM do, uuu")} Subtitle={description} />
          <div className="prose my-8 sm:max-w-5xl">{hydratedContent}</div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const blogPosts = getBlogPosts();
  const { data, content } = blogPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getBlogPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
