import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Project_Card from "@/components/Project_Card";

export default function projects() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Projects - Justin Bento Portfolio</title>
        <meta name="title" content="Justin Bento Portfolio" />
        <meta name="description" content="Join me, on this adventure through my portfolio. Experience my passion for design, dev, and music all located  in one convenient place." />
      </Head>
      <Header />
      <main className="">
        <section className="p-4 my-12 md:my-24">
          <h1 className="text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">Things I’ve made trying to put my dent in the space.</h1>
        </section>
        <section className="flex flex-col gap-24">
          {project_history.map((data: any) => {
            return <Project_Card key={data.title.toString()} Link={`projects/${data.title.toLowerCase().replace(/ /g, '-')}`} Headline={data.title} Media={data.Image} />
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}

const project_history = [
  { title: "Paramount Properties LTD", Image: "/media/websites/paramount-properties-ltd.png" },
  { title: "Belive Support Services", Image: "/media/websites/belive-support-services.png" },
  { title: "Option One Staffing Agency", Image: "/media/websites/option-one-staffing-agency.png" },
  { title: "Portfolio Website", Image: "/media/websites/justin-bento.png" },
  { title: "Urban Greens Antigua", Image: "/media/websites/urban-greens-antigua.png"  },
  { title: "Redesign: Antigua News Room", Image: "/media/websites/antigua-newsroom-redesign.png" },
]