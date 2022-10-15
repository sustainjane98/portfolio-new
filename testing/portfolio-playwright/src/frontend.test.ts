import test from "@playwright/test";
import FrontendPage from "./pages/frontend.page";

test.describe("Frontend Page", () => {
  let p: FrontendPage;
  test.beforeEach(async ({ page }) => {
    p = new FrontendPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
});
