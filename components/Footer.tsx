import React from "react";
import { footer_navigation } from "@/lib/data";
import Link from "next/link";

// Define the FooterNavProps interface correctly
export interface FooterNavProps {
  name: string;
  href: string;
  ariaLabel: string;
  icon: JSX.ElementType; // IconType here defines the icon as a component, not JSX
}

export default function Footer() {
  return (
    <footer className="dark:border-primary-100 bg-gray-200 dark:border-t dark:bg-transparent">
      <div className="px-8 py-16 md:flex md:items-center md:justify-between">
        <ul className="flex list-none justify-start space-x-6 md:order-2 lg:justify-center">
          {footer_navigation.map((item: FooterNavProps) => (
            <li className="">
              <Link
                key={item.name}
                href={item.href}
                className="transition-all hover:opacity-80"
                target="_blank"
                aria-label={item.ariaLabel}
              >
                <span className="sr-only">{item.name}</span>
                {/* Properly rendering the icon component */}
                <item.icon
                  className="h-6 w-6 fill-black dark:fill-white/80"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm leading-7 text-black dark:text-white">
            &copy; {new Date().getFullYear()} Built and designed by Justin
            Bento.
          </p>
        </div>
      </div>
    </footer>
  );
}
