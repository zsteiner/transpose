import { expect, test } from '@playwright/test';

test.describe('Circle of Fifths Note Selection', () => {
  test('should display the circle of fifths SVG', async ({ page }) => {
    await page.goto('/');

    const svg = page.locator('svg#menu');
    await expect(svg).toBeVisible();
  });

  test('should select a different note by clicking on the circle', async ({
    page,
  }) => {
    await page.goto('/?instrument1=piano&instrument2=clarinet');

    // Click on the G note (position 1)
    await page.locator('[data-position="1"]').click();

    // URL should update with note=G
    await expect(page).toHaveURL(/note=G/);

    // The transposition message should reference G
    await expect(page.getByText(/on the piano sounds the same as/)).toBeVisible();
  });

  test('should update transposition when note changes', async ({ page }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=clarinet');

    // Verify initial message contains the transposition
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();

    // Click on E note (position 4)
    await page.locator('[data-position="4"]').click();

    // URL should update
    await expect(page).toHaveURL(/note=E/);
  });

  test('should allow clicking through multiple notes', async ({ page }) => {
    await page.goto('/?instrument1=piano&instrument2=clarinet');

    // Click through several notes
    await page.locator('[data-position="2"]').click(); // D
    await expect(page).toHaveURL(/note=D/);

    await page.locator('[data-position="5"]').click(); // B
    await expect(page).toHaveURL(/note=B/);

    await page.locator('[data-position="0"]').click(); // C
    await expect(page).toHaveURL(/note=C/);
  });
});
