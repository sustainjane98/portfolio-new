import { Page, expect } from "@playwright/test";

export default class BackendPage {
  constructor(private page: Page) {}

  public async goTo() {
    await this.page.goto("/bio/skills/backend");
  }

  public async checkStructure() {
    await expect(this.page).toHaveScreenshot("backend-page.png", {
      fullPage: true,
    });
  }
}
