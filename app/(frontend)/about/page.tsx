import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import React from "react";

export default function Page() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8">
        {/* Full-width Card */}
        <Card className="col-span-12 bg-secondary/10 border-transparent">
          <div className="min-h-[37vh] flex items-center w-11/12 mx-auto ">
            <div className="">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="font-medium text-black/50 dark:text-white">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/about" className="font-medium text-black">
                      About
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h2 className="text-lg font-semibold tracking-wide leading-normal mb-1">
                Hello, allow me to introduce myself.
              </h2>
              <p className="text-balance text-black opacity-70 line-clamp-2">
                You are inside a Bento Grid, a layout inspired by the traditional Japanese bento box, where items are
                arranged in a clean, organized, and visually pleasing way. Each section in this grid is like a carefully
                placed item within a bento box, designed to create harmony and balance.
              </p>
            </div>
          </div>
        </Card>

        {/* 7-column Card (left-aligned) */}
        <Card className="col-span-12 md:col-span-7">
          <div className="min-h-[37vh] flex items-center w-11/12 mx-auto">
            <div className="">
              <h2 className="text-lg font-semibold tracking-wide leading-normal mb-1">
                Hello, this is a summary of my development background
              </h2>
              <p className="text-balance text-black opacity-70 line-clamp-2">
                You are inside a Bento Grid, a layout inspired by the traditional Japanese bento box, where items are
                arranged in a clean, organized, and visually pleasing way. Each section in this grid is like a carefully
                placed item within a bento box, designed to create harmony and balance.
              </p>
            </div>
          </div>
        </Card>

        {/* 5-column Card (right-aligned) */}
        <Card className="col-span-12 md:col-span-5">
          <div className="min-h-[37vh] flex items-center w-11/12 mx-auto">
            <div className="">
              <h2 className="text-lg font-semibold tracking-wide leading-normal mb-1">
                Hello, this is a summary of my design background!
              </h2>
              <p className="text-balance text-black opacity-70 line-clamp-2">
                You are inside a Bento Grid, a layout inspired by the traditional Japanese bento box, where items are
                arranged in a clean, organized, and visually pleasing way. Each section in this grid is like a carefully
                placed item within a bento box, designed to create harmony and balance.
              </p>
            </div>
          </div>
        </Card>

        {/* 5-column Card (left-aligned) */}
        <Card className="col-span-12 md:col-span-5">
          <div className="min-h-[37vh] flex items-center w-11/12 mx-auto">
            <div className="">
              <h2 className="text-lg font-semibold tracking-wide leading-normal mb-1">
                Hello, this is the About page!
              </h2>
              <p className="text-balance text-black opacity-70 line-clamp-2">
                You are inside a Bento Grid, a layout inspired by the traditional Japanese bento box, where items are
                arranged in a clean, organized, and visually pleasing way. Each section in this grid is like a carefully
                placed item within a bento box, designed to create harmony and balance.
              </p>
            </div>
          </div>
        </Card>

        {/* 7-column Card (right-aligned) */}
        <Card className="col-span-12 md:col-span-7">
          <div className="min-h-[37vh] flex items-center w-11/12 mx-auto">
            <div className="">
              <h2 className="text-lg font-semibold tracking-wide leading-normal mb-1">
                Hello, this is a summary me as a person!
              </h2>
              <p className="text-balance text-black opacity-70 line-clamp-2">
                You are inside a Bento Grid, a layout inspired by the traditional Japanese bento box, where items are
                arranged in a clean, organized, and visually pleasing way. Each section in this grid is like a carefully
                placed item within a bento box, designed to create harmony and balance.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
