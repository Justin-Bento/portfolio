"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./Logo";
import { ExternalLink, Menu, X } from "lucide-react";
import Wrapper from "./Wrapper";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Set initial state to false (closed)
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navigation = ["home", "about", "projects", "contact"];

  return (
    <header className="sticky top-0 z-30">
      <Card className="rounded-none">
        <CardContent>
          <Wrapper className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
            {/* Logo and Mobile Menu Toggle */}
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Logo className="fill-foreground hover:opacity-70 hover:cursor-pointer" />
              </Link>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden dark:text-foreground"
                onClick={toggleMobileMenu}
                aria-label={
                  mobileMenuOpen ? "nav-button-close" : "nav-button-open"
                }
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } lg:block lg:flex lg:items-center lg:justify-center`}
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
                        <CardDescription className="capitalize text-foreground">
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
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } lg:block lg:flex lg:items-center lg:justify-end`}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Justin-Bento"
              >
                <Button variant="secondary">
                  <span className="inline-flex flex-row-reverse items-center gap-2">
                    <ExternalLink className="hover:underline" />
                    Github
                  </span>
                </Button>
              </Link>
            </div>
          </Wrapper>
        </CardContent>
      </Card>
    </header>
  );
}
