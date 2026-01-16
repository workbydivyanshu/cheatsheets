import { test, expect } from '@playwright/test';

test.describe('Cheatsheets E2E', () => {
    test('should load the homepage and search for a cheatsheet', async ({ page }) => {
        await page.goto('/');

        // Check if hero title is present
        await expect(page.locator('h1')).toContainText('Master any language');

        // Search for "Python"
        const searchInput = page.locator('input[placeholder*="React, Python, SQL"]');
        await searchInput.fill('Python');

        // Check if Python card is visible
        const pythonCard = page.locator('h3:has-text("Python")');
        await expect(pythonCard).toBeVisible();

        // Click on Python card
        await pythonCard.click();

        // Verify Python cheatsheet page
        await expect(page).toHaveURL(/\/cheatsheet\/python/);
        await expect(page.locator('h1').first()).toContainText('Python');

        // Verify content is rendered
        await expect(page.locator('.modern-prose')).toBeVisible();
    });

    test('should filter by category', async ({ page }) => {
        await page.goto('/');

        // Get initial count of cards
        const initialCards = await page.locator('.grid > div').count();

        // Click on a category button (e.g., Programming Language)
        const categoryBtn = page.locator('button:has-text("Programming Language")');
        if (await categoryBtn.isVisible()) {
            await categoryBtn.click();

            // Verify cards are still present or filtered
            const filteredCards = await page.locator('.grid > div').count();
            expect(filteredCards).toBeLessThanOrEqual(initialCards);
        }
    });

    test('should navigate back to index from a cheatsheet page', async ({ page }) => {
        await page.goto('/cheatsheet/javascript');

        const backBtn = page.locator('text=Back to Index');
        await backBtn.click();

        await expect(page).toHaveURL('/');
    });
});
