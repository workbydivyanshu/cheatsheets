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
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h2 className="text-5xl font-bold mb-4">
          Your Coding <span className="text-accent">Companion</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Complete cheatsheets for all major programming languages. Search, learn, and code with confidence.
        </p>
      </section>

      {/* Search and Filter Section */}
      <section className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Search cheatsheets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-white rounded-lg border border-gray-700 focus:border-accent focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === cat
                  ? "bg-accent text-primary"
                  : "bg-secondary text-white hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <p className="text-gray-400">
        Found {filteredCheatsheets.length} cheatsheet
        {filteredCheatsheets.length !== 1 ? "s" : ""}
      </p>

      {/* Cheatsheets Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCheatsheets.map((sheet) => (
          <Link
            key={sheet.slug}
            href={`/cheatsheet/${sheet.slug}`}
            className="group bg-secondary rounded-lg p-6 border border-gray-700 hover:border-accent hover:shadow-lg transition"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold group-hover:text-accent transition">
                  {sheet.title}
                </h3>
              </div>
              <p className="text-gray-400">{sheet.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-sm text-accent font-medium">
                  {sheet.category}
                </span>
                <span className="text-accent group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filteredCheatsheets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">
            No cheatsheets found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
