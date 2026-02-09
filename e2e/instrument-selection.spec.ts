import { expect, test } from '@playwright/test';

test.describe('Instrument Selection', () => {
  test('should show piano as default instrument1 and add instrument for slot 2', async ({
    page,
  }) => {
    await page.goto('/');

    // First slot should show piano
    await expect(page.getByText('piano').first()).toBeVisible();
    // Second slot should show "add instrument"
    await expect(page.getByText('add instrument')).toBeVisible();
  });

  test('should open instrument picker dialog when clicking instrument1 slot', async ({
    page,
  }) => {
    await page.goto('/');

    // Click the first instrument slot (contains "piano")
    await page.locator('button').filter({ hasText: 'piano' }).click();

    // Dialog should open with instrument options
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('clarinet')).toBeVisible();
    await expect(dialog.getByText('trumpet')).toBeVisible();
    await expect(dialog.getByText('flute')).toBeVisible();
  });

  test('should select a new instrument1', async ({ page }) => {
    await page.goto('/');

    // Open instrument1 picker
    await page.locator('button').filter({ hasText: 'piano' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select clarinet
    await dialog.locator('button').filter({ hasText: 'clarinet' }).first().click();

    // Dialog should close and instrument1 should update
    await expect(dialog).not.toBeVisible();
    // The first slot should now show clarinet
    await expect(
      page.locator('button').filter({ hasText: 'clarinet' }).first(),
    ).toBeVisible();
  });

  test('should select instrument2 and show transposition message', async ({
    page,
  }) => {
    await page.goto('/');

    // Click the "add instrument" slot (instrument2)
    await page.locator('button').filter({ hasText: 'add instrument' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select clarinet as instrument2
    await dialog.locator('button').filter({ hasText: 'clarinet' }).first().click();
    await expect(dialog).not.toBeVisible();

    // TransposeMessage should appear
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the clarinet/)).toBeVisible();
  });

  test('should clear instrument2 with the clear selection button', async ({
    page,
  }) => {
    await page.goto('/?instrument1=piano&instrument2=clarinet');

    // TransposeMessage should be visible
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();

    // Click clear selection
    await page.getByText('clear selection').click();

    // Instrument2 slot should revert to "add instrument"
    await expect(page.getByText('add instrument')).toBeVisible();

    // TransposeMessage should disappear
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).not.toBeVisible();
  });

  test('should update instrument2 by selecting a different one', async ({
    page,
  }) => {
    await page.goto('/?instrument1=piano&instrument2=clarinet');

    // Verify clarinet is shown
    await expect(page.getByText(/on the clarinet/)).toBeVisible();

    // Click the second instrument slot (shows "clarinet")
    // The second instrument button is inside a div with a clear button sibling
    await page
      .locator('button')
      .filter({ hasText: 'clarinet' })
      .first()
      .click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select trumpet
    await dialog.locator('button').filter({ hasText: 'trumpet' }).click();
    await expect(dialog).not.toBeVisible();

    // Message should update to trumpet
    await expect(page.getByText(/on the trumpet/)).toBeVisible();
  });
});
