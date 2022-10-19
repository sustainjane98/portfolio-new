import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.de-DEv/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./src/globalSetup"),
  testDir: "./src/tests",
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
  /* Fail the build on CI if you accide-DEntally left test.only in the source code-DE. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.de-DEv/docs/test-reporters */
  reporter: [["html", { outputFolder: "results", open: true }]],
  /* Shared settings for all the projects below. See https://playwright.de-DEv/docs/api/class-testoptions. */
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    /* Maximum time each action such as `click()` can take. de-DEfaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.de-DEv/docs/trace-viewer */
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en",
      },
    },
    {
      name: "Desktop Chrome (de-DE)",
      use: {
        ...devices["Desktop Chrome"],
        locale: "de",
      },
    },
    {
      name: "Desktop Chrome HiDPI",
      use: {
        ...devices["Desktop Chrome HiDPI"],
        locale: "en",
      },
    },
    {
      name: "Desktop Chrome HiDPI (de-DE)",
      use: {
        ...devices["Desktop Chrome HiDPI"],
        locale: "de",
      },
    },
    {
      name: "iPad Pro 11",
      use: {
        ...devices["iPad Pro 11"],
        locale: "en",
      },
    },
    {
      name: "iPad Pro 11 (de-DE)",
      use: {
        ...devices["iPad Pro 11"],
        locale: "de",
      },
    },
    {
      name: "iPhone 12 Pro Max",
      use: {
        ...devices["iPhone 12 Pro Max"],
        locale: "en",
      },
    },
    {
      name: "iPhone 12 Pro Max (de-DE)",
      use: {
        ...devices["iPhone 12 Pro Max"],
        locale: "de",
      },
    },
    {
      name: "iPhone 12 Mini",
      use: {
        ...devices["iPhone 12 Mini"],
        locale: "en",
      },
    },
    {
      name: "iPhone 12 Mini (de-DE)",
      use: {
        ...devices["iPhone 12 Mini"],
        locale: "de",
      },
    },
    {
      name: "Desktop Firefox",
      use: {
        ...devices["Desktop Firefox"],
        locale: "en",
      },
    },
    {
      name: "Desktop Firefox (de-DE)",
      use: {
        ...devices["Desktop Firefox"],
        locale: "de",
      },
    },
    {
      name: "Desktop Firefox HiDPI",
      use: {
        ...devices["Desktop Firefox HiDPI"],
        locale: "en",
      },
    },
    {
      name: "Desktop Firefox HiDPI (de-DE)",
      use: {
        ...devices["Desktop Firefox HiDPI"],
        locale: "de",
      },
    },
    {
      name: "Desktop Safari",
      use: {
        ...devices["Desktop Safari"],
        locale: "en",
      },
    },
    {
      name: "Desktop Safari (de-DE)",
      use: {
        ...devices["Desktop Safari"],
        locale: "de",
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
