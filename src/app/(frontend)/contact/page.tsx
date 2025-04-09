import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { footer_navigation } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import { MailOpen, Map } from "lucide-react";
import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";

export const metadata: Metadata = {
  title: "Cotnact",
  description:
    "I’m Justin Bento. I live in Toronto, where I build projects to last.",
};

export default function page() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FullWidthCard>
          <FullWidthCard.Breadcrumbs>
            <FullWidthCard.BreadcrumbItem href="/">
              Home
            </FullWidthCard.BreadcrumbItem>
            <FullWidthCard.BreadcrumbItem href="/about" isActive>
              About
            </FullWidthCard.BreadcrumbItem>
          </FullWidthCard.Breadcrumbs>
          <FullWidthCard.Heading>
            Let&#39;s work together!
          </FullWidthCard.Heading>
          <FullWidthCard.Overview>
            I&#39;d love to hear from you! Whether you have a project in mind, a
            collaboration opportunity, or just want to say hello, feel free to
            reach out. Fill in the form below, and I&#39;ll get back to you as
            soon as possible.
          </FullWidthCard.Overview>
        </FullWidthCard>
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
                <Map />
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
                <MailOpen />
                contact@justinbento.com
              </Button>
              <hr className="border-1 my-6 border-black/20 dark:border-gray-50" />
              <h2 className="font-display text-base font-semibold capitalize">
                Social&#39;s
              </h2>
              <div className="mt-4 flex items-center gap-2">
                {footer_navigation.map((item) => (
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
    </>
  );
}
