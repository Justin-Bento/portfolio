import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: "../../public/fonts/Switzer-Variable.ttf",
  weight: "100 900",
  display: "swap",
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Justin Bento",
    default:
      "Justin Bento - Software developer that deliveres clean, maintainable code for Business Growth",
  },
  description:
    "I’m Justin Bento, a Toronto-based software developer passionate about building scalable solutions.  specialize in delivering user-centric software that aligns with business objectives. I’m eager to contribute my skills to your company.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "../../favicons/favicon-light-mode.ico",
        href: "../../favicons/favicon-light-mode.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "../../favicons/favicon-dark-mode.ico",
        href: "../../favicons/favicon-dark-mode.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${switzer.className}  antialiased`}>{children}</body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}
