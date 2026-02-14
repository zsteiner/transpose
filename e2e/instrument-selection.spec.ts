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
    await page.locator('svg#menu').waitFor();

    // Click the first instrument slot — use getByRole scoped outside dialogs
    await page.getByRole('button', { name: 'piano', exact: true }).first().click();

    // Dialog should open with instrument options
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText('clarinet', { exact: true })).toBeVisible();
    await expect(dialog.getByText('trumpet')).toBeVisible();
    await expect(dialog.getByText('flute')).toBeVisible();
  });

  test('should select a new instrument1', async ({ page }) => {
    await page.goto('/');
    await page.locator('svg#menu').waitFor();

    // Open instrument1 picker
    await page.getByRole('button', { name: 'piano', exact: true }).first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select clarinet — use exact match to avoid matching "alto clarinet" / "bass clarinet"
    await dialog.getByRole('button', { name: 'clarinet', exact: true }).click();

    // Dialog should close and instrument1 should update
    await expect(dialog).not.toBeVisible();
    // The first slot should now show clarinet
    await expect(
      page.getByRole('button', { name: 'clarinet', exact: true }).first(),
    ).toBeVisible();
  });

  test('should select instrument2 and show transposition message', async ({
    page,
  }) => {
    await page.goto('/');
    await page.locator('svg#menu').waitFor();

    // Click the "add instrument" slot (instrument2)
    await page.getByRole('button', { name: 'add instrument' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select trumpet as instrument2 (unambiguous name)
    await dialog.getByRole('button', { name: 'trumpet', exact: true }).click();
    await expect(dialog).not.toBeVisible();

    // TransposeMessage should appear
    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the trumpet/)).toBeVisible();
  });

  test('should clear instrument2 with the clear selection button', async ({
    page,
  }) => {
    await page.goto('/?instrument1=piano&instrument2=clarinet');
    await page.locator('svg#menu').waitFor();

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
    await page.locator('svg#menu').waitFor();

    // Verify clarinet is shown
    await expect(page.getByText(/on the clarinet/)).toBeVisible();

    // Click the second instrument slot (shows "clarinet")
    await page
      .getByRole('button', { name: 'clarinet', exact: true })
      .first()
      .click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Select trumpet
    await dialog.getByRole('button', { name: 'trumpet', exact: true }).click();
    await expect(dialog).not.toBeVisible();

    // Message should update to trumpet
    await expect(page.getByText(/on the trumpet/)).toBeVisible();
  });
});
