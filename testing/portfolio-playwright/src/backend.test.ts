import test from "@playwright/test";
import BackendPage from "./pages/backend.page";

test.describe("Backend Page", () => {
  let p: BackendPage;
  test.beforeEach(async ({ page }) => {
    p = new BackendPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async () => {
    await p.checkStructure();
  });
});
