import React from 'react'
import { footer_navigation } from "@/lib/data";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-800 dark:bg-transparent dark:border-t dark:border-primary-100">
      <div className="px-4 py-10 lg:py-12 md:px-4 lg:mx-auto lg:container md:flex md:items-center md:justify-between">
        <div className="flex justify-start space-x-6 lg:justify-center md:order-2">
          {footer_navigation.map((item: any) => (
            <Link key={item.name} href={item.href} className="transition-all hover:opacity-80" target="_blank" aria-label="external-link-to-social-media">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 fill-primary-40 dark:fill-primary-100/80" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm text-primary-40 leading-7 dark:text-primary-100">
            &copy; {new Date().getFullYear()} Built and designed by Justin Bento.
          </p>
        </div>
      </div>
    </footer>
  )
}
