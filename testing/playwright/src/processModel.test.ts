import test from "@playwright/test";
import LighthousePage from "./pages/lighthouse.page";
import ProcessModelPage from "./pages/processModel.page";

test.describe("Process Model Page", () => {
  let p: ProcessModelPage;
  test.beforeEach(async ({ page }) => {
    p = new ProcessModelPage(page);
    await p.goTo();
  });
  test("Check visual stucture", async ({ page }) => {
    await p.checkStructure();
  });
});
