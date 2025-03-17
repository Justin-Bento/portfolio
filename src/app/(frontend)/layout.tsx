import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
