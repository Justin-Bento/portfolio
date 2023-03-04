import Project_Card from "@/components/Project_Card";
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
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 capitalize dark:text-slate-50">Signature Prjects I’ve made, over my carrer.</h2>
          <p className="mt-2 text-base leading-8 text-gray-600 dark:text-slate-100">I’ve worked on tons of projects over the years but these are the ones that have stood out and I’m most proud of. Some are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
        </section>
        <section className="grid grid-cols-1 my-8 wrapper lg:grid-cols-2">
          <Project_Card Headline="Paramount Properties LTD" Media="/projects/paramount-properties-ltd.png" Link="" />
          <Project_Card Headline="Option One Staffing Agency" Media="/projects/option-one-staffing-agency.webp" Link="https://optionone-staffing-agency.vercel.app/" />
          <Project_Card Headline="Believe Support Services" Media="/projects/believe-support-services-logo.webp" Link="https://believe-support-services.vercel.app/" />
          <Project_Card Headline="Marker App" Media="/projects/marker-brand.png" Link="" />
          <Project_Card Headline="Urban Greens Antigua" Media="/projects/urban-greens-antigua.png" Link="https://www.urbangreensantigua.com/" />
          <Project_Card Headline="ParkSmart" Media="/projects/parksmart-project.png" Link="https://www.canva.com/design/DAEXeWFsbI4/GeiVkAU9MYeVHZc0SDYlJw/view?utm_content=DAEXeWFsbI4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" />
          <Project_Card Headline="Antigua News Room Redesign" Media="/projects/antigua-news-room-logo.png" Link="https://www.figma.com/file/x5pcKa5FUxF85JMBolszC9/Antigua-News-Room?node-id=0%3A1&t=FmqPUlUteGYw2OQo-1" />
        </section>
      </main>
      <Footer />
    </>
  )
}