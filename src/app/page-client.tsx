"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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

  return (
    <div className="space-y-12">
      {/* Hero Section - Apple-inspired */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-medium">
              Complete Programming Reference
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Learn Any
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Coding Language
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive, modern cheatsheets for 100+ programming languages. Clear examples, best practices, and practical tips all in one place.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="space-y-6 max-w-6xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search languages, frameworks, concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-secondary text-white rounded-2xl border border-border focus:border-accent focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-500/20 placeholder-gray-500"
          />
          <svg className="absolute right-4 top-4 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter - Modernized */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/20"
                  : "bg-secondary text-gray-300 hover:bg-surface border border-border hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 font-medium">
          Found <span className="text-accent font-bold">{filteredCheatsheets.length}</span> cheatsheet{filteredCheatsheets.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Cheatsheets Grid - Modern Card Design */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {filteredCheatsheets.map((sheet) => (
          <Link
            key={sheet.slug}
            href={`/cheatsheet/${sheet.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-secondary border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
          >
            {/* Card background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-8 space-y-4">
              {/* Category badge */}
              <div className="inline-block">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wide">
                  {sheet.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-200">
                {sheet.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {sheet.description}
              </p>

              {/* Arrow indicator */}
              <div className="pt-4 flex items-center justify-end">
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-200 text-xl">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filteredCheatsheets.length === 0 && (
        <div className="max-w-6xl mx-auto text-center py-16">
          <div className="space-y-4">
            <svg className="mx-auto w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">No cheatsheets found</h3>
            <p className="text-gray-400">
              Try adjusting your search term or filters to find what you&apos;re looking for.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
