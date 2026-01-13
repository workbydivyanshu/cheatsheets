"use client";

import { useState, useMemo, useCallback } from "react";
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
    <div className="space-y-16 py-8">
      {/* Premium Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient orbs */}
          <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-32 w-96 h-96 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">Learn 100+ Languages</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black leading-tight">
            Master Every
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
              Programming Language
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive, beginner-friendly cheatsheets with clear examples, common mistakes, best practices, and real-world tips.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              onClick={() => {
                const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (searchInput) searchInput.focus();
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              Start Learning
            </button>
            <a href="#search" className="px-8 py-4 bg-secondary text-white font-semibold rounded-xl border border-border hover:border-cyan-500/50 transition-all duration-200">
              Browse All
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-tertiary to-secondary p-6 rounded-xl border border-border">
          <div className="text-3xl font-bold text-cyan-400">{cheatsheets.length}+</div>
          <div className="text-gray-400 text-sm mt-2">Languages & Frameworks</div>
        </div>
        <div className="bg-gradient-to-br from-tertiary to-secondary p-6 rounded-xl border border-border">
          <div className="text-3xl font-bold text-cyan-400">10K+</div>
          <div className="text-gray-400 text-sm mt-2">Code Examples</div>
        </div>
        <div className="bg-gradient-to-br from-tertiary to-secondary p-6 rounded-xl border border-border">
          <div className="text-3xl font-bold text-cyan-400">100%</div>
          <div className="text-gray-400 text-sm mt-2">Beginner Friendly</div>
        </div>
        <div className="bg-gradient-to-br from-tertiary to-secondary p-6 rounded-xl border border-border">
          <div className="text-3xl font-bold text-cyan-400">Free</div>
          <div className="text-gray-400 text-sm mt-2">Always & Forever</div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="search" className="space-y-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Find Your Language</h2>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
          <input
            type="text"
            placeholder="Search JavaScript, Python, React, TypeScript, SQL, Ruby..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="relative w-full px-7 py-5 bg-secondary text-white rounded-2xl border-2 border-border focus:border-cyan-500 focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-cyan-500/20 placeholder-gray-500 text-lg"
          />
          <svg className="absolute right-5 top-5 w-6 h-6 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter - Premium */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm font-medium">Filter by category:</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 text-sm ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/40"
                    : "bg-secondary text-gray-300 hover:text-white border border-border hover:border-cyan-500/50 hover:bg-tertiary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-400">
              Showing <span className="text-cyan-400 font-bold text-lg">{filteredCheatsheets.length}</span> of <span className="font-bold">{cheatsheets.length}</span> cheatsheets
            </p>
          </div>
        </div>

        {filteredCheatsheets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {filteredCheatsheets.map((sheet, index) => (
              <Link
                key={sheet.slug}
                href={`/cheatsheet/${sheet.slug}`}
                className="group relative h-full"
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-tertiary border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 space-y-5 flex flex-col flex-grow">
                    {/* Category badge with icon */}
                    <div className="inline-flex items-center gap-2 w-fit">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                        {sheet.category}
                      </span>
                    </div>

                    {/* Title with premium styling */}
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors duration-200 leading-tight">
                      {sheet.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {sheet.description}
                    </p>

                    {/* Footer with interaction elements */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                      <div className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <button
                        onClick={(e) => handleCopyLink(sheet.slug, e)}
                        className="text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1"
                      >
                        {copiedSlug === sheet.slug ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Copied
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Share
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="space-y-4 bg-secondary/50 rounded-2xl p-12 border border-border">
              <svg className="mx-auto w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">No Results Found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Try searching with different keywords or adjust your filters. All our cheatsheets are free and ready to explore!
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border mt-12 pt-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 pb-12">
          <h2 className="text-3xl font-bold">
            Start Learning <span className="text-cyan-400">Today</span>
          </h2>
          <p className="text-gray-400">
            Pick any language above and start exploring. Every cheatsheet includes practical examples and best practices.
          </p>
        </div>
      </section>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
