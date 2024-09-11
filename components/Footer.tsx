import React from "react";
import { footer_navigation } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-transparent dark:border-t dark:border-primary-100">
      <div className="container mx-auto lg:px-8 py-16 md:flex md:items-center md:justify-between">
        <div className="flex justify-start space-x-6 lg:justify-center md:order-2">
          {footer_navigation.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-all hover:opacity-80"
              target="_blank"
              aria-label={item.ariaLabel}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 fill-white dark:fill-white/80" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm text-white leading-7 dark:text-white">
            &copy; {new Date().getFullYear()} Built and designed by Justin Bento.
          </p>
        </div>
      </div>
    </footer>
  );
}
