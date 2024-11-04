import React from "react";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh container mx-auto p-8">
        <Card className="p-6">
          <h1>Hello, Experience page!</h1>
        </Card>
      </main>
      <Footer />
    </>
  );
}
