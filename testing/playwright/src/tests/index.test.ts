import test from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import IndexPage from "../pages/index.page";

test.describe("Index Page", () => {
  let a11y: A11yPage;
  let p: IndexPage;

  test.beforeEach(async ({ page }) => {
    a11y = new A11yPage(page);
    p = new IndexPage(page);
    await p.goTo();
  });

  test("Check visual stucture", async () => {
    await p.checkStructure();
  });

  test("Check a11y", async () => {
    await a11y.check();
  });
});
