import { test as base } from '@playwright/test';
import { PlaywrightDevPage } from './pages/PlaywrightDevPage';

type MyFixtures = {
  playwrightDevPage: PlaywrightDevPage;
};

export const test = base.extend<MyFixtures>({
  playwrightDevPage: async ({ page }, use) => {
    const playwrightDevPage = new PlaywrightDevPage(page);
    await playwrightDevPage.goto();
    await use(playwrightDevPage);
  },
});

export { expect } from '@playwright/test';