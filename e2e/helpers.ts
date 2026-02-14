import type { Page } from '@playwright/test';

/**
 * Wait for React to finish hydrating the page.
 *
 * Next.js streams server-rendered HTML which appears in the DOM before React
 * attaches event handlers on the client. This helper polls until React's
 * internal fiber properties are attached to a button element, which signals
 * that hydration is complete and interactive elements are ready.
 */
export async function waitForHydration(page: Page) {
  await page.waitForFunction(() => {
    const btn = document.querySelector('button');
    return (
      btn &&
      Object.getOwnPropertyNames(btn).some((k) =>
        k.startsWith('__reactProps'),
      )
    );
  });
}
