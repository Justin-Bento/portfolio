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
  title: "Justin Bento - Portfolio",
  description:
    "Welcome to my portfolio, heres I bring ideas to life one pixel at a time.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "../../favicons/favicon-dark-mode.ico",
        href: "../../favicons/favicon-dark-mode.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "../../favicons/favicon-light-mode.ico",
        href: "../../favicons/favicon-light-mode.ico",
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
    <html lang="en">
      <body className={`${switzer.className}  antialiased`}>{children}</body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}
