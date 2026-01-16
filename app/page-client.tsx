"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Copy, Check, Filter, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Cheatsheet {
  slug: string;
  title: string;
  description: string;
  category: string;
}

interface HomeProps {
  cheatsheets: Cheatsheet[];
}

export default function PageClient({ cheatsheets }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(cheatsheets.map((c) => c.category));
    return ["All", ...Array.from(cats).sort()];
  }, [cheatsheets]);

  const filteredCheatsheets = useMemo(() => {
    return cheatsheets.filter((sheet) => {
      const matchesSearch =
        sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || sheet.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [cheatsheets, searchTerm, selectedCategory]);

  const handleCopyLink = useCallback((slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}/cheatsheet/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-24 py-20">
      {/* Hero Section */}
      <section className="relative text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Coding Documentation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tight"
        >
          Master any language<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-accent-secondary to-indigo-400">
            One cheatsheet at a time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl text-gray-400"
        >
          Interactive, high-fidelity documentation designed for 2026&apos;s elite developers.
          Search, copy, and implement in seconds.
        </motion.p>
      </section>

      {/* Interface Section */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Search Box */}
          <div className="flex-1 max-w-2xl space-y-4">
            <label className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Search className="w-4 h-4" />
              Quick Search
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="e.g. React, Python, SQL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-16 px-6 bg-secondary/40 border border-border/40 rounded-2xl text-lg focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4 max-w-full overflow-hidden">
            <label id="category-filter-label" className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Filter className="w-4 h-4" aria-hidden="true" />
              Categories
            </label>
            <nav aria-labelledby="category-filter-label" className="flex gap-2 p-1 bg-secondary/40 border border-border/40 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={cn(
                    "px-5 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap",
                    selectedCategory === cat
                      ? "bg-accent text-primary shadow-lg shadow-accent/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {filteredCheatsheets.map((sheet, idx) => (
              <motion.div
                layout
                key={sheet.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link href={`/cheatsheet/${sheet.slug}`} className="group block h-full">
                  <div className="h-full p-8 bg-secondary/20 border border-border/40 rounded-3xl hover:border-accent/40 hover:bg-secondary/40 transition-all duration-300 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-6 h-6 text-accent" />
                    </div>

                    <div className="space-y-6 flex-1">
                      <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold text-accent uppercase tracking-tighter">
                        {sheet.category}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                          {sheet.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {sheet.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-400 transition-colors">
                        View full guide &rarr;
                      </span>
                      <button
                        onClick={(e) => handleCopyLink(sheet.slug, e)}
                        className="p-2 text-gray-500 hover:text-accent transition-colors"
                      >
                        {copiedSlug === sheet.slug ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCheatsheets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center space-y-4"
          >
            <div className="w-20 h-20 bg-secondary/40 border border-border/40 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold">No guides found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
