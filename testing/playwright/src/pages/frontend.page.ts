import { Page, expect } from "@playwright/test";

export default class FrontendPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/bio/skills/frontend");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("frontend-page.png", {
      fullPage: true,
    });
  }
}
