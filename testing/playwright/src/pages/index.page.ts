import { Page, expect } from "@playwright/test";

export default class IndexPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("index-page.png", {
      fullPage: true,
    });
  }
}
