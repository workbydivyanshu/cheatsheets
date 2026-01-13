# 🚀 Cheatsheets Website - Getting Started

## What's Been Built

A modern, fully-functional cheatsheets website using **Next.js 15** with **TypeScript**, **Tailwind CSS**, and **Markdown support**. The website is designed for speed, scalability, and ease of content management.

### Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Markdown:** gray-matter + markdown-it
- **Deployment:** Vercel (ready)
- **Code Quality:** ESLint + Prettier

## Project Structure

```
cheatsheets/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── globals.css              # Global styles
│   │   ├── page.tsx                 # Homepage (server component)
│   │   ├── page-client.tsx          # Homepage UI (client component)
│   │   └── cheatsheet/[slug]/
│   │       └── page.tsx             # Dynamic cheatsheet pages
│   ├── components/
│   │   └── CopyButton.tsx           # Copy-to-clipboard component
│   └── lib/
│       └── cheatsheets.ts           # Markdown loading & parsing utilities
├── content/
│   └── cheatsheets/                 # Markdown cheatsheet files
│       ├── javascript.md
│       ├── python.md
│       ├── sql.md
│       ├── html.md
│       └── css.md
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── .eslintrc.json
```

## Installation & Running Locally

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/workbydivyanshu/cheatsheets.git
cd cheatsheets

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Features

### ✅ Implemented
- **Search & Filter:** Full-text search by language name and description
- **Category Filtering:** Filter by programming language, database, markup language, etc.
- **Responsive Design:** Mobile-first, fully responsive layout
- **Dark Theme:** Professional dark mode by default
- **Fast Navigation:** Server-side rendering for SEO and performance
- **Dynamic Routes:** Automatic page generation for each language
- **Markdown Support:** All cheatsheets written in clean, maintainable markdown
- **Syntax Highlighting:** Ready for code highlighting with Shiki
- **Code Blocks:** Properly formatted code examples in each cheatsheet

### 🎯 Cheatsheets Included (5 Languages)

1. **JavaScript** - Core language features, DOM, async/await, classes
2. **Python** - Syntax, functions, classes, common libraries
3. **SQL** - Queries, joins, functions, transactions
4. **HTML** - Tags, forms, semantic elements, accessibility
5. **CSS** - Selectors, flexbox, grid, animations, responsive design

## Adding More Cheatsheets

### Simple 3-Step Process

1. Create a new markdown file in `content/cheatsheets/`:
```bash
touch content/cheatsheets/java.md
```

2. Add frontmatter metadata and content:
```markdown
---
title: Java
description: Java syntax, OOP, collections, and frameworks
category: Programming Language
---

# Java Cheatsheet

## Variables & Data Types

### Primitive Types
\`\`\`java
int age = 30;
double price = 19.99;
boolean active = true;
char letter = 'A';
\`\`\`

...rest of cheatsheet
```

3. Save the file — it will **automatically appear** on the website!

## How It Works

1. **On Build/Start:** The app scans `content/cheatsheets/` for all `.md` files
2. **Parse Metadata:** Extracts title, description, and category from frontmatter
3. **Dynamic Routes:** Automatically creates pages for each language
4. **Search Integration:** Indexes all content for search functionality
5. **Lazy Loading:** Markdown is parsed on-demand for performance

## Environment Variables

Currently, no environment variables are required for the basic setup. When you deploy to Vercel, no additional configuration is needed.

## Deployment to Vercel

### Quick Deploy (Recommended)

1. **Push your repo** to GitHub (already done ✅)

2. **Create Vercel account** at https://vercel.com

3. **Connect GitHub repository:**
   - Visit https://vercel.com/new
   - Select "Import Git Repository"
   - Choose "workbydivyanshu/cheatsheets"
   - Click "Deploy"

4. **That's it!** Your site is live. Vercel will automatically:
   - Build on every push to `main`
   - Serve via CDN
   - Provide free SSL certificate
   - Set up automatic previews for PRs

### Get Your Live URL
After deployment, Vercel provides a `.vercel.app` URL. You can also add a custom domain.

## Development Workflow

### Running the Dev Server
```bash
npm run dev
```
- HMR (Hot Module Replacement) enabled
- Visit http://localhost:3000
- Changes save instantly

### Code Formatting
```bash
npm run format
```
Auto-formats all TypeScript, JavaScript, CSS, and Markdown files.

### Linting
```bash
npm run lint
```
Check for code quality issues using ESLint.

## Content Guidelines

### Frontmatter Metadata (Required)
```markdown
---
title: Language Name
description: Brief description of what's covered
category: Programming Language | Database | Framework | Markup Language | etc.
---
```

### Content Structure (Recommended)
- Use H1 for main title (mirrors title in frontmatter)
- Use H2 for major sections (Variables, Functions, Classes, etc.)
- Use H3 for subsections
- Include code examples in markdown code blocks with language specification
- Keep it beginner-friendly but comprehensive

### Code Examples
```markdown
\`\`\`javascript
// JavaScript example
const greeting = (name) => `Hello, ${name}`;
\`\`\`

\`\`\`python
# Python example
def greet(name):
    return f"Hello, {name}"
\`\`\`
```

## Performance & SEO

- **Server-Side Rendering:** Homepage and cheatsheet pages pre-rendered
- **Static Generation:** Cheatsheet pages generated at build time
- **Optimized Images:** Next.js Image component ready for use
- **Meta Tags:** Proper metadata for SEO and social sharing
- **Mobile-Friendly:** Responsive design with proper viewport settings
- **Fast Load Times:** Markdown parsing optimized, minimal JS bundle

## Future Enhancements

Potential features to add:
- [ ] Dark/Light mode toggle
- [ ] Copy code button for examples
- [ ] Table of contents sidebar
- [ ] Keyboard shortcuts for search
- [ ] Syntax highlighting with line numbers
- [ ] PDF export for cheatsheets
- [ ] Community contributions via GitHub Issues
- [ ] Related cheatsheets suggestions
- [ ] Breadcrumb navigation
- [ ] Print-friendly CSS

## Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Cheatsheet not showing up
- Ensure file is named correctly (lowercase, no spaces)
- Check frontmatter is properly formatted (YAML syntax)
- Restart dev server after adding files

### Styling looks broken
- Tailwind CSS might need rebuilding
- Clear `.next` folder and restart dev server

## Contributing

To add new cheatsheets:
1. Fork the repository
2. Add your cheatsheet markdown file to `content/cheatsheets/`
3. Commit and push
4. Create a Pull Request

## License

MIT - Feel free to use this for personal and commercial projects.

## Author

**workbydivyanshu** - [GitHub](https://github.com/workbydivyanshu)

---

## Next Steps

1. ✅ Push to GitHub - **DONE**
2. 🔄 Deploy to Vercel - Go to https://vercel.com/new and import your repo
3. 📝 Add more cheatsheets - Create `.md` files in `content/cheatsheets/`
4. 🎨 Customize styling - Edit `src/app/globals.css` and `tailwind.config.ts`
5. 🚀 Share your site - Share the Vercel URL

Happy coding! 🎉
