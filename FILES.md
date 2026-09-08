# File-by-File Reference — playwright-practice

## Root
- `package.json` / `package-lock.json` — npm project definition and locked dependency versions (Playwright itself, TypeScript).
- `playwright.config.ts` — central config: `baseURL`, which browser projects run (Chromium only, by deliberate choice), retries, reporter settings.
- `fixtures.ts` — custom shared fixture, built specifically to eliminate duplicated setup code across `example.spec.ts` and `search.spec.ts`.
- `.gitignore` — Playwright's own auto-generated ignore rules (already correct out of the box).
- `README.md` — added during the feature-branch/PR practice exercise.

## .github/workflows/
- `playwright.yml` — CI/CD pipeline: checkout → setup-node → `npm ci` → install browsers → run tests → upload the HTML report as an artifact. Triggers on both push and pull_request.

## pages/
- `PlaywrightDevPage.ts` — the Page Object Model class for playwright.dev: `goto()`, `clickGetStarted()`, `clickDocs()`. All three original example tests were refactored to use this instead of raw locators inline.

## tests/
- `example.spec.ts` — the original generated example tests, refactored to go through `PlaywrightDevPage` instead of duplicating locators.
- `search.spec.ts` — data-driven test looping over multiple search terms against playwright.dev's search box; also the file specifically added to justify extracting shared fixtures (proving the duplication problem for real, not hypothetically).
- `api.spec.ts` — two things live here: API testing via the `request` fixture (GET against JSONPlaceholder, asserting status + parsed JSON), and network mocking via `page.route()` intercepting that same URL and faking the response.

## Generated, not hand-written (gitignored)
- `node_modules/` — installed npm packages.
- `playwright-report/` — the HTML report from the most recent run.
- `test-results/` — raw per-test output (screenshots/traces on failure) from the most recent run.