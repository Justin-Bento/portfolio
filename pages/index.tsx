import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Project_Card from "@/components/Project_Card";
import Head from "next/head";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>Justin Bento</title>
      </Head>
      <Header />
      <div className="isolate">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
          <section className="relative">
            <Hero_Section />
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
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
          <section className="wrapper">
            <Project_Sample />
          </section>
          <section className="wrapper">
            <Contact_Form />
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
      <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Image src="" width={64} height={64} alt="Avatar" className="bg-gray-500 rounded-full" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Creative Developer Based In Toronto.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
function Project_Sample() {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 capitalize">Signature Prjects I’ve made, over my carrer.</h2>
      <p className="max-w-6xl mt-2">I’ve worked on tons of projects over the years but these are the ones that have stood out and I’m most proud of. Some are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
      <div className="grid grid-cols-1 my-8 lg:grid-cols-2">
        <Project_Card Headline="Paramount Properties LTD" Media="" Link="" />
        <Project_Card Headline="Option One Staffing Agency" Media="" Link="" />
        <Project_Card Headline="Believe Support Services" Media="" Link="" />
        <Project_Card Headline="Marker App" Media="" Link="" />
        <Project_Card Headline="Urban Greens Antigua" Media="" Link="" />
        <Project_Card Headline="ParkSmart" Media="" Link="" />
      </div>
    </>
  )
}
function Contact_Form() {
  return (
    <>
      <h3 className="text-4xl font-bold tracking-tight text-gray-900 capitalize">Get In Touch</h3>
      <p className="mt-1 mb-8 leading-7 text-gray-600">
        Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
      </p>
      <form action="#" method="POST" className="">
        <div className="">
          <div className="flex flex-col gap-4 my-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </>
  )
}