import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
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

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// Custom renderer for code blocks using shiki
md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];
  const code = token.content.trim();
  const lang = token.info.trim() || "javascript";
  return `<div class="bg-secondary rounded-lg p-4 my-4 overflow-x-auto relative group">
    <pre><code class="language-${lang}">${escapeHtml(code)}</code></pre>
  </div>`;
};

// Custom renderer for tables to add Tailwind classes
md.renderer.rules.table_open = () => '<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-700">';
md.renderer.rules.table_close = () => '</table></div>';
md.renderer.rules.th_open = () => '<th class="bg-secondary border border-gray-700 px-4 py-2 font-bold text-left">';
md.renderer.rules.td_open = () => '<td class="border border-gray-700 px-4 py-2">';

// Custom renderer for headings to add Tailwind classes
md.renderer.rules.heading_open = (tokens, idx) => {
  const n = tokens[idx].tag.slice(1);
  const classes = {
    "1": "text-3xl font-bold mt-10 mb-5",
    "2": "text-2xl font-bold mt-8 mb-4",
    "3": "text-xl font-bold mt-6 mb-3",
  }[n] || "font-bold";
  return `<h${n} class="${classes}">`;
};

// Custom renderer for links
md.renderer.rules.link_open = (tokens, idx) => {
  const href = tokens[idx].attrGet("href");
  return `<a href="${href}" class="text-accent hover:underline">`;
};

// Custom renderer for blockquotes
md.renderer.rules.blockquote_open = () => '<blockquote class="border-l-4 border-accent pl-4 italic text-gray-400 my-3">';

// Custom renderer for lists
md.renderer.rules.bullet_list_open = () => '<ul class="list-disc space-y-1 my-3 pl-4">';
md.renderer.rules.ordered_list_open = () => '<ol class="list-decimal space-y-1 my-3 pl-4">';

async function markdownToHtml(markdown: string): Promise<string> {
  const tokens = md.parse(markdown, {});

  // Custom processing for code blocks to use shiki async
  for (const token of tokens) {
    if (token.type === "fence") {
      const code = token.content.trim();
      const lang = token.info.trim() || "javascript";
      try {
        const highlighted = await codeToHtml(code, {
          lang,
          theme: "github-dark",
        });
        token.content = `<div class="bg-secondary rounded-lg p-4 my-4 overflow-x-auto relative group shiki-wrapper">${highlighted}</div>`;
        token.type = "html_block"; // Convert to HTML block so it's not double-rendered
      } catch (e) {
        token.content = `<div class="bg-secondary rounded-lg p-4 my-4 overflow-x-auto relative group">
          <pre><code class="language-${lang}">${escapeHtml(code)}</code></pre>
        </div>`;
        token.type = "html_block";
      }
    }
  }

  return md.renderer.render(tokens, md.options, {});
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
