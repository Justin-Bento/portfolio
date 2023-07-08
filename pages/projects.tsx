import Project_Card from "@/components/Project_Card";
import { projects } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { client, urlFor } from '../sanityClient';
import { AllPosts } from '../typings';
import { GetStaticProps } from "next";

export default function Projects({ posts }: AllPosts) {
  return (
    <>
      <Head>
        <title>Justin Bento — Projects</title>
        <meta name="title" content="Justin Bento — Projects" />
        <meta name="keywords" content="Full-Stack, website design website developer" />
        <meta name="description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — Projects" />
        <meta property="og:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — Projects" />
        <meta property="twitter:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <main className="my-32 space-y-8">
        <section className="min-h-0 wrapper">
          <h2 className="display-small">Signature Projects I’ve made.</h2>
          <p className="mt-2 body-large">I’ve worked on tons of projects over the years but these are the ones that have stood out and I’m most proud of. Some are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
        </section>
        <section className="grid grid-cols-1 mx-auto my-8 lg:grid-cols-2 max-w-7xl">
          {posts.map((data) => {
            return <Project_Card key={data.title.toString().toLowerCase()} Headline={data.title} Supporting={data.description} Link={`/projects/${data.slug.current}`} Media={urlFor(data.mainImage).url()} />
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<AllPosts> = async () => {
  const data = await client.fetch(`
    *[_type == "post"]{
      _id, 
      title, 
      description, 
      slug,   
      mainImage
    }
  `);
  return {
    props: { posts: data },
  };
};