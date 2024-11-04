import React from "react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { footer_navigation, IconProps } from "@/lib/data";
import { RiMailLine, RiMapPin2Line } from "react-icons/ri";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4  p-4 lg:p-8">
        <Card className="min-h-[50dvh] flex items-center justify-center col-span-12 bg-[#c6afb1]/50 border-transparent">
          <div className="px-4 py-5 sm:p-6 space-y-2">
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
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight capitalize dark:text-white">
              Let&#39;s work together!
            </h1>
            <p className="text-sm/5 md:text-base/7 w-8/12 text-balance">
              I&#39;d love to hear from you! Whether you have a project in mind, a collaboration opportunity, or just
              want to say hello, feel free to reach out. Fill in the form below, and I&#39;ll get back to you as soon as
              possible. Looking forward to starting a creative conversation!
            </p>
          </div>
        </Card>
        <Card className="min-h-[20dvh] col-span-12 md:col-span-6">
          <div className="px-4 py-5 sm:p-6 grid lg:grid-cols-1 gap-16 my-16">
            <div id="contact-information" className="overflow-hidden">
              <h2 className="text-base font-semibold capitalize font-display dark:text-primary-40">My Office</h2>
              <p className="mt-2 text-base dark:text-primary-40">I have to list my location for legal reasons.</p>
              <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 ">
                <RiMapPin2Line />
                Toronto Ontario
              </Button>
              <hr className="my-6 border-1 border-black dark:border-gray-50" />
              <h2 className="text-base font-semibold capitalize font-display ">Email Me</h2>
              <Button variant="ghost" className="inline-flex items-center gap-2 mt-2 normal-case ">
                <RiMailLine />
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
        </Card>
        <Card className="min-h-[20dvh] col-span-12 md:col-span-6">
          <div className="px-4 py-5 sm:p-6">
            <ContactForm />
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
