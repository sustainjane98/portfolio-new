import test from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import FrontendPage from "../pages/frontend.page";

test.describe("Frontend Page", () => {
  let a11y: A11yPage;
  let p: FrontendPage;
  test.beforeEach(async ({ page, locale }) => {
    a11y = new A11yPage(page);
    p = new FrontendPage(page, locale);
    await p.goTo();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});
