import { expect, test } from '@playwright/test';

test.describe('Custom Notation Page', () => {
  test('should display textarea for entering ABC notation', async ({
    page,
  }) => {
    await page.goto('/custom');

    await expect(page.locator('textarea')).toBeVisible();
  });

  test('should render notation when ABC text is entered', async ({ page }) => {
    await page.goto('/custom');

    const textarea = page.locator('textarea');
    await textarea.click();
    await textarea.pressSequentially('K:C', { delay: 50 });

    await expect(page.getByText('Original:')).toBeVisible();
  });

  test('should show transposed notation when instrument2 is selected', async ({
    page,
  }) => {
    await page.goto('/custom?instrument1=piano&instrument2=clarinet');

    const textarea = page.locator('textarea');
    await textarea.click();
    await textarea.pressSequentially('K:C', { delay: 50 });

    await expect(page.getByText('Original:')).toBeVisible();
    await expect(page.getByText('Transposed:')).toBeVisible();
  });

  test('should not render notation when textarea is empty', async ({
    page,
  }) => {
    await page.goto('/custom');

    await expect(page.getByText('Original:')).not.toBeVisible();
  });

  test('should be navigable from the main nav', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Custom' }).click();
    await expect(page).toHaveURL(/\/custom/);
    await expect(page.locator('textarea')).toBeVisible();
  });
});
