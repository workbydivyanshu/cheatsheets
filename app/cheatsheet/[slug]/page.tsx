import { getCheatsheetBySlug, getAllCheatsheets } from "@/lib/cheatsheets";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, Share2, BookOpen, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const cheatsheets = await getAllCheatsheets();
  return cheatsheets.map((sheet) => ({
    slug: sheet.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cheatsheet = await getCheatsheetBySlug(slug);

  if (!cheatsheet) {
    return {};
  }

  return {
    title: `${cheatsheet.title} | 2026 Modern Cheatsheet`,
    description: cheatsheet.description,
  };
}

export default async function CheatsheetPage({ params }: PageProps) {
  const { slug } = await params;
  const cheatsheet = await getCheatsheetBySlug(slug);

  if (!cheatsheet) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Navigation & Actions */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-lg bg-secondary/50 border border-border/40 group-hover:border-accent/40 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
          Back to Index
        </Link>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-secondary/50 border border-border/40 hover:border-accent/40 text-gray-400 hover:text-accent transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero / Header */}
      <header className="space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-tighter">
          <BookOpen className="w-3 h-3" />
          {cheatsheet.category}
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight [background:linear-gradient(135deg,#fff_0%,#a0d8ff_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
            {cheatsheet.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            {cheatsheet.description}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold text-gray-500 uppercase tracking-widest border-y border-border/40 py-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Last Updated Jan 2026
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div>Premium Documentation</div>
        </div>
      </header>

      {/* Content */}
      <article className="animate-fade-in [animation-delay:200ms] [animation-fill-mode:both]">
        <div
          className="modern-prose"
          dangerouslySetInnerHTML={{ __html: cheatsheet.contentHtml }}
        />
      </article>

      {/* Footer Nav */}
      <footer className="pt-20 border-t border-border/40">
        <Link
          href="/"
          className="block p-12 bg-secondary/20 border border-border/40 rounded-3xl text-center group hover:border-accent/40 hover:bg-secondary/40 transition-all"
        >
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-2">Continue Exploring</span>
          <span className="text-2xl font-bold group-hover:text-accent transition-colors">Return to full index &rarr;</span>
        </Link>
      </footer>
    </div>
  );
}
