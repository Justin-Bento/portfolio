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
        <main className="w-screen container mx-auto min-h-dvh p-4 lg:p-6">
          {children}
        </main>
      </ThemeProvider>
      <Footer />
    </>
  );
}
