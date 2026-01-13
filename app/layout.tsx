import type { Metadata } from "next";
import "./globals.css";
import ScrollRestoration from "./scroll-restoration";

export const metadata: Metadata = {
  title: "Cheatsheets - Your Coding Companion",
  description:
    "Complete cheatsheets for all major coding languages. Search, learn, and code with confidence.",
  keywords: [
    "cheatsheet",
    "coding",
    "programming",
    "javascript",
    "python",
    "sql",
    "java",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <ScrollRestoration />
        <div className="min-h-screen flex flex-col">
          <header className="bg-secondary shadow">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <h1 className="text-4xl font-bold text-accent">Cheatsheets</h1>
              <p className="text-sm text-gray-400 mt-1">
                Your complete coding companion
              </p>
            </div>
          </header>
          <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
            {children}
          </main>
          <footer className="bg-secondary border-t border-gray-700 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">
              <p>
                Made with ❤️ by{" "}
                <a
                  href="https://github.com/workbydivyanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  workbydivyanshu
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
