import { Button } from '@/components/Button'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <title>Justin Bento  - Portfolio</title>
        <meta name="title" content="Justin Bento  - Portfolio" />
        <meta name="description" content="Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding. " />
      </Head>
      <BackgroundPattern />
      <div aria-label="home-page" className="p-4 lg:p-0 lg:container h-screen grid place-content-center lg:text-center [text-wrap:balance] mx-auto">
        <div className="lg:max-w-[80ch]">
          <div className="flex justify-start lg:justify-center">
            <span className="relative w-16 h-16 mb-6 ">
              <Image
                src="/media/jusitn-bento--linkin.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
                alt="Avatar"
                className="rounded-full ring-2 ring-primary-800"
              />
            </span>
          </div>
          <p className="text-sm lg:text-base capitalize font-semibold  my-4 tracking-[0.015rem]">Hey there I&#39;m Justin!</p>
          <h1 className="font-display text-4xl font-extrabold leading-normal tracking-[0.015rem] sm:text-5xl">From Designs to Dynamic Websites: Join Me On My Multimedia Journey!</h1>
          <p className="mt-6 text-base leading-relaxed tracking-wide lg:text-lg">I&#39;m a Multimedia Designer venturing into the field of Front-End Development. My goal is to blend my knowledge in accessibility design with the power of code to craft engaging websites that everyone can enjoy. Join me on this journey of creativity and interactivity.</p>
          <span className="flex flex-col gap-4 my-8 lg:flex-row lg:justify-center">
            <Link href="/projects"><Button className="w-full lg:w-auto">Explore My Portfolio</Button></Link>
            <Link href="/contact"><Button variant="outline" className="w-full lg:w-auto">Let&#39;s Collaborate</Button></Link>
          </span>
        </div>
      </div>
    </>
  )
}
function BackgroundPattern() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="560" className="absolute inset-0 w-full h-full -z-10 opacity-30 dark:opacity-40 blur-3xl rotate-3" preserveAspectRatio="none" viewBox="0 0 1440 560">
      <g>
        <circle r="37.68" cx="27.69" cy="559.87" fill="#3997a1"></circle>
        <circle r="54.375" cx="1157.82" cy="301.1" fill="#3997a1"></circle>
        <circle r="49.095" cx="118.57" cy="478.95" fill="#3997a1"></circle>
        <circle r="47.185" cx="855.46" cy="393.61" fill="#3997a1"></circle>
        <circle r="52.19" cx="757.34" cy="80.44" fill="#3997a1"></circle>
        <circle r="19.915" cx="1339.78" cy="479.78" fill="#3997a1"></circle>
        <circle r="38.625" cx="1212.62" cy="548.11" fill="#3997a1"></circle>
        <circle r="41.635" cx="1147.41" cy="187.11" fill="#3997a1"></circle>
      </g>
      <defs>
        <clipPath id="SvgjsClipPath1083">
          <rect width="1440" height="560" x="0" y="0"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}