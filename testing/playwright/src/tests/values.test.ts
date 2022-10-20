import test from "@playwright/test";
import A11yPage from "../pages/a11y.page";
import ValuesPage from "../pages/values.page";
import WhoAmIPage from "../pages/whoAmI.page";

test.describe("Values Page", () => {
  let a11y: A11yPage;
  let p: ValuesPage;
  test.beforeEach(async ({ page, locale }) => {
    a11y = new A11yPage(page);
    p = new ValuesPage(page, locale);
    await p.goTo();
  });
  test("Check visual stucture", async () => {
    await p.checkStructure();
  });
  test("Check a11y", async () => {
    await a11y.check();
  });
});
