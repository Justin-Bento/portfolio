import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Uses_Card from "@/components/Uses_Card";

export default function uses() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Uses - Justin Bento Portfolio</title>
        <meta name="title" content="Justin Bento Portfolio" />
        <meta name="description" content="Join me, on this adventure through my portfolio. Experience my passion for design, dev, and music all located  in one convenient place." />
      </Head>
      <Header />
      <main className="p-4 my-12 md:my-24">
        <section className="">
          <h2 className=" text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">Software I use, gadgets I love, and things I recommend.</h2>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {gadgets.map(data => {
              return <Uses_Card key={data.title.toString()} Headline={data.title} Supporting={data.body} />
            })}
          </div>
        </section>
          <section className="">
            <p className="mt-24 text-sm text-center">I am not sponsered with any of these companies. These are things I just love to use.</p>
          </section>
      </main>
      <Footer />
    </>
  )
}
const gadgets = [
  {title: "Framework Laptop", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Custom Built Desktop", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Google Pixel 6", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "RK Gaming Keyboard", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Logitech G302", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Blue Snowball Micrphone", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Audio Interface", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Xaomi Light Bar", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Nexigo Webcam", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Audio Tecnica M40x Headphones", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Epiphone Les-Paul (Guitar)", body: "Creating technology to empower civilians to explore space on their own terms"},
  {title: "Audio Tecnica M40x Headphones", body: "Creating technology to empower civilians to explore space on their own terms"},
]