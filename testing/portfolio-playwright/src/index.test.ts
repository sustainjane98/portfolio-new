import test from "@playwright/test";
import IndexPage from "./pages/index.page";

test.describe("Index Page", () => {
  test("Check visual stucture", async ({ page }) => {
    const p = new IndexPage(page);

    await p.checkStructure();
  });
});
