"use client";
import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="sticky top-0 z-10 bg-white py-5 shadow dark:bg-black dark:shadow-white/40">
      <div className="grid grid-cols-1 items-center 3xl:container lg:grid-cols-3 lg:px-8 3xl:mx-auto">
        <div className="flex items-center justify-between gap-1">
          <Link href="/" aria-label="link-to-home">
            <Logo className="fill-black hover:opacity-80 dark:fill-white" />
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
          className={`${mobileMenuOpen ? "hidden lg:flex lg:items-center" : ""}`}
        >
          <nav className="flex w-full flex-col justify-start gap-6 lg:flex-row lg:justify-center">
            <Link href="/">
              <Button
                variant="link"
                aria-label="navigation-link-home"
                className="w-full text-black hover:opacity-70"
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="link"
                aria-label="navigation-link-about"
                className="w-full text-black hover:opacity-70"
              >
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="link"
                aria-label="navigation-link-projects"
                className="w-full text-black hover:opacity-70"
              >
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="link"
                aria-label="navigation-link-contact"
                className="w-full text-black hover:opacity-70"
              >
                Contact
              </Button>
            </Link>
          </nav>
        </div>
        <div
          className={`${mobileMenuOpen ? "hidden" : ""} md:justify-end lg:flex lg:items-center`}
        >
          <Link target="_blank" href="https://github.com/Justin-Bento">
            <Button
              className="w-full gap-1.5 bg-gray-300 text-black hover:bg-gray-400/50 lg:w-auto"
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
