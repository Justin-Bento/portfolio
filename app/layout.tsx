import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Bento - Portfolio",
  description:
    "Join me on an journey from multimedia design to web development. Explore interactive digital media with a passion for coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`bg-white antialiased dark:bg-black`}>{children}</body>
    </html>
  );
}
