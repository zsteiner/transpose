import { expect, test } from '@playwright/test';

test.describe('Chords Page', () => {
  test('should display chord notation with default selection', async ({
    page,
  }) => {
    await page.goto('/chords');

    // Select should be visible with Major as default
    const select = page.locator('select');
    await expect(select).toBeVisible();
    await expect(select).toHaveValue('major');

    // Original label should be visible
    await expect(page.getByText('Original:')).toBeVisible();
  });

  test('should change chord type via dropdown', async ({ page }) => {
    await page.goto('/chords');

    // Change to Minor chord
    await page.locator('select').selectOption('minor');
    await expect(page.locator('select')).toHaveValue('minor');
  });

  test('should show transposed notation when instrument2 is selected', async ({
    page,
  }) => {
    await page.goto('/chords?instrument1=piano&instrument2=clarinet');

    // Both original and transposed labels should appear
    await expect(page.getByText('Original:')).toBeVisible();
    await expect(page.getByText('Transposed:')).toBeVisible();
  });

  test('should only show original notation without instrument2', async ({
    page,
  }) => {
    await page.goto('/chords?instrument1=piano');

    await expect(page.getByText('Original:')).toBeVisible();
    await expect(page.getByText('Transposed:')).not.toBeVisible();
  });
});

test.describe('Scales Page', () => {
  test('should display scale notation with default selection', async ({
    page,
  }) => {
    await page.goto('/scales');

    // Select should be visible with Major / Ionian as default
    const select = page.locator('select');
    await expect(select).toBeVisible();
    await expect(select).toHaveValue('major');

    // Original label should be visible
    await expect(page.getByText('Original:')).toBeVisible();
  });

  test('should change scale type via dropdown', async ({ page }) => {
    await page.goto('/scales');

    // Change to Minor / Aeolian
    await page.locator('select').selectOption('minor');
    await expect(page.locator('select')).toHaveValue('minor');
  });

  test('should show transposed notation when instrument2 is selected', async ({
    page,
  }) => {
    await page.goto('/scales?instrument1=piano&instrument2=altoSax');

    // Both labels should appear
    await expect(page.getByText('Original:')).toBeVisible();
    await expect(page.getByText('Transposed:')).toBeVisible();
  });

  test('should cycle through multiple scale types', async ({ page }) => {
    await page.goto('/scales');

    await page.locator('select').selectOption('dorian');
    await expect(page.locator('select')).toHaveValue('dorian');

    await page.locator('select').selectOption('bluesMinor');
    await expect(page.locator('select')).toHaveValue('bluesMinor');

    await page.locator('select').selectOption('bhairav');
    await expect(page.locator('select')).toHaveValue('bhairav');
  });
});
