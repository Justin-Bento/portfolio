import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="min-h-dvh p-4 3xl:container lg:p-8 3xl:mx-auto">
          {children}
        </main>
      </ThemeProvider>
      <Footer />
    </>
  );
}
