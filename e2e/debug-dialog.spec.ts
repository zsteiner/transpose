import { expect, test } from '@playwright/test';

test('debug dialog - add instrument click', async ({ page }) => {
  await page.goto('/');
  await page.locator('svg#menu').waitFor();

  await page.getByRole('button', { name: 'add instrument' }).click();
  await page.waitForTimeout(500);

  const afterClick = await page.evaluate(() => {
    const dialogs = document.querySelectorAll('dialog');
    return Array.from(dialogs).map((d, i) => ({ index: i, open: d.open }));
  });
  console.log('After add instrument click:', JSON.stringify(afterClick));

  const dialogVisible = await page.getByRole('dialog').count();
  console.log('Dialog role count:', dialogVisible);
});

test('debug dialog - piano click', async ({ page }) => {
  await page.goto('/');
  await page.locator('svg#menu').waitFor();

  await page.getByRole('button', { name: 'piano', exact: true }).first().click();
  await page.waitForTimeout(500);

  const afterClick = await page.evaluate(() => {
    const dialogs = document.querySelectorAll('dialog');
    return Array.from(dialogs).map((d, i) => ({ index: i, open: d.open }));
  });
  console.log('After piano click:', JSON.stringify(afterClick));

  const dialogVisible = await page.getByRole('dialog').count();
  console.log('Dialog role count:', dialogVisible);
});
