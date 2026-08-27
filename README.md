# Playwright Practice

A hands-on Playwright + TypeScript practice project, testing https://playwright.dev/.

## Tech Stack
- Playwright Test (TypeScript)
- Page Object Model
- GitHub Actions CI/CD

## Project Structure
playwright-practice/
├── .github/workflows/ # CI pipeline
├── pages/ # Page Object classes
├── tests/ # Test specs
├── fixtures.ts # Custom fixtures
└── playwright.config.ts

## Running Tests
```bash
npm ci
npx playwright install
npx playwright test
``` 

##  Debugging
```bash
npx playwright test --debug   # step through with the Inspector
npx playwright test --ui      # interactive UI mode
```