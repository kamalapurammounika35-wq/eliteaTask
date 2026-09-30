import { test, expect } from '@playwright/test';

test('opens Client Work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAllCookies = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAllCookies.isVisible()) {
    await acceptAllCookies.click();
  }

  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Services', exact: true }).first().click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
