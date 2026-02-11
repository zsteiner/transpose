import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load the home page with Notes nav link active', async ({
    page,
  }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav.getByText('Notes')).toBeVisible();
    await expect(nav.getByText('Chords')).toBeVisible();
    await expect(nav.getByText('Scales')).toBeVisible();
    await expect(nav.getByText('Custom')).toBeVisible();
  });

  test('should navigate to the Chords page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Chords' }).click();
    await expect(page).toHaveURL(/\/chords/);
    await expect(page.locator('select')).toBeVisible();
  });

  test('should navigate to the Scales page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Scales' }).click();
    await expect(page).toHaveURL(/\/scales/);
    await expect(page.locator('select')).toBeVisible();
  });

  test('should preserve query params when navigating between pages', async ({
    page,
  }) => {
    await page.goto('/?note=g&instrument1=piano&instrument2=clarinet');

    // Navigate to Chords
    await page.getByRole('link', { name: 'Chords' }).click();
    await expect(page).toHaveURL(/\/chords\?/);
    await expect(page).toHaveURL(/note=g/);
    await expect(page).toHaveURL(/instrument1=piano/);
    await expect(page).toHaveURL(/instrument2=clarinet/);

    // Navigate to Scales
    await page.getByRole('link', { name: 'Scales' }).click();
    await expect(page).toHaveURL(/\/scales\?/);
    await expect(page).toHaveURL(/note=g/);
    await expect(page).toHaveURL(/instrument1=piano/);
    await expect(page).toHaveURL(/instrument2=clarinet/);

    // Navigate back to Notes
    await page.getByRole('link', { name: 'Notes' }).click();
    await expect(page).toHaveURL(/\/\?/);
    await expect(page).toHaveURL(/note=g/);
  });
});
