import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Project_Card from "@/components/Project_Card";

export default function projects() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Header />
      <main className="">
        <section className="p-4 my-12 md:my-24">
          <h1 className="text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">Things I’ve made trying to put my dent in the space.</h1>
        </section>
        <section className="space-y-24">
          {project_history.map((data: any) => {
            return <Project_Card key={data.title.toString()} Link={`projects/${data.title.toLowerCase().replace(/ /g, '-')}`} Headline={data.title} />
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}

const project_history = [
  {title: "Paramount Properties LTDs"},
  {title: "Belive Support Services"},
  {title: "Option One Staffing Agency"},
  {title: "Portfolio Website"},
  {title: "Marker"},
  {title: "Redesign: Antigua News Room"},
  {title: "ParkSmart"},
]