import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { codeToHtml } from "shiki";

const CHEATSHEETS_DIR = path.join(process.cwd(), "content", "cheatsheets");

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

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || "javascript";
    const trimmedCode = code.trim();
    return `<pre class="bg-secondary rounded-lg p-4 my-4"><code class="language-${language}">${escapeHtml(trimmedCode)}</code></pre>`;
  });

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/^\* (.*?)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Paragraphs
  const lines = html.split("\n");
  html = lines
    .map((line) => {
      if (
        line.startsWith("<h") ||
        line.startsWith("<ul") ||
        line.startsWith("<pre")
      ) {
        return line;
      }
      if (line.trim() === "") {
        return "";
      }
      if (!line.startsWith("<li")) {
        return `<p>${line}</p>`;
      }
      return line;
    })
    .join("\n");

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
