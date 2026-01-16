import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ScrollRestoration from "./scroll-restoration";
import Navbar from "@/components/navbar";
import { CheatsheetProvider } from "@/lib/cheatsheet-context";
import { getAllCheatsheets } from "@/lib/cheatsheets";

export const metadata: Metadata = {
  title: "Cheatsheets - Modern Coding Companion 2026",
  description:
    "Premium, high-performance cheatsheets for modern developers. Search, learn, and master any language.",
  keywords: [
    "cheatsheet",
    "coding",
    "programming",
    "javascript",
    "python",
    "2026",
    "modern dev",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cheatsheets = await getAllCheatsheets();
  const simplifiedCheatsheets = cheatsheets.map(({ slug, title, description, category }) => ({
    slug, title, description, category
  }));

  return (
    <html lang="en" className="dark">
      <body className="bg-primary text-white selection:bg-accent selection:text-primary">
        <CheatsheetProvider cheatsheets={simplifiedCheatsheets}>
          <ScrollRestoration />
          <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[120px] rounded-full -z-10" />

            <Navbar />

            <main className="flex-1 relative z-10">
              {children}
            </main>

            <footer className="border-t border-border/40 bg-secondary/30 backdrop-blur-md mt-24">
              <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <div className="text-xl font-bold tracking-tight">
                    Cheatsheets<span className="text-accent">.</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Built for the next generation of developers.
                  </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-gray-400">
                  <a href="https://github.com/workbydivyanshu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                  <Link href="/" className="hover:text-white transition-colors">All Guides</Link>
                </div>

                <div className="text-gray-500 text-xs">
                  &copy; 2026 Cheatsheets. Crafted by{" "}
                  <a
                    href="https://github.com/workbydivyanshu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold"
                  >
                    divyanshu
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </CheatsheetProvider>
      </body>
    </html>
  );
}
