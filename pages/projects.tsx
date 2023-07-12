import Project_Card from "@/components/Project_Card";
import { projects } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { client, urlFor } from '../sanityClient';
import { AllPosts } from '../typings';
import { GetStaticProps } from "next";
import project from "@/styles/Project.module.css"

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
      <main className="container">
        <section className={project.pageInfo}>
          <h1 className="headline">Signature Projects I’ve made.</h1>
          <p className="body">If you see something that piques your interest, check out the code or leave a like.</p>
        </section>
        <section className={project.grid_container}>
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
    revalidate: 60 // Update data every 60s
  }
};