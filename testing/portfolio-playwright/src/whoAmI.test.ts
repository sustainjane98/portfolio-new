import test from "@playwright/test";
import WhoAmIPage from "./pages/whoAmI.page";

test.describe("Who Am I Page", () => {
  let p: WhoAmIPage;
  test.beforeEach(async ({ page }) => {
    p = new WhoAmIPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
});
