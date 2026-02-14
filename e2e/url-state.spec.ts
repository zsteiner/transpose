import { expect, test } from '@playwright/test';

import { waitForHydration } from './helpers';

test.describe('URL State Management', () => {
  test('should initialize state from URL parameters', async ({ page }) => {
    await page.goto('/?note=G&instrument1=piano&instrument2=clarinet');

    // Instrument1 should show piano
    await expect(page.getByText('piano').first()).toBeVisible();
    // Instrument2 should show clarinet
    await expect(page.getByText(/on the clarinet/)).toBeVisible();
    // Transposition message should reference the correct note
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
  });

  test('should update URL when instrument is selected', async ({ page }) => {
    await page.goto('/');
    await page.locator('svg#menu').waitFor();
    await waitForHydration(page);

    // Select instrument2
    await page.getByRole('button', { name: 'add instrument' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'trumpet', exact: true }).click();

    // URL should contain instrument2
    await expect(page).toHaveURL(/instrument2=trumpet/);
  });

  test('should survive page reload', async ({ page }) => {
    await page.goto('/?note=E&instrument1=piano&instrument2=trumpet');

    // Verify state is loaded
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the trumpet/)).toBeVisible();

    // Reload page
    await page.reload();

    // State should persist
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the trumpet/)).toBeVisible();
    await expect(page).toHaveURL(/note=E/);
    await expect(page).toHaveURL(/instrument1=piano/);
    await expect(page).toHaveURL(/instrument2=trumpet/);
  });

  test('should handle invalid URL parameters gracefully', async ({ page }) => {
    await page.goto(
      '/?note=invalid&instrument1=unknown&instrument2=fake',
    );

    // Page should load without errors
    await expect(page.locator('svg#menu')).toBeVisible();
    // Should fall back to defaults (piano as instrument1, no instrument2 message)
    await expect(
      page.getByText(/sounds the same as/),
    ).not.toBeVisible();
  });

  test('should handle partial URL parameters', async ({ page }) => {
    await page.goto('/?instrument1=piano');

    // Should load with piano but no transpose message
    await expect(page.getByText('piano').first()).toBeVisible();
    await expect(
      page.getByText(/sounds the same as/),
    ).not.toBeVisible();
  });
});
