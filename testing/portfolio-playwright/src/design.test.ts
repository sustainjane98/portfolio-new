import test from "@playwright/test";
import BackendPage from "./pages/backend.page";
import DesignPage from "./pages/design.page";

test.describe("Design Page", () => {
  let p: DesignPage;
  test.beforeEach(async ({ page }) => {
    p = new DesignPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
});
