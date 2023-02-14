import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function uses() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Contact - Justin Bento Portfolio</title>
        <meta name="title" content="Justin Bento Portfolio" />
        <meta name="description" content="Join me, on this adventure through my portfolio. Experience my passion for design, dev, and music all located  in one convenient place." />
      </Head>
      <Header />
      <main className="p-4 my-12 md:my-24">
        <section className="">
          <h1 className="max-w-2xl text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">I’ve spoken at events all around the world and been interviewed for many podcasts.</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}
