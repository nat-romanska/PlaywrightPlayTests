# Playwright Play Test
A simple project for beginners to get started with Plawright for end-to-end browser testing

## Prerequisities
1. Node.js
2. npm or yarn

## Installation
1. Clone the repository

``` git clone https://github.com/nat-romanska/PlaywrightPlayTests.git
cd PlaywrightPlayTests ```

2. Install dependencies: `npm install`

3. Install plawright browsers: `npx playwright install`

## Running Tests

To run all tests:

```sh
npx playwright test
```

To run a specific test file:

```sh
npx playwright test tests/sample.spec.ts
```

To run tests in interactive UI (watch mode):

```sh
npx playwright test --ui
```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Playwright GitHub](https://github.com/microsoft/playwright)
