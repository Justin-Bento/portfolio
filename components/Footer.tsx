import React from 'react'
import { footer_navigation } from "@/lib/data";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="px-6 py-12 lg:px-0 lg:mx-auto lg:container md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {footer_navigation.map((item: any) => (
            <Link key={item.name} href={item.href} className="transition-all hover:opacity-80" target="_blank" aria-label="external-link-to-social-media">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 dark:fill-primary-100/80" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm leading-7 tracking-wider ">
            &copy; {new Date().getFullYear()} Justin Bento, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
