import { getCheatsheetBySlug, getAllCheatsheets } from "@/lib/cheatsheets";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import CopyButton from "@/components/CopyButton";

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
    title: `${cheatsheet.title} Cheatsheet`,
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
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span>/</span>
        <span className="text-accent">{cheatsheet.title}</span>
      </div>

      {/* Header */}
      <div className="space-y-4 py-6 border-b border-gray-700">
        <div>
          <span className="text-sm font-medium text-accent bg-secondary px-3 py-1 rounded">
            {cheatsheet.category}
          </span>
        </div>
        <h1 className="text-5xl font-bold">{cheatsheet.title}</h1>
        <p className="text-xl text-gray-400">{cheatsheet.description}</p>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <div
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: cheatsheet.contentHtml }}
        />
      </div>

      {/* Back Link */}
      <div className="pt-8 border-t border-gray-700">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:gap-3 transition"
        >
          ← Back to all cheatsheets
        </Link>
      </div>
    </div>
  );
}
