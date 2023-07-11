import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import home from "../styles/Home.module.css";

export default function index() {
  return (
    <>
      <Head>
        <title>Justin Bento — Portfolio</title>
        <meta name="title" content="Justin Bento — Portfolio" />
        <meta
          name="keywords"
          content="Full-Stack, website design website developer"
        />
        <meta
          name="description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — Portfolio" />
        <meta
          property="twitter:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta
          property="twitter:image"
          content="/public/website-screenshot.webp"
        />
      </Head>
      <Header />
      <main className="">
        <div className={`${home.isolate} fadeInAnimation order2`}>
          <div className={home.bgPattern1}>
            <svg className={home.bgPattern2} viewBox="0 0 1155 678">
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
                  <stop stopColor="#0382b5" />
                  <stop offset={1} stopColor="#0382b5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* End of Background Pattern */}
          <div className={home.hero}>
            <div className={home.mainImage}>
              <Image
                src="/media/jusitn-bento--linkin.png"
                fill
                quality={80}
                alt="Avatar"
                className={home.mainImageLin}
              />
            </div>
            <div>
              <p>Hi there! I&#39;m Justin Bento. </p>
              <h1 className={home.headline}>
                A Creative Software Engineer & Designer Based In Toronto.
              </h1>
              <p className={home.body}>
                Here, all the information about me, my work, and my accomplishments gathered in one place.
                If you&#39;re interested in collaborating with me on a project or if there&#39;s anything missing, please don&#39;t hesitate to reach out.
              </p>
              <div className={home.hero_actions}>
                <Link href="/projects" className={home.btnPrimary}>
                  View Projects
                </Link>
                <Link href="/about" className={home.btnTransparent}>
                  Get To Know Me
                </Link>
              </div>
            </div>
          </div>
          {/* End of hero section */}
        </div>
      </main>
      <Footer />
    </>
  );
}
