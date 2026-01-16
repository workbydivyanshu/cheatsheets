"use client";

import { createContext, useContext, ReactNode } from "react";

interface Cheatsheet {
    slug: string;
    title: string;
    description: string;
    category: string;
}

interface CheatsheetContextType {
    cheatsheets: Cheatsheet[];
}

const CheatsheetContext = createContext<CheatsheetContextType>({ cheatsheets: [] });

export function CheatsheetProvider({ 
    children, 
    cheatsheets 
}: { 
    children: ReactNode; 
    cheatsheets: Cheatsheet[];
}) {
    return (
        <CheatsheetContext.Provider value={{ cheatsheets }}>
            {children}
        </CheatsheetContext.Provider>
    );
}

export function useCheatsheets() {
    return useContext(CheatsheetContext);
}
