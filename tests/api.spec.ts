import { test, expect } from '@playwright/test';

test('GET a post returns 200 and expected fields', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  // BLANK 1: assert the response status is 200 -- use response.status()
  expect(response.status()).toBe(200);
  const body = await response.json();
  // BLANK 2: assert body.id equals 1
  expect(body.id).toBe(1);
});

test('route intercepts and fakes the API response', async ({ page }) => {
  // BLANK 1: call page.route() on 'https://jsonplaceholder.typicode.com/posts/1',
  //          and inside the callback, call route.fulfill() with a fake JSON body
  //          like { id: 999, title: 'Fake Post' }
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async (route) => {
    await route.fulfill({
      json: { id: 999, title: 'Fake Post' }
    });
  });

  await page.goto('about:blank');
  const data = await page.evaluate(() =>
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json())
  );
  // BLANK 2: assert data.id equals 999 -- proving the FAKE data came back, not the real API's data
  expect(data.id).toBe(999);
});

test('GET a non-existent post returns 404', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');
  // BLANK 1: assert the response status is 404 -- use response.status()
  expect(response.status()).toBe(404);
});