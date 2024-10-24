import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { RiMailFill, RiMapPin2Fill } from "react-icons/ri";
import { footer_navigation } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Justin Bento - Contact",
  description:
    "Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding.",
};

export interface IconProps {
  name: string;
  href: string;
  ariaLabel: string;
  icon: JSX.ElementType; // IconType here defines the icon as a component, not JSX
}

export default function Contact() {
  return (
    <>
      <Header />
      <main className=" my-16 flex items-center [min-height:100dvh;]">
        <section className="container mx-auto">
          <div id="heading" className="space-y-4 col-span-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-medium text-black dark:text-white">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Projects" className="font-medium text-primary dark:text-accent">
                    Contact
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-5xl font-extrabold tracking-tight capitalize dark:text-white">
              Let&#39;s work together!
            </h1>
            <p className="text-base leading-7 max-w-5xl">
              I&#39;d love to hear from you! Whether you have a project in mind, a collaboration opportunity, or just
              want to say hello, feel free to reach out. Fill in the form below, and I&#39;ll get back to you as soon as
              possible. Looking forward to starting a creative conversation together!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 my-16">
            <div id="contact-information" className="overflow-hidden ring-1 ring-black dark:ring-gray-50 rounded-lg">
              <div className="px-4 py-5 sm:p-6 ">
                <h2 className="text-base font-semibold capitalize font-display dark:text-primary-40">My Office</h2>
                <p className="mt-2 text-base dark:text-primary-40">I have to list my location for legal reasons.</p>
                <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 ">
                  <RiMapPin2Fill />
                  Toronto Ontario
                </Button>
                <hr className="my-6 border-1 border-black dark:border-gray-50" />
                <h2 className="text-base font-semibold capitalize font-display ">Email Me</h2>
                <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 normal-case ">
                  <RiMailFill />
                  contact@justinbento.com
                </Button>
                <hr className="my-6 border-1 border-black dark:border-gray-50" />
                <h2 className="text-base font-semibold capitalize font-display ">Social&#39;s</h2>
                <div className="flex items-center gap-2 mt-4">
                  {footer_navigation.map((item: IconProps) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition-all hover:opacity-80"
                      target="_blank"
                      aria-label="external-link-to-social-media"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Button variant="outline" size="icon" className="border-primary-50">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div id="contact-form" className="">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
