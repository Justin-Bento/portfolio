import Project_Card from "@/components/Project_Card";
import { projects } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Projects() {
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
        <section className="wrapper">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 capitalize dark:text-slate-50">Signature Projects I’ve made.</h2>
          <p className="mt-2 text-base leading-8 text-gray-600 dark:text-slate-100">I’ve worked on tons of projects over the years but these are the ones that have stood out and I’m most proud of. Some are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
        </section>
        <section className="grid grid-cols-1 mx-auto my-8 lg:grid-cols-2 max-w-7xl">
          {projects.map((data) => {
            return <Project_Card key={data.title.toString().toLowerCase()} Headline={data.title} Supporting={data.body} Media={data.image!} Link={data.url} />
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}