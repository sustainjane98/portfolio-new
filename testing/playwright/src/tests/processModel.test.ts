import test from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import ProcessModelPage from "../pages/processModel.page";

test.describe("Process Model Page", () => {
  let a11y: A11yPage;
  let p: ProcessModelPage;
  test.beforeEach(async ({ page, locale }) => {
    p = new ProcessModelPage(page, locale);
    a11y = new A11yPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async () => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});
