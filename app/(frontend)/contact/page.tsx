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
      <main className="p-4 3xl:container lg:p-8 3xl:mx-auto">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Card className="col-span-12 border-transparent bg-[#c6afb1]/30">
            <div className="mx-auto flex min-h-[65svh] w-11/12 items-center xl:min-h-[36rem]">
              <div className="space-y-3">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="font-medium text-black dark:text-white"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/Projects"
                        className="font-medium text-black underline dark:text-white"
                      >
                        Contact
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-3xl font-extrabold capitalize tracking-tight lg:text-5xl dark:text-white">
                  Let&#39;s work together!
                </h1>
                <p className="w-8/12 text-sm/5 md:text-base/7">
                  I&#39;d love to hear from you! Whether you have a project in
                  mind, a collaboration opportunity, or just want to say hello,
                  feel free to reach out. Fill in the form below, and I&#39;ll
                  get back to you as soon as possible.
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 min-h-[20dvh] lg:col-span-6">
            <div className="my-16 grid gap-16 px-4 py-5 sm:p-6 lg:grid-cols-1">
              <div id="contact-information" className="overflow-hidden">
                <h2 className="font-display dark:text-primary-40 text-base font-semibold capitalize">
                  My Office
                </h2>
                <p className="dark:text-primary-40 mt-2 text-base">
                  I have to list my location for legal reasons.
                </p>
                <Button
                  variant="ghost"
                  className="mt-2 inline-flex items-center gap-2"
                >
                  <RiMapPin2Line />
                  Toronto Ontario
                </Button>
                <hr className="border-1 my-6 border-black/20 dark:border-gray-50" />
                <h2 className="font-display text-base font-semibold capitalize">
                  Email Me
                </h2>
                <Button
                  variant="ghost"
                  className="mt-2 inline-flex items-center gap-2 normal-case"
                >
                  <RiMailLine />
                  contact@justinbento.com
                </Button>
                <hr className="border-1 my-6 border-black/20 dark:border-gray-50" />
                <h2 className="font-display text-base font-semibold capitalize">
                  Social&#39;s
                </h2>
                <div className="mt-4 flex items-center gap-2">
                  {footer_navigation.map((item: IconProps) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition-all hover:opacity-80"
                      target="_blank"
                      aria-label="external-link-to-social-media"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary-50"
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 min-h-[20dvh] lg:col-span-6">
            <div className="px-4 py-5 sm:p-6">
              <ContactForm />
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
