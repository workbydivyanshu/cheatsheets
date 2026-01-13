# Cheatsheets - Your Coding Companion

A comprehensive, clean, and beginner-friendly website featuring cheatsheets for all major coding languages.

## Features

- 📚 Complete cheatsheets for 100+ coding languages
- 🔍 Fast search and filtering by language
- 💻 Syntax highlighting for code examples
- 📱 Fully responsive design
- 🚀 Built with modern web technologies
- ⚡ Lightning-fast performance

## Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Code Highlighting:** Shiki
- **Markdown Processing:** gray-matter & markdown-it
- **Deployment:** Vercel

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Code Formatting

```bash
npm run format
```

## Project Structure

```
cheatsheets/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   └── lib/             # Utility functions & markdown processing
├── content/
│   └── cheatsheets/     # Markdown cheatsheet files
├── public/              # Static assets
└── package.json
```

## Adding a New Cheatsheet

1. Create a new markdown file in `content/cheatsheets/` (e.g., `python.md`)
2. Add frontmatter metadata:

```markdown
---
title: Python
description: Python programming language cheatsheet
category: Programming Language
---

# Python Cheatsheet
...
```

3. Add content with sections and code examples
4. The cheatsheet will automatically appear on the website

## License

MIT

## Author

[workbydivyanshu](https://github.com/workbydivyanshu)
