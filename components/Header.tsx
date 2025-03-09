"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./Logo";
import { RiCloseLine, RiExternalLinkLine, RiMenuLine } from "react-icons/ri";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Set initial state to false (closed)
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navigation = ["home", "about", "projects", "contact"];

  return (
    <header className="sticky top-0 z-30">
      <Card className="rounded-none">
        <CardContent className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex w-full items-center justify-between">
            <Logo className="dark:fill-white" />
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={toggleMobileMenu}
              aria-label={
                mobileMenuOpen ? "nav-button-close" : "nav-button-open"
              }
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </Button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"} lg:block lg:flex lg:items-center lg:justify-center`}
          >
            <ul
              role="list"
              className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center"
            >
              {navigation.map((navigator, index) => (
                <li key={index}>
                  <Link href={navigator === "home" ? "/" : `/${navigator}`}>
                    <Button
                      variant="link"
                      className="w-full justify-start lg:justify-center"
                    >
                      <CardDescription className="capitalize text-black dark:text-white">
                        {navigator}
                      </CardDescription>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Link (Github) */}
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"} lg:block lg:flex lg:items-center lg:justify-end`}
          >
            <Button variant="secondary">
              <CardDescription className="inline-flex flex-row-reverse items-center gap-2">
                <RiExternalLinkLine />
                Github
              </CardDescription>
            </Button>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
