import test from "@playwright/test";
import A11yPage from "./pages/a11y.page";
import BackendPage from "./pages/backend.page";
import DesignPage from "./pages/design.page";
import LighthousePage from "./pages/lighthouse.page";

test.describe("Design Page", () => {
  let a11y: A11yPage;
  let p: DesignPage;
  test.beforeEach(async ({ page }) => {
    a11y = new A11yPage(page);
    p = new DesignPage(page);
    await p.goTo();
    await a11y.inject();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});