import { test, expect } from '@playwright/test';

test('Przykładowy test Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
