import React from "react";
import { footer_navigation } from "@/lib/data";
import Link from "next/link";
import { Card, CardContent, CardDescription } from "./ui/card";

// Define the FooterNavProps interface correctly
export interface FooterNavProps {
  index: number; // This is not needed in the interface since `index` is provided by `map`
  name: string;
  href: string;
  ariaLabel: string;
  icon: Element; // IconType here defines the icon as a component, not JSX
}

export default function Footer() {
  return (
    <footer className="">
      <Card className="shadow-none rounded-none">
        <CardContent className="container mx-auto p-6 md:flex md:items-center md:justify-between">
          <ul className="flex list-none justify-start space-x-6 md:order-2 lg:justify-center">
            {footer_navigation.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="transition-all hover:opacity-80"
                  target="_blank"
                  aria-label={item.ariaLabel}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="size-6 hover:border-primary/80"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 md:order-1 md:mt-0">
            <CardDescription className="text-foreground">
              &copy; {new Date().getFullYear()} Built and designed by Justin
              Bento.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
