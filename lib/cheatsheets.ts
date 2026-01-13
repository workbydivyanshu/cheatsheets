import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { codeToHtml } from "shiki";

const CHEATSHEETS_DIR = path.join(process.cwd(), "app", "content", "cheatsheets");

export interface CheatsheetFrontmatter {
  title: string;
  description: string;
  category: string;
}

export interface Cheatsheet {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
  contentHtml: string;
}

async function highlightCode(code: string, language: string = "javascript") {
  try {
    const html = await codeToHtml(code, {
      lang: language,
      theme: "github-dark",
    });
    return html;
  } catch (error) {
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }
}

function escapeHtml(text: string) {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

async function markdownToHtml(markdown: string): Promise<string> {
  // Simple markdown parser - converts basic markdown to HTML
  let html = markdown;

  // First, handle tables BEFORE other processing
  // Match table blocks (header row, separator row, and data rows)
  html = html.replace(/(\|[^\n]+\|\n\|[-:\s|]+\|\n(?:\|[^\n]+\|\n?)+)/g, (tableBlock) => {
    const rows = tableBlock.trim().split('\n');
    if (rows.length < 2) return tableBlock;
    
    // Filter out separator row first, then process
    const dataRows = rows.filter(row => !/^\|?[\s:-]+\|?$/.test(row.trim()));
    
    if (dataRows.length === 0) return tableBlock;
    
    let tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-700">';
    
    dataRows.forEach((row, index) => {
      const cells = row.split('|').filter(cell => cell.trim() !== '');
      if (cells.length === 0) return;
      
      const isHeader = index === 0;
      const tag = isHeader ? 'th' : 'td';
      const cellClass = isHeader 
        ? 'bg-secondary border border-gray-700 px-4 py-2 font-bold text-left' 
        : 'border border-gray-700 px-4 py-2';
      
      tableHtml += '<tr>';
      cells.forEach(cell => {
        tableHtml += `<${tag} class="${cellClass}">${cell.trim()}</${tag}>`;
      });
      tableHtml += '</tr>';
    });
    
    tableHtml += '</table></div>';
    return tableHtml;
  });

  // Headers with proper Tailwind classes
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>');

  // Code blocks with proper syntax highlighting wrapping
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || "javascript";
    const trimmedCode = code.trim();
    return `<div class="bg-secondary rounded-lg p-4 my-4 overflow-x-auto"><pre><code class="language-${language}">${escapeHtml(trimmedCode)}</code></pre></div>`;
  });

  // Bold (before italic to avoid conflicts)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold'>$1</strong>");

  // Italic
  html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em class='italic'>$1</em>");

  // Links with proper styling
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>');

  // Code inline (but not inside code blocks)
  html = html.replace(/`([^`]+)`/g, '<code class="bg-secondary px-2 py-1 rounded text-sm font-mono">$1</code>');

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-accent pl-4 italic text-gray-400 my-3">$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="border-gray-700 my-6">');

  // Unordered lists - handle both * and - bullets
  html = html.replace(/^[\*\-] (.*?)$/gm, '<li class="ml-4">$1</li>');
  
  // Ordered lists
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-4">$1</li>');

  // Wrap consecutive list items in ul/ol
  html = html.replace(/((?:<li class="ml-4">.*?<\/li>\n?)+)/g, (match) => {
    return `<ul class="list-disc space-y-1 my-3 pl-4">${match}</ul>`;
  });

  // Paragraphs - group consecutive lines and wrap together
  const lines = html.split("\n");
  let inCodeBlock = false;
  let inList = false;
  let inTable = false;
  const result: string[] = [];
  let currentParagraph: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track code blocks
    if (line.includes("<div class=\"bg-secondary")) {
      inCodeBlock = true;
    }
    if (line.includes("</div>") && inCodeBlock) {
      inCodeBlock = false;
    }

    // Track lists
    if (line.includes("<ul") || line.includes("<ol")) {
      inList = true;
    }
    if (line.includes("</ul>") || line.includes("</ol>")) {
      inList = false;
    }

    // Track tables
    if (line.includes("<table")) {
      inTable = true;
    }
    if (line.includes("</table>")) {
      inTable = false;
    }

    // Check if this is a structural element
    const isStructural =
      line.startsWith("<h") ||
      line.startsWith("<ul") ||
      line.startsWith("<ol") ||
      line.startsWith("</ul>") ||
      line.startsWith("</ol>") ||
      line.startsWith("<div") ||
      line.startsWith("</div>") ||
      line.startsWith("<pre") ||
      line.startsWith("</pre>") ||
      line.startsWith("<li") ||
      line.startsWith("<blockquote") ||
      line.startsWith("<table") ||
      line.startsWith("</table>") ||
      line.startsWith("<tr") ||
      line.startsWith("</tr>") ||
      line.startsWith("<hr") ||
      inCodeBlock ||
      inList ||
      inTable;

    // If it's empty
    if (line.trim() === "") {
      if (currentParagraph.length > 0) {
        result.push(`<p class="text-gray-300 my-3 leading-relaxed">${currentParagraph.join(" ")}</p>`);
        currentParagraph = [];
      }
      result.push("");
    } else if (isStructural) {
      // Flush current paragraph
      if (currentParagraph.length > 0) {
        result.push(`<p class="text-gray-300 my-3 leading-relaxed">${currentParagraph.join(" ")}</p>`);
        currentParagraph = [];
      }
      result.push(line);
    } else {
      // Regular text - accumulate for paragraph
      currentParagraph.push(line.trim());
    }
  }

  // Flush any remaining paragraph
  if (currentParagraph.length > 0) {
    result.push(`<p class="text-gray-300 my-3 leading-relaxed">${currentParagraph.join(" ")}</p>`);
  }

  html = result.join("\n");

  return html;
}

export async function getAllCheatsheets(): Promise<
  Array<{
    slug: string;
    title: string;
    description: string;
    category: string;
  }>
> {
  try {
    const files = await fs.readdir(CHEATSHEETS_DIR);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    const cheatsheets = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(CHEATSHEETS_DIR, file);
        const content = await fs.readFile(filePath, "utf-8");
        const { data } = matter(content);

        return {
          slug: file.replace(".md", ""),
          title: (data as CheatsheetFrontmatter).title || file.replace(".md", ""),
          description:
            (data as CheatsheetFrontmatter).description || "Cheatsheet",
          category:
            (data as CheatsheetFrontmatter).category || "Programming Language",
        };
      })
    );

    return cheatsheets.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error reading cheatsheets:", error);
    return [];
  }
}

export async function getCheatsheetBySlug(
  slug: string
): Promise<Cheatsheet | null> {
  try {
    const filePath = path.join(CHEATSHEETS_DIR, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const contentHtml = await markdownToHtml(content);

    return {
      slug,
      title: (data as CheatsheetFrontmatter).title || slug,
      description:
        (data as CheatsheetFrontmatter).description || "Cheatsheet",
      category:
        (data as CheatsheetFrontmatter).category || "Programming Language",
      content,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading cheatsheet ${slug}:`, error);
    return null;
  }
}
