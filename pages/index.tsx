import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from 'react-icons/hi'


export default function index() {
  return (
    <>
      <Head>
        <title>Justin Bento — Portfolio</title>
        <meta name="title" content="Justin Bento — Portfolio" />
        <meta name="keywords" content="Full-Stack, website design website developer" />
        <meta name="description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — Portfolio" />
        <meta property="og:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — Portfolio" />
        <meta property="twitter:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <div className="isolate">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] order-3 animate-fade-in">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7293be" />
                <stop offset={1} stopColor="#7293be" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main className="mb-32 space-y-32">
          <section className="relative order-1 animate-fade-in">
            <Hero_Section />
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]  order-4 animate-fade-in">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7293be  " />
                    <stop offset={1} stopColor="#7293be   " />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
function Hero_Section() {
  return (
    <>
      <div className="max-w-2xl py-40 mx-auto">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Image src="/projects/avatar.jpg" width={72} height={72} alt="Avatar" className="bg-gray-500 rounded-full" />
        </div>
        <div className="text-center">
          <p className="text-base leading-8 text-gray-600">Hey i&#39;m Justin Bento.</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-50">
            A Creative Developer Based In Toronto.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-600 dark:text-slate-100">
            Here, all the information about me, my work, and my accomplishments gathered in one place. 
            If you&#39;re interested in collaborating with me on a project or if there&#39;s anything missing, please don&#39;t hesitate to reach out. 
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get In Touch!
            </a>
            <Link href="https://docs.google.com/document/d/13TFxDfDENVr2-qXO2_zdYv6jHs-m582U/edit?usp=sharing&ouid=114993777085049054802&rtpof=true&sd=true" className="inline-flex items-center gap-2 text-base font-semibold leading-6 text-gray-900 dark:text-primary-100">
              <HiExternalLink className="mb-0.5 w-5 h-5" />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


