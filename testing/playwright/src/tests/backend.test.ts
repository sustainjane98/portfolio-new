import test from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import BackendPage from "../pages/backend.page";

test.describe("Backend Page", () => {
  let a11y: A11yPage;
  let p: BackendPage;
  test.beforeEach(async ({ page, locale }) => {
    a11y = new A11yPage(page);
    p = new BackendPage(page, locale);
    await p.goTo();
  });
  test("Check visual stucture", async () => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});
