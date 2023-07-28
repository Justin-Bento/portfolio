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
      <div aria-label="home-page" className="p-4 lg:p-0 lg:container h-screen grid place-content-center lg:text-center [text-wrap:balance] mx-auto">
        <div className="lg:max-w-[80ch]">
          <div className="flex justify-start lg:justify-center">
            <span className="relative w-16 h-16 mb-6 ">
              <Image
                src="/media/jusitn-bento--linkin.png"
                fill
                quality={80}
                alt="Avatar"
                className="rounded-full ring-2 ring-slate-800"
              />
            </span>
          </div>
          <p className="text-sm lg:text-base capitalize font-semibold text-slate-800 my-4 tracking-[0.015rem]">Hey there I&#39;m Justin!</p>
          <h1 className="font-display text-4xl font-extrabold leading-normal tracking-[0.015rem] text-neutral-950 sm:text-5xl">From Designs to Dynamic Websites: Join Me On My Multimedia Journey!</h1>
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed tracking-wide">I&#39;m a Multimedia Designer venturing into the field of Front-End Development. My goal is to blend my knowledge in accessibility design with the power of code to craft engaging websites that everyone can enjoy. Join me on this journey of creativity and interactivity.</p>
          <span className="flex flex-col lg:flex-row gap-4 my-8 lg:justify-center">
            <Link href="/projects"><Button className="w-full lg:w-auto">Explore My Portfolio</Button></Link>
            <Link href="/contact"><Button variant="outline" className="w-full lg:w-auto">Let&#39;s Collaborate</Button></Link>
          </span>
        </div>
      </div>
    </>
  )
}
