import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Justin Bento - Contact",
  description:
    "Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding.",
};

export default function page() {
  return (
    <>
      <Header />
      <main className="min-h-dvh container px-6 mx-auto my-24">
        <h1 className="">Contact, Page.</h1>
      </main>
      <Footer />
    </>
  );
}
