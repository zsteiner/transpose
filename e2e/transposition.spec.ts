import { expect, test } from '@playwright/test';

test.describe('Transposition Correctness', () => {
  test('should show correct transposition for piano to Bb clarinet', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=clarinet');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the clarinet/)).toBeVisible();
  });

  test('should show correct transposition for piano to alto sax', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=altoSax');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the alto sax/)).toBeVisible();
  });

  test('should show correct transposition for piano to french horn', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=frenchHorn');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the french horn/)).toBeVisible();
  });

  test('should show "no need to transpose" for same key instruments', async ({
    page,
  }) => {
    await page.goto('/?note=C&instrument1=piano&instrument2=flute');

    await expect(
      page.getByText(/on the piano sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the flute/)).toBeVisible();
    await expect(
      page.getByText('There is no need to transpose.'),
    ).toBeVisible();
  });

  test('should not show transposition message without instrument2', async ({
    page,
  }) => {
    await page.goto('/?instrument1=piano');

    await expect(
      page.getByText(/sounds the same as/),
    ).not.toBeVisible();
  });

  test('should handle transposition between two non-concert-pitch instruments', async ({
    page,
  }) => {
    await page.goto(
      '/?note=C&instrument1=clarinet&instrument2=altoSax',
    );

    await expect(
      page.getByText(/on the clarinet sounds the same as/),
    ).toBeVisible();
    await expect(page.getByText(/on the alto sax/)).toBeVisible();
  });
});
