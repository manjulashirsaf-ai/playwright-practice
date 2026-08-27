/*import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pages/PlaywrightDevPage';

let playwrightDevPage: PlaywrightDevPage; 

test.beforeEach(async ({ page }) => {             // <-- THIS is the hook
  playwrightDevPage = new PlaywrightDevPage(page);
  await playwrightDevPage.goto();
});*/                                              // <-- hook ends here                       

import { test, expect } from '../fixtures';

test('search box accepts input', async ({ page, playwrightDevPage }) => {
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  // BLANK 1: fill the searchbox locator with the text 'locators'
  await page.getByRole('searchbox', { name: 'Search' }).fill('locators');
  // BLANK 2: assert the searchbox now has that value, using toHaveValue
  await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue('locators');
});

const searchTerms = ['locators', 'fixtures', 'assertions'];

for (const term of searchTerms) {
  test(`search box accepts "${term}"`, async ({ page, playwrightDevPage }) => {
    await page.getByRole('button', { name: 'Search (Control+k)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill(term);
    await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue(term);
  });
}