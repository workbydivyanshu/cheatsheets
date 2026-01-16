import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCheatsheetBySlug } from '../../lib/cheatsheets';
import fs from 'fs/promises';

// Mock fs/promises
vi.mock('fs/promises', () => ({
    default: {
        readFile: vi.fn(),
        readdir: vi.fn(),
    },
}));

describe('markdownToHtml integration in getCheatsheetBySlug', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render markdown to HTML with correct Tailwind classes', async () => {
        const mockContent = `---
title: Test
description: Test desc
category: Test cat
---
# Header 1
## Header 2
### Header 3

**Bold**
*Italic*
[Link](https://example.com)

- List item 1
- List item 2

1. Ordered item 1

> Blockquote

\`\`\`javascript
const x = 1;
\`\`\`

| Header |
|--------|
| Cell   |
`;

        // Supporting both default and named exports for fs
        const mockedFs = vi.mocked(fs);
        if (mockedFs.readFile) {
            mockedFs.readFile.mockResolvedValue(mockContent);
        }
        if (mockedFs.readdir) {
            mockedFs.readdir.mockResolvedValue(['test.md' as any]);
        }

        const result = await getCheatsheetBySlug('test');

        expect(result).not.toBeNull();
        if (result) {
            expect(result.title).toBe('Test');
            expect(result.contentHtml).toContain('text-3xl font-bold');
            expect(result.contentHtml).toContain('text-2xl font-bold');
            expect(result.contentHtml).toContain('text-xl font-bold');
            expect(result.contentHtml).toContain('text-accent hover:underline');
            expect(result.contentHtml).toContain('list-disc space-y-1');
            expect(result.contentHtml).toContain('list-decimal space-y-1');
            expect(result.contentHtml).toContain('border-l-4 border-accent');
            // result might have shiki-wrapper or fallback if shiki fails in test env
            expect(result.contentHtml).toMatch(/shiki-wrapper|bg-secondary/);
            expect(result.contentHtml).toContain('table class="w-full border-collapse');
        }
    });
});
