import { Button } from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { RiMailLine } from 'react-icons/ri'

export default function Error404() {
  const router = useRouter()
  return (
    <div className="grid min-h-full place-items-center h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div className="">
        <p className="text-base font-semibold text-slate-600">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl capitalize">Oops! we couldn&#39;t find you&#39;re page.</h1>
        <p className="mt-6 text-base lg:text-xl lg:max-w-[64ch] lg:mx-auto tracking-wide leading-7 text-gray-600">It seems like the page you&#39;re searching for is on its own creative journey right now. While we get everything back in order, why not explore some of my other imaginative projects? Click below to embark on a new adventure within my portfolio.</p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <Button variant="secondary">
            <Link href="/">Go To Home Page</Link>
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => router.push('mailto:bento.a.justin@gmail.com')}>
            <RiMailLine />
            Send A Message
          </Button>
        </div>
      </div>
    </div>
  )
}
