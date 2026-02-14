import { expect, test } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have semantic navigation landmarks', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have accessible navigation links', async ({ page }) => {
    await page.goto('/');

    const notesLink = page.getByRole('link', { name: 'Notes' });
    const chordsLink = page.getByRole('link', { name: 'Chords' });
    const scalesLink = page.getByRole('link', { name: 'Scales' });

    await expect(notesLink).toBeVisible();
    await expect(chordsLink).toBeVisible();
    await expect(scalesLink).toBeVisible();
  });

  test('should use dialog element for instrument picker', async ({
    page,
  }) => {
    await page.goto('/');
    await page.locator('svg#menu').waitFor();

    await page.getByRole('button', { name: 'add instrument' }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
  });

  test('should close instrument dialog when selecting an instrument', async ({
    page,
  }) => {
    await page.goto('/');
    await page.locator('svg#menu').waitFor();

    await page.getByRole('button', { name: 'add instrument' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await dialog
      .getByRole('button', { name: 'trumpet', exact: true })
      .click();
    await expect(dialog).not.toBeVisible();
  });

  test('should have interactive circle of fifths segments', async ({
    page,
  }) => {
    await page.goto('/');

    // All 12 positions should be clickable
    for (let i = 0; i < 12; i++) {
      await expect(page.locator(`[data-position="${i}"]`)).toBeVisible();
    }
  });

  test('should have accessible select elements on chords page', async ({
    page,
  }) => {
    await page.goto('/chords');

    const select = page.locator('select');
    await expect(select).toBeVisible();

    // Should have multiple options
    const options = select.locator('option');
    const count = await options.count();
    expect(count).toBeGreaterThan(1);
  });

  test('should have accessible select elements on scales page', async ({
    page,
  }) => {
    await page.goto('/scales');

    const select = page.locator('select');
    await expect(select).toBeVisible();

    const options = select.locator('option');
    const count = await options.count();
    expect(count).toBeGreaterThan(1);
  });

  test('should use buttons for instrument slots', async ({ page }) => {
    await page.goto('/');

    // Instrument slots should be buttons for keyboard accessibility
    const instrument1Button = page
      .getByRole('button', { name: 'piano', exact: true })
      .first();
    const instrument2Button = page.getByRole('button', {
      name: 'add instrument',
    });

    await expect(instrument1Button).toBeVisible();
    await expect(instrument2Button).toBeVisible();
  });
});
