import { expect, test } from '@playwright/test';

import { waitForHydration } from './helpers';

test.describe('Note Display', () => {
  test('should display original notes on the notes page', async ({ page }) => {
    await page.goto('/?note=C&instrument1=piano');

    // The circle of fifths should be visible with the selected note
    await expect(page.locator('[data-position="0"]')).toBeVisible();
  });

  test('should display both original and transposed notes when transposing', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=clarinet');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
  });

  test('should not display transposed notes without instrument2', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).not.toBeVisible();
  });

  test('should display accidental notes with flat and sharp symbols', async ({
    page,
  }) => {
    // Select an accidental note (F#/Gb at position 6)
    await page.goto('/?instrument1=piano&instrument2=clarinet');
    await page.locator('svg#menu').waitFor();
    await waitForHydration(page);
    await page.locator('[data-position="6"]').click();

    // The note display should contain accidental symbols
    await expect(page.getByText('♭').first()).toBeVisible();
    await expect(page.getByText('♯').first()).toBeVisible();
  });

  test('should update displayed notes when selecting a new note on the circle', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=clarinet');
    await page.locator('svg#menu').waitFor();
    await waitForHydration(page);

    // Initial state - verify message is visible
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();

    // Change to G
    await page.locator('[data-position="1"]').click();
    await expect(page).toHaveURL(/note=G/);

    // Message should still be visible with updated note
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
  });
});
