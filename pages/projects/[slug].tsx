import RichTextComponents from "@/components/RichTextComponents";
import { Button } from "@/components/ui/button";
import { client } from "@/sanityClient";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DynamicProjectPage({ post }: any) {
  return (
    <>
      <Head>
        <title>Justin Bento - {post.title}</title>
        <meta name="title" content={`Justin Bento - Projects - ${post.title}`} />
        <meta
          name="description"
          content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. "
        />
      </Head>
      <main className="md:container py-16 lg:py-0 md:mx-auto border-0 lg:max-w-[100ch] lg:my-32 p-4 lg:p-0">
        <section className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-medium text-black dark:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/Projects" className="font-medium text-black dark:text-white">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects" className="font-medium text-primary">
                  {post.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="space-y-4 mb-6 [text-wrap: balance;]">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white">
            {post.title}
          </h1>
          <p className="leading-7 lg:text-lg tracking-wide text-black dark:text-white">{post.description}</p>
          <hr className="border border-b border-black" />
        </section>
        <article className="space-y-6 [text-wrap:balance]">
          <PortableText value={post.body} components={RichTextComponents} />
        </article>
        <Link href="/projects">
          <Button variant="link" className="underline uppercase tracking-wide">
            View other projects
          </Button>
        </Link>
      </main>
    </>
  );
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
    fallback: "blocking",
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
    revalidate: 60, // Update data every 60s
  };
}
