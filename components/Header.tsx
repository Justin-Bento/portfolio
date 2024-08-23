import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="bg-white dark:bg-black sticky top-0 z-10  py-5 shadow dark:shadow-white/40">
      <div className="container mx-auto px-6 grid grid-cols-1 gap-6 justify-evenly lg:container lg:mx-auto lg:items-center lg:grid-cols-3">
        <div className="flex items-center justify-between gap-1">
          <Link href="/" aria-label="link-to-home">
            <Logo className="fill-black dark:fill-white hover:opacity-80" />
          </Link>
          {mobileMenuOpen ? (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={onClick}
              aria-label="nav-button-open"
            >
              <RiMenuLine />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={onClick}
              aria-label="nav-button-close"
            >
              <RiCloseLine />
            </Button>
          )}
        </div>
        <div
          className={`${
            mobileMenuOpen ? "hidden lg:flex lg:items-center" : ""
          }`}
        >
          <nav className="flex flex-col justify-start w-full gap-6 lg:justify-center lg:flex-row">
            <Link href="/">
              <Button
                variant="link"
                aria-label="navigation-link-home"
                className="w-full"
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="link"
                aria-label="navigation-link-about"
                className="w-full"
              >
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="link"
                aria-label="navigation-link-projects"
                className="w-full"
              >
                Projects
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button
                variant="link"
                aria-label="navigation-link-projects"
                className="w-full"
              >
                Testimonials
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="link"
                aria-label="navigation-link-contact"
                className="w-full"
              >
                Contact
              </Button>
            </Link>
          </nav>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "hidden" : ""
          } lg:flex lg:items-center md:justify-end`}
        >
          <Link target="_blank" href="https://github.com/Justin-Bento">
            <Button
              variant="secondary"
              className="gap-1.5 w-full lg:w-auto"
              aria-label="external-link-to-linkedin"
            >
              <RiExternalLinkLine />
              Github
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
