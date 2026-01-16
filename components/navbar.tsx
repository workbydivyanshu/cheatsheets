"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Github, Search, ChevronDown } from "lucide-react";
import { useCheatsheets } from "@/lib/cheatsheet-context";

export default function Navbar() {
    const router = useRouter();
    const { cheatsheets } = useCheatsheets();
    const [inputValue, setInputValue] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const [filteredResults, setFilteredResults] = useState<typeof cheatsheets>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchDropdownRef = useRef<HTMLDivElement>(null);
    const guidesDropdownRef = useRef<HTMLDivElement>(null);
    const guidesButtonRef = useRef<HTMLButtonElement>(null);

    // Filter results when input changes
    useEffect(() => {
        if (inputValue.trim()) {
            const filtered = cheatsheets.filter(sheet =>
                sheet.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                sheet.description.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredResults(filtered);
            setIsSearchOpen(true);
        } else {
            setFilteredResults([]);
            setIsSearchOpen(false);
        }
    }, [inputValue, cheatsheets]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchDropdownRef.current && !searchDropdownRef.current.contains(e.target as Node) &&
                inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setIsSearchOpen(false);
            }
            if (guidesDropdownRef.current && !guidesDropdownRef.current.contains(e.target as Node) &&
                guidesButtonRef.current && !guidesButtonRef.current.contains(e.target as Node)) {
                setIsGuidesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (slug: string) => {
        setInputValue('');
        setIsSearchOpen(false);
        setIsGuidesOpen(false);
        router.push(`/cheatsheet/${slug}`);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary/80 backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group" aria-label="Cheatsheets Home">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">
                        <Terminal className="text-primary w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white">
                            Cheatsheets<span className="text-accent">.</span>
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                            Advanced Index 2026
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <div className="relative">
                        <button 
                            ref={guidesButtonRef}
                            onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                            className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            All Guides
                            <ChevronDown className={`w-4 h-4 transition-transform ${isGuidesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                            {isGuidesOpen && (
                                <motion.div
                                    ref={guidesDropdownRef}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 top-full mt-2 w-72 bg-secondary border border-border/60 rounded-xl shadow-2xl overflow-hidden z-50"
                                >
                                    <div className="max-h-80 overflow-y-auto">
                                        {cheatsheets.map((sheet) => (
                                            <button
                                                key={sheet.slug}
                                                onClick={() => handleSelect(sheet.slug)}
                                                className="w-full px-4 py-3 text-left hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-white">{sheet.title}</span>
                                                    <span className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                                                        {sheet.category}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="h-4 w-px bg-border/40" />
                    <a
                        href="https://github.com/workbydivyanshu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>

                <div className="relative hidden sm:block">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" aria-hidden="true" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Quick search..."
                            aria-label="Quick search"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onFocus={() => inputValue && setIsSearchOpen(true)}
                            className="bg-secondary/50 border border-border/40 rounded-full py-2 pl-10 pr-4 text-sm w-48 focus:w-64 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300"
                        />
                    </div>

                    <AnimatePresence>
                        {isSearchOpen && filteredResults.length > 0 && (
                            <motion.div
                                ref={searchDropdownRef}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute right-0 top-full mt-2 w-80 bg-secondary border border-border/60 rounded-xl shadow-2xl overflow-hidden z-50"
                            >
                                <div className="max-h-80 overflow-y-auto">
                                    {filteredResults.map((sheet) => (
                                        <button
                                            key={sheet.slug}
                                            onClick={() => handleSelect(sheet.slug)}
                                            className="w-full px-4 py-3 text-left hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-white">{sheet.title}</span>
                                                <span className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                                                    {sheet.category}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                                                {sheet.description}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {isSearchOpen && inputValue && filteredResults.length === 0 && (
                        <div className="absolute right-0 top-full mt-2 w-80 bg-secondary border border-border/60 rounded-xl shadow-2xl p-4 text-center text-gray-400 text-sm">
                            No results found for &quot;{inputValue}&quot;
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
}
