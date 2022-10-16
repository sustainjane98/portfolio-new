import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./src/globalSetup"),
  testDir: "./src",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { outputFolder: "results", open: true }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome",
      testMatch: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Chrome Headed"],
        launchOptions: { args: ["--remote-debugging-port=9222"] },
        headless: false,
      },
    },
    {
      name: "Desktop Chrome",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Desktop Chrome HiDPI",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Chrome HiDPI"],
      },
    },
    {
      name: "iPad Pro 11",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["iPad Pro 11"],
      },
    },
    {
      name: "iPhone 12 Pro Max",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["iPhone 12 Pro Max"],
      },
    },
    {
      name: "iPhone 12 Mini",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["iPhone 12 Mini"],
      },
    },
    {
      name: "Desktop Firefox",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "Desktop Firefox HiDPI",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Firefox HiDPI"],
      },
    },

    {
      name: "Desktop Safari",
      testIgnore: /.*lighthouse.test.ts/,
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
  webServer: {
    command: "yarn run build && yarn run start:test",
    port: 3000,
    cwd: "../../apps/portfolio",
  },
};

export default config;
