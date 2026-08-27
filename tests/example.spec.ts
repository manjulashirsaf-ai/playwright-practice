/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigation to docs', async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.getByRole('link', {name: 'Docs'}).click();
    await expect(page).toHaveURL(/.*docs/);
});*/

//Refactoring after creating a page object model for PlaywrightDevPage
//import { PlaywrightDevPage } from '../pages/PlaywrightDevPage';

/*let playwrightDevPage: PlaywrightDevPage;         // NOT part of the hook -- just a variable declaration

test.beforeEach(async ({ page }) => {             // <-- THIS is the hook
  playwrightDevPage = new PlaywrightDevPage(page);
  await playwrightDevPage.goto();
});                                               // <-- hook ends here                       

/*test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await playwrightDevPage.clickGetStarted();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigation to docs', async({page})=>{
    await playwrightDevPage.clickDocs();
    await expect(page).toHaveURL(/.*docs/);
});*/

import { test, expect } from '../fixtures';

test('has title', async ({ page, playwrightDevPage  }) => {
  await expect(page).toHaveTitle(/Playwright/);
  //await expect(page).toHaveTitle(/ThisWillNeverMatch/);  - - Deliberately break a test to see a real CI failure to witness TraceViewer in action   
});

test('get started link', async ({ page, playwrightDevPage  }) => {
  await playwrightDevPage.clickGetStarted();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigation to docs', async({page, playwrightDevPage})=>{
    await playwrightDevPage.clickDocs();
    await expect(page).toHaveURL(/.*docs/);
});


