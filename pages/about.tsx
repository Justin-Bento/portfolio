import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>About - Justin Bento Portfolio</title>
        <meta name="title" content="Justin Bento Portfolio" />
        <meta name="description" content="Join me, on this adventure through my portfolio. Experience my passion for design, dev, and music all located  in one convenient place." />
      </Head>
      <Header />
      <main className="p-4 my-12 md:my-24">
        <section className="">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-10">
              <h1 className="max-w-2xl text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">I&#39;m Justin Bento. I live in Toronto, where I create internet stuff.</h1>
              <div className="max-w-xl lg:rotate-[4deg] bg-amber-700 h-80">1</div>
              <div className="space-y-4">
                {/* Be sure to use this with a layout container that is full-width on mobile */}
                <Link href="#" className="transition-all shadow hover:border hover:border-gray-200 hover:shadow-transparent sm:rounded-lg">
                  <div className="w-full lg:max-w-lg overflow-hidden bg-[#739884]">
                    <div className="px-4 py-5 sm:p-6">
                      <p className="text-base font-medium leading-tight">Follow on Github</p>
                    </div>
                  </div>
                </Link>
                {/* Be sure to use this with a layout container that is full-width on mobile */}
                <Link href="#" className="transition-all shadow hover:border hover:border-gray-200 hover:shadow-transparent sm:rounded-lg">
                  <div className="w-full lg:max-w-lg overflow-hidden bg-[#739884]">
                    <div className="px-4 py-5 sm:p-6">
                      <p className="text-base font-medium leading-tight">Follow on Linkedin</p>
                    </div>
                  </div>
                </Link>
                {/* Be sure to use this with a layout container that is full-width on mobile */}
                <Link href="#" className="transition-all shadow hover:border hover:border-gray-200 hover:shadow-transparent sm:rounded-lg">
                  <div className="w-full lg:max-w-lg overflow-hidden bg-[#739884]">
                    <div className="px-4 py-5 sm:p-6">
                      <p className="text-base font-medium leading-tight">Follow on Soundcloud</p>
                    </div>
                  </div>
                </Link>
                {/* Be sure to use this with a layout container that is full-width on mobile */}
                <Link href="#" className="transition-all shadow hover:border hover:border-gray-200 hover:shadow-transparent sm:rounded-lg">
                  <div className="w-full lg:max-w-lg overflow-hidden bg-[#739884]">
                    <div className="px-4 py-5 sm:p-6">
                      <p className="text-base font-medium leading-tight">Follow on Twitter</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="max-w-xl space-y-10 text-lg lg:text-xl leading-10 lg:leading-loose tracking-wide text-[#443733]">
              <p className="">I&#39;ve loved creating things for as long as I can remember, and wrote my first program when I was in highschool learning pascal code and basic web development. Before highschool started my parents would keep old devices and allow me to tinker with them to see whats inside and reassemble the electronics.</p>
              <p className="">The only thing I loved more than computers as a kid was music. When I was young, I remember my parents playing music at family functions and would instinctively start tapping my feet to the beat of a song. — my parents noticed this taught me basic dance moves but that didn&#39;t last long as I was a very shy kid growing up.</p>
              <p className="">I spent the next few years getting creative through music and computers, I loved doing both and one day I stumbled accros blogs talking about building interactive parts for a webpage. It took a while, but when I was 15 I settled with software developmemt as I was alway crafty but never artsy.</p>
              <p className="">Today, I&#39;m a Full Stack Developer, builds, streamlines, and be the bridge bettwen between art and the web. When I&#39;m not my free time I play chess, guitar and journal to help me .</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
